/**
 * @file Mapping of keyboards
 * @author Thomas Girard <geek@thomasgirard.fr>
 * @copyright 2015 (c) Thomas Girard
 */

/**
 * Key Codes for Standard Keyboards
 */
var genericKeyboardLayout = new KeyboardLayoutModel({

/*
    See more:
    - http://www.w3.org/TR/DOM-Level-3-Events-code/#keyboard-101
    - https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
*/

// Writing System Keys

    backquote:      0xC0,   // ` and ~ on a US keyboard. This is the 半角/全角/漢字 (hankaku/zenkaku/kanji) key on Japanese keyboards
    backslash:      0xDC,   // \ and | on a US keyboard. Found only on standard 101-key layouts.
    backspace:      0x08,   // Labelled Delete on Macintosh keyboards.
    bracketLeft:    0xDB,   // [ and { on a US keyboard.
    bracketRight:   0xDD,   // ] and } on a US keyboard.
    comma:          0xBC,   // , and < on a US keyboard.
    digit0:         0x30,   // 0 and ) on a US keyboard.
    digit1:         0x31,   // 1 and ! on a US keyboard.
    digit2:         0x32,   // 2 and @ on a US keyboard.
    digit3:         0x33,   // 3 and # on a US keyboard.
    digit4:         0x34,   // 4 and $ on a US keyboard.
    digit5:         0x35,   // 5 and % on a US keyboard.
    digit6:         0x36,   // 6 and ^ on a US keyboard.
    digit7:         0x37,   // 7 and & on a US keyboard.
    digit8:         0x38,   // 8 and * on a US keyboard.
    digit9:         0x39,   // 9 and ( on a US keyboard.
    equal:          0xBB,   // = and + on a US keyboard.
    intlBackslash:  0x31,   // Located between the 'ShiftLeft' and 'KeyZ' keys. The \ and | key on a UK keyboard.
    intlHash:       0x00,   // Located between the 'Quote' and 'Enter' keys on row E of the keyboard. The # and ~ key on a UK keyboard.
    intlRo:         0xC1,   // Located between the 'Slash' and 'ShiftRight' keys. The \ and ろ (ro) key on a Japanese keyboard.
    intlYen:        0xFF,   // Located between the 'Equal' and 'Backspace' keys. The ¥ (yen) key on a Japanese keyboard. The \ and / key on a Russian keyboard.
    keyA:           0x41,   // a on a US keyboard. Labelled q on an AZERTY (e.g., French) keyboard.
    keyB:           0x42,   // b on a US keyboard.
    keyC:           0x43,   // c on a US keyboard.
    keyD:           0x44,   // d on a US keyboard.
    keyE:           0x45,   // e on a US keyboard.
    keyF:           0x46,   // f on a US keyboard.
    keyG:           0x47,   // g on a US keyboard.
    keyH:           0x48,   // h on a US keyboard.
    keyI:           0x49,   // i on a US keyboard.
    keyJ:           0x4A,   // j on a US keyboard.
    keyK:           0x4B,   // k on a US keyboard.
    keyL:           0x4C,   // l on a US keyboard.
    keyM:           0x4D,   // m on a US keyboard.
    keyN:           0x4E,   // n on a US keyboard.
    keyO:           0x4F,   // o on a US keyboard.
    keyP:           0x50,   // p on a US keyboard.
    keyQ:           0x51,   // q on a US keyboard.
    keyR:           0x52,   // r on a US keyboard.
    keyS:           0x53,   // s on a US keyboard.
    keyT:           0x54,   // t on a US keyboard.
    keyU:           0x55,   // u on a US keyboard.
    keyV:           0x56,   // v on a US keyboard.
    keyW:           0x57,   // w on a US keyboard.
    keyX:           0x58,   // x on a US keyboard.
    keyY:           0x59,   // y on a US keyboard.
    keyZ:           0x5A,   // z on a US keyboard.
    minus:          0xBD,   // - and _ on a US keyboard.
    period:         0xBE,   // . and > on a US keyboard.
    quote:          0xDE,   // ' and " on a US keyboard.
    semicolon:      0xBA,   // ; and : on a US keyboard.
    slash:          0xBF,   // / and ? on a US keyboard.

// Functional Keys

    altLeft:        0x12,   // Labelled Alt or Option.
    altRight:       0x12,   // Labelled Alt or Option. This is the AltGr key on many keyboard layouts.
    capsLock:       0x14,   // The application context menu key, which is typically found between the right OS key and the right Control key.
    contextMenu:    0x5D,   //
    controlLeft:    0x11,   //
    controlRight:   0x11,   //
    enter:          0x0D,   // Labelled Enter and Return on Macintosh keyboards.
    oSLeft:         0x5B,   // The Windows, Command or other OS symbol key.
    oSRight:        0x5C,   // The Windows, Command or other OS symbol key.
    shiftLeft:      0x10,   //
    shiftRight:     0x10,   //
    space:          0x20,   // The \s key.
    tab:            0x09,   // The \t key

// Control Pad Section

    delete:         0x2E,   //
    end:            0x23,   //
    help:           -1,     // Not present on standard PC keyboards.
    home:           0x24,   //
    insert:         0x2D,   // Not present on Apple keyboards.
    pageDown:       0x22,   //
    pageUp:         0x21,   //

// Arrow Pad Section

    arrowDown:      0x28,   // The ↓ key
    arrowLeft:      0x25,   // The ← key
    arrowRight:     0x27,   // The → key
    arrowUp:        0x26,   // The ↑ key

// Function Section

    escape:         0x18,   //
    f1:             0x70,   // Function key
    f2:             0x71,   // Function key
    f3:             0x72,   // Function key
    f4:             0x73,   // Function key
    f5:             0x74,   // Function key
    f6:             0x75,   // Function key
    f7:             0x76,   // Function key
    f8:             0x77,   // Function key
    f9:             0x78,   // Function key
    f10:            0x79,   // Function key
    f11:            0x7A,   // Function key
    f12:            0x7B,   // Function key
    fn:             0x00,   //
    printScreen:    0x2C,   // PrintScreen and SysReq
    scrollLock:     0x91,   //
    pause:          0x13,   // Pause and Break

});

/**
 * Key Codes for Gecko (Mozilla) Keyboards
 */
var geckoKeyboardLayout = new KeyboardLayoutModel(genericKeyboardLayout).customize({

    equal:          0x3D,
    intlHash:       0x00,
    intlRo:         0x00,
    intlYen:        0x00,
    minus:          0xAD,
    oSRight:        0x5B,
    quote:          0xDE,
    semicolon:      0x3B,

});
