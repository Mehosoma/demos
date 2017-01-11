<?php
	$data = array(
		'request' => array(
			'name'  => array('name' => 'Имя', 'required' => 1),
			'phone' => array('name' => 'Телефон', 'required' => 1),
			'when' => array('name' => 'Когда перезвонить', 'required' => 1),
			'vopros' => array('name' => 'Что беспокоит', '' => 0),
		)
	);

	if ((isset($_GET['type'])) && (isset($data[$_GET['type']]))) {
		$fields = $data[$_GET['type']];

		$errors = array();
		foreach ($fields as $field => $field_params) {
			if (($field_params['required']) && (empty($_POST[$field]))) {
				$errors[] = $field;
			}
		}

		if (sizeof($errors)) {
			print json_encode(array('ok' => 0, 'errors' => $errors));
			exit;
		} else {
			$html = '';

			foreach ($fields as $field => $field_params) {
				if ($field == 'product_id') {
					$product_id = (int)$_POST[$field];
					include_once('./config.php');
					mysql_connect(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD);
					mysql_select_db(DB_DATABASE);
					mysql_query('SET NAMES utf8');

					$product_info = array();
					$q = mysql_query('SELECT p.model, pd.name FROM oc_product p JOIN oc_product_description pd ON p.product_id = pd.product_id WHERE pd.product_id = ' . $product_id);
					while ($r = mysql_fetch_object($q)) {
						$product_info['name'] = $r->name . ' ' . $r->model;
					}

					$html .= isset($_POST[$field]) ? ($field_params['name'] . ': ' . $product_info['name'] . ' (#' . $product_id . ')' . "\n") : '';
				} else {
					$html .= isset($_POST[$field]) ? ($field_params['name'] . ': ' . $_POST[$field] . "\n") : '';
				}
			}

			mail("den@pi-art.ru", "Сообщение с сайта", $html, "content-type:text/plain;charset=utf-8");
			mail("", "Message from site", $html, "content-type:text/plain;charset=utf-8");

			print json_encode(array('ok' => 1));
			exit;
		}
	} else {
		print json_encode(array('ok' => 0));
		exit;
	}

	/*

	*/
?>
