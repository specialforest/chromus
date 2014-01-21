if (!window.hotkey_initialized) {

    $(document).on('keydown', function(evt) {
        if (evt.altKey) {
            switch(evt.keyCode) {
                case 221:  //]
                    chrome.extension.sendMessage({ method:'nextTrack' });
                    return false;

                case 219: //[
                    chrome.extension.sendMessage({ method:'previousTrack' });
                    return false;

                case 80: //P
                    chrome.extension.sendMessage({ method:'toggle' });
                    return false;
            }
        }
		
		return true;
    });

    window.hotkey_initialized = true;
}
