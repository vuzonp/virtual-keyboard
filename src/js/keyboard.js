// Debug mode for the application
const VKB_DEBUG = true;

// Create the virtual keyboard
var vkb = new KeyboardHandler(DefaultKeymap);

/**
 * Listen the keys
 */
document.onkeydown = function(ev)
{
    vkb.notify(ev);
    return false;
}
