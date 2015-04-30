// Debug mode for the application
const VKB_DEBUG = true;

// Select the best keyboard's layout
var layout = KeyboardHandler.autoLayout({
    generic: genericKeyboardLayout,
    gecko: geckoKeyboardLayout,
});

// Create the virtual keyboard
var vkb = new KeyboardHandler(layout);

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
    if (layout.hasKeyCode(keyCode)) {
        vkb.notify(ev);
        return false;
    }
}
