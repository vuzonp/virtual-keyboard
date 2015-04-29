/**
 * Keyboard Handler
 * @constructor
 * @param {KeymapHandler} keymap - the mapping to use by the keyboard
 */
var KeyboardHandler = function(keymap)
{
    this.defineKeymap(keymap);
}

/**
 * Last event from the keyboard
 */
KeyboardHandler.prototype.ev = undefined;

/**
 * Map of keys assigned to the keyboard
 */
KeyboardHandler.prototype.keyList = {};

/**
 * Currently active key
 */
KeyboardHandler.prototype.currentKey = undefined;

/**
 * Previous active key
 */
KeyboardHandler.prototype.oldKey = undefined;

/**
 * Arrange the keys on the keyboard from a specific model
 * @param {Object} svgIdentifier - the map of the keyboard.
 */
KeyboardHandler.prototype.defineKeymap = function(keymap)
{
    var self = this;
    var k;
    for (k in keymap) {
        this.keyList[keymap[k]] = new KeyHandler(k, keymap[k]);
    }
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
