(function () {
    'use strict';

    // src/foo.js
    function foo(){
        let data='黄豪是sx';
        console.log(data);
    }

    // src/main.js
    function main () {
        console.log(foo);
    }

    return main;

})();
