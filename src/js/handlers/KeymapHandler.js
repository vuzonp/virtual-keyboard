/**
 * @file Declaration of the keymap handler
 * @author Thomas Girard <geek@thomasgirard.fr>
 * @copyright 2015 (c) Thomas Girard
 */

/**
 * Keymap Handler
 * @constructor
 * @param {Object} map - the model of keyboard
 */
var KeymapHandler = function(map)
{
    var k, v;
    for (k in map) {
        if (map.hasOwnProperty(k)) {
            v = map[k];

            // set data as properties
            this[k] = v;

            // list the values in an array
            this._values.push(v)
        }
    }

    // Freeze the keymap
    Object.freeze(this);
};


/**
 * Check if a keyCode is present in the keymap
 * @param {int} keyCode - the code identifier of the key
 * @return {bool}
 */
KeymapHandler.prototype.hasKeyCode = function(keyCode)
{
    return (this._values.indexOf(keyCode) > -1);
};


/**
 * Get the index of a key from the keycode
 * @param {int} keyCode - the code identifier of the key
 * @return {string} - the named index of the key
 */
KeymapHandler.prototype.indexOf = function(keyCode)
{
    if (this.hasKeyCode(keyCode)) {
        for (k in this) {
            if (this.hasOwnProperty(k) && this[k] === keyCode) {
                return k;
            }
        }
    }
};
