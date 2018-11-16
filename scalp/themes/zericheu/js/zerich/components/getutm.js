function getUrlVars() {
    var vars = [], hash;
    var get_url = window.location.href.split("?");
    if (get_url[2] != undefined) {
        var hashes = get_url[2].split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        console.log('get_url[2]');
        console.log(vars);
        return vars;
    } else if (get_url[1] != undefined) {
        var hashes = get_url[1].split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        console.log('get_url[1]');
        console.log(vars);
        return vars;

    } else {
        return false;
    }
}
var get_utm = getUrlVars();
if (get_utm != false) {
    var new_utm = {};
    new_utm.term = get_utm['utm_term'];
    new_utm.source = get_utm['utm_source'];
    new_utm.content = get_utm['utm_content'];
    new_utm.campaign = get_utm['utm_campaign'];
    new_utm.medium = get_utm['utm_medium'];
    if (get_utm) {
        var get_cookie = Cookies.get('utm');
        if (get_cookie != undefined) {
            var parse_cookie = JSON.parse(get_cookie);
            if (get_utm['utm_term'] != parse_cookie) {
                Cookies.set('utm', new_utm, {expires: 180});
            }
        } else {
            Cookies.set('utm', new_utm, {expires: 180});
            if (get_utm['utm_source'] === 'actionpay') {
                Cookies.set('utm_actionpay', {
                    actionpay: get_utm['actionpay'],
                    utm_source: get_utm['utm_source'],
                    utm_medium: get_utm['utm_medium'],
                    utm_campaign: get_utm['utm_campaign']
                }, {expires: 180})
            }
        }
    }
}