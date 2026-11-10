/**
 * Client-Side Inspection & Right-Click Deterrent
 * Disables context menu (right click) and developer keyboard shortcuts.
 */
(() => {
    // 1. Disable Right Click (Context Menu)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // 2. Disable Developer & Source Inspection Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const metaOrCtrl = isMac ? e.metaKey : e.ctrlKey;

        // F12 key
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl/Cmd + Shift + I (Inspect)
        // Ctrl/Cmd + Shift + J (Console)
        // Ctrl/Cmd + Shift + C (Element selector)
        if (metaOrCtrl && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl/Cmd + U (View Source)
        if (metaOrCtrl && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl/Cmd + S (Save Page)
        if (metaOrCtrl && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    // 3. Prevent dragging images to desktop / new tab
    document.addEventListener('dragstart', (e) => {
        if (e.target && e.target.nodeName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
})();
