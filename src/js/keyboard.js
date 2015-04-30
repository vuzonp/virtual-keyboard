// Debug mode for the application
const VKB_DEBUG = true;


// Select the best keyboard's layout
var kbl = KeyboardHandler.autoLayout(keyboardLayouts);

// Create the virtual keyboard
var vkb = new KeyboardHandler(kbl);

/**
 * Listen the keys
 */
document.onkeydown = function(ev)
{
    var keyCode = ev.which || ev.keyCode;

    if (VKB_DEBUG) {
        console.log("[Event] onkeydown: key " + keyCode + "(0x" + keyCode.toString(16) + ")");
    }

    // If the key is present in mapped, notify the keyboard.
    if (kbl.has(keyCode)) {
        vkb.notify(ev);
        return false;
    }
}
