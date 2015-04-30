/**
 * @file Declaration of the keymap handler
 * @author Thomas Girard <geek@thomasgirard.fr>
 * @copyright 2015 (c) Thomas Girard
 */

/**
 * Keyboard Layout Handler
 * @constructor
 * @param {Object} layout - the model of keyboard
 */
var KeyboardLayoutModel = function(layout)
{
    this.customize(layout);
};

/**
 * List of values stored in the object
 */
 KeyboardLayoutModel.prototype._values = [];


 KeyboardLayoutModel.prototype.customize = function(layout)
{
    var k, v;
    for (k in layout) {
        if (layout.hasOwnProperty(k)) {
            v = layout[k];

            // set data as properties
            this[k] = v;

            // list the values in an array
            this._values.push(v)
        }
    }
}

/**
 * Check if a keyCode is present in the keymap
 * @param {int} keyCode - the code identifier of the key
 * @return {bool}
 */
 KeyboardLayoutModel.prototype.hasKeyCode = function(keyCode)
{
    return (this._values.indexOf(keyCode) > -1);
};


/**
 * Get the index of a key from the keycode
 * @param {int} keyCode - the code identifier of the key
 * @return {string} - the named index of the key
 */
 KeyboardLayoutModel.prototype.indexOf = function(keyCode)
{
    if (this.hasKeyCode(keyCode)) {
        for (k in this) {
            if (this.hasOwnProperty(k) && this[k] === keyCode) {
                return k;
            }
        }
    }
};
