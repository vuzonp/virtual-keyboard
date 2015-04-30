/**
 * @file Declaration of the keyboard handler
 * @author Thomas Girard <geek@thomasgirard.fr>
 * @copyright 2015 (c) Thomas Girard
 */

/**
 * Keyboard Handler
 * @constructor
 * @param {KeyboardLayoutModel} layout - the layout to apply of the keyboard
 */
var KeyboardHandler = function(layout)
{
    if (layout instanceof KeyboardLayoutModel) {
        this.setLayout(layout);
    } else {
        console.log("[KeyboardHandler] Invalid layout of keyboard (KeyboardLayoutModel)");
        console.log(layout);
    }
};

/**
 * Detection of the OS
 */
KeyboardHandler.detectOS = function()
{
    if (navigator.appVersion.indexOf("Win") !== -1) {
        return "win";
    } else if (navigator.appVersion.indexOf("Mac") !== -1) {
        return "mac";
    } else if ((navigator.appVersion.indexOf("X11") !== -1) || (navigator.appVersion.indexOf("Linux") !== -1)) {
        return "x11";
    } else {
        return "generic";
    }
};

/**
 * Detection of the layout engine
 */
KeyboardHandler.detectLayoutEngine = function()
{
    if (typeof InstallTrigger !== "undefined") {
        return "gecko";
    } else if (!!window.webkitURL) {
        return "webkit";
    } else if (/*@cc_on!@*/false || !!document.documentMode) {
        return "trident";
    } else {
        return "generic";
    }
};

/**
 * Select the best layout to use by the keyboard from a browser engine detection
 */
KeyboardHandler.autoLayout = function(kbls)
{
    var os = KeyboardHandler.detectOS();
    var engine = KeyboardHandler.detectLayoutEngine();

    if ("generic" === os || "generic" === engine) {
        if (VKB_DEBUG) console.log("[KeyboardLayout] Detected layout: generic");
        return kbls.generic;
    } else {
        if (VKB_DEBUG) console.log("[KeyboardLayout] Detected layout: keyboardLayouts.%s.%s", engine, os);
        return kbls[engine][os];
    }
};

/** Mapping used by the keyboard */
KeyboardHandler.prototype.layout = undefined;

/** Last event from the keyboard */
KeyboardHandler.prototype.ev = undefined;

/** Map of keys assigned to the keyboard */
KeyboardHandler.prototype.keyList = {};

/** Currently active key */
KeyboardHandler.prototype.currentKey = undefined;

/** Previous active key */
KeyboardHandler.prototype.oldKey = undefined;

/**
 * Arrange the keys on the keyboard from a specific model
 * @param {Object} svgIdentifier - the map of the keyboard.
 */
KeyboardHandler.prototype.setLayout = function(layout)
{
    var self = this;
    var k;
    for (k in layout) {
        if (layout.hasOwnProperty(k)) {
            this.addKey(
                k.charAt(0).toUpperCase() + k.slice(1),
                layout[k]
            );
        }
    }

    this.layout = layout;
    return this;
}

/**
 * Attach a new key to the keyboard
 * @param {string} svgIdentifier - the dom id of the key.
 * @param {int} keyCode - the code identifier of the key
 * @param {array} values - list of characters associated to the key
 */
KeyboardHandler.prototype.addKey = function(svgIdentifier, keyCode)
{
    var key = new KeyHandler(svgIdentifier, keyCode);
    //key.setCharacters(values);

    this.keyList[keyCode] = key;
    return this;
}

/**
 * Verify if a key  from keyCode
 * @param {int} keyCode - the code identifier of the key
 */
KeyboardHandler.prototype.keyExists = function(keyCode)
{
    return (this.keyList[keyCode] && this.keyList[keyCode] instanceof KeyHandler);
}

/**
 * Get a key Object from keyCode
 * @param {int} keyCode - the code identifier of the key
 */
KeyboardHandler.prototype.getKey = function(keyCode)
{
    return this.keyList[keyCode];
}

/**
 * Notify the keyboard of a new event
 * @param {KeyboardEvent} ev - active event of the keyboard
 */
KeyboardHandler.prototype.notify = function(ev)
{
    // Get the current key event
    this.ev = ev;

    // Keep the prev key in cache
    if (this.currentKey) {
        this.oldKey = this.currentKey.off();
    }

    // Activate the current key
    var keyCode = this.ev.which;
    if ( this.keyExists(keyCode) ) {
        this.currentKey = this.getKey(keyCode).on();
    }

}
