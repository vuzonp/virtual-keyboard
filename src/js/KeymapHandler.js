/**
 * Keymap Handler
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
 */
KeymapHandler.prototype.hasKeyCode(keyCode)
{
    return (this._values.indexOf(keyCode) > -1);
};

/**
 * Get the index of a key from the keycode
 */
KeymapHandler.prototype.indexOf(keyCode)
{
    if (this.hasKeyCode(keyCode)) {
        for (k in this) {
            if (this.hasOwnProperty(k) && this[k] === keyCode) {
                return k;
            }
        }
    }
};
