/**
 * Atarilike Easteregg
 * Triggers at up, up, down, down, left, right, left, right, b, a
 *
 * @class atari
 * @static
 * @author Ferdinand Grüner
 */
var atariHack = function (func) {

    /**************************************
     * Private Variables
     **************************************/

    // keyvalues: up, up, down, down, left, right, left, right, b, a
    var keyArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var counter = 0;
    var timeout;


    /**************************************
     * Private Functions
     **************************************/

    /**
     * init function
     * @params {function func}
     */
    function initialize(func) {

        /**
         * Logs the keyboardevents
         * @param e
         */
        window.onkeyup = function (e) {

            // Get keyvalue
            var key = e.keyCode ? e.keyCode : e.which;

            // Checks if the current pressed key fits the key order
            if (key == keyArray[counter]) {

                // Checks if atari code is complete
                if (key == 65) {
                    func();
                    clearTimeout(timeout);
                    resetCounter();
                    return;
                }

                // Reset timer and raise current position
                resetTimer();
                counter++;
                return;
            }

            // When wrong key is pressed reset counter
            resetCounter();
        };
    }

    /**
     * Resets the counter of correct keypresses
     */
    function resetCounter() {
        counter = 0;
    }

    /**
     * Clears and resets the timer after which the counter gets reset
     */
    function resetTimer() {
        clearTimeout(timeout);
        timeout = setTimeout(resetCounter, 500);
    }

    /**************************************
     * Initialization
     **************************************/

    document.addEventListener('DOMContentLoaded', initialize(func), false);
};

/**
 * Initialize the atariHack
 */
new atariHack(function(){
    alert("What a surprise =)");
});