(function(global) {
    'use strict';
    var needToSearch = false;

    global.document.onmouseup = function (e) {
        if (needToSearch === true) {
            var selection = global.getSelection().toString();
            if (selection.length === 0) {
                return;
            }
            global.open("http://www.google.com/search?q=" + selection);
        }
    };

    global.document.onkeydown = function(e) {
        if (e.keyCode === 17)  {
            // Ctrl down
            needToSearch = true;
        }
    };

    global.document.onkeyup = function(e) {
        if (e.keyCode === 17) {
            // Ctrl up
            needToSearch = false;
        }
    };

    if (!global.document.all) global.document.captureEvents(Event.MOUSEUP);
    console.info("Select and search extension loaded");
})(window);