/*jslint node: true */

var fs = require('fs'),
    path = require('path');

var compile = require('./compile').compile,
    includes = require('./utils/includes');

exports['package'] = function (templates, bundle, out, whenDone) {
    var output = out || process.stdout;

    if (typeof templates.forEach !== 'function') {
        whenDone(
            new Error('Input templates has to at least implement forEach()'), 
            output
        );
        return;
    }

    if (bundle) {
        console.log('Bundling dust.js core');

        includes.getDustCore(function (err, dust) { 
            if (err) {
                whenDone(err);
                return;
            }

            output.write(dust);
            writeTemplates(templates, output, whenDone);
        });
    }
    else {
        writeTemplates(templates, output, whenDone);
    }
};

function writeTemplates(templates, output, whenDone) {
    var count = 0,
        total = templates.length;

    templates.forEach(function (template) {
        compile(template, output, function (err) {
            if (err) whenDone(err);

            count++;

            if (count === total) {
                whenDone(null, output);
            }    
        });
    });
}

