var path = require('path'),
    fs = require('fs');

exports.clean = function (targets) {
    for(var target in targets) {
        console.log("Bye bye old dust '" + target + "'");

        if (path.existsSync(target)) {
            fs.unlinkSync(target);
        }
    }
};
