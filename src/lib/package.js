/*jslint node: true */

var fs = require('fs'),
    path = require('path');

var compile = require('./compile').compile,
    includes = require('./utils/includes');

exports['package'] = function (templates, bundle, out) {
    var output = out || process.stdout;

    if (bundle) {
        console.log('Bundling dust.js core');

        includes.getDustCore(function (err, dust) { 
            output.write(dust);
            writeTemplates(templates, output);
        });
    }
    else {
        writeTemplates(templates, output);
    }
};

function writeTemplates(templates, output) {
    templates.forEach(function (template) {
        compile(template, output);
    });
}

