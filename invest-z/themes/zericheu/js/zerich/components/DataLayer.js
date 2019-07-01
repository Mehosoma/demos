function DLayer() {
}

DLayer.prototype.push = function (eventLabel, eventCategory) {
    dataLayer.push({'event': 'GAevent', eventCategory: eventCategory, 'eventAction': 'send', 'eventLabel': eventLabel});
};
DLayer.prototype.getEventLabel = function () {
    console.log(window.location.href);
};