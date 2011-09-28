/*jslint node: true */

var dust = require('dust'),
    fs = require('fs'),
    path = require('path');

exports.getDustCore = function (callback) {
    //try to locate the dust module and grab the core code
    var mod = require.paths
                     .filter(function (p) {
                        return path.basename(p) === 'dust';
                     })[0],
        dustCore = path.join(mod, 'lib/dust.js');

    path.exists(dustCore, function (exists) {
        if (!exists) {
            throw new Error('Dust.js core not found');
        }

        fs.readFile(dustCore, callback);
    });
};
