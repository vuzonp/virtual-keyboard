/**
 * @file Declaration of the key handler
 * @author Thomas Girard <geek@thomasgirard.fr>
 * @copyright 2015 (c) Thomas Girard
 */

/**
 * KeyHandler
 *
 * Individual handling of keyboard keys
 *
 * @constructor
 * @param {string} svgIdentifier - the element's dom id of the key.
 * @param {int} keyCode - the code assigned to the key
 */
var KeyHandler = function(svgIdentifier, keyCode)
{
    // Set the keyCode value:
    if ( ! isNaN(keyCode) ) {
        this.code = parseInt(keyCode);
    } else {
        console.log("Invalid keyCode value (NaN)");
    }

    // Attach a svg element to the key:
    this.elem = document.getElementById(svgIdentifier);

    if (VKB_DEBUG) {
        console.log("[KeyHandler] Key [" + svgIdentifier + "] is identified by : " + keyCode);
    }
}

/**
 * keyCode assigned to the object
 * @memberof KeyHandler.prototype
 */
KeyHandler.prototype.code = -1;

/**
 * Svg element assigned to the key
 * @memberof KeyHandler.prototype
 */
KeyHandler.prototype.elem = undefined;

/**
 * Map of characters assigned to the key
 * @memberof KeyHandler.prototype
 */
KeyHandler.prototype.charList = undefined;

/**
 * Enable the key
 * @memberof KeyHandler
 */
KeyHandler.prototype.on = function()
{
    if (VKB_DEBUG) {
        console.log("[KeyHandler] switch on: " + this.code);
        console.log(this.elem);
    }

    // Highlights the key
    this.elem.classList.add('on');

    return this;
}

/**
 * Disable the key
 * @memberof KeyHandler
 */
KeyHandler.prototype.off = function()
{
    if (VKB_DEBUG) {
        console.log("[KeyHandler] turn off: " + this.code);
    }

    // Return to normal appareance
    this.elem.classList.remove('on');

    return this;
}

/**
 * Set a list of characters to the key
 * @memberof KeyHandler
 * @param {array} charList - list of characters associated to the key
 * @returns {self}
 */
KeyHandler.prototype.setCharacters = function(charList)
{
    this.charList = charList.map( function(char) {
        return ( isNaN(char) ) ? char.charCodeAt(0) : char;
    });

    return this;
}

/**
 * Get the default character associated with the key
 * @memberof KeyHandler
 * @returns {int} charCode of the key
 */
KeyHandler.prototype.getChar = function()
{
    return this.charList[0];
}

/**
 * Get the character associated with the key and [Shift]
 * @memberof KeyHandler
 * @returns {int} charCode of the key
 */
KeyHandler.prototype.getShiftChar = function()
{
    return this.charList[1];
}

/**
 * Get the character associated with the key and [Alt Gr]
 * @memberof KeyHandler
 * @returns {int} charCode of the key
 */
KeyHandler.prototype.getAltChar = function()
{
    return this.charList[2];
}

/**
 * Get the character associated with the key and [Shift] + [Alt Gr]
 * @memberof KeyHandler
 * @returns {int} charCode of the key
 */
KeyHandler.prototype.getShiftAltChar = function()
{
    return this.charList[3];
}
