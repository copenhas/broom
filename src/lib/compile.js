/*jslint node: true */

var dust = require('dust'),
    path = require('path'),
    fs = require('fs');

exports.compile = function (template, out) {
    var output = out || process.stdout;

    var extname = path.extname(template);

    console.log("Compiling '" + template + "'");

    fs.readFile(template, 'utf-8', function (contents) {
        var filename = path.basename(template, extname),
            compiled;

        compiled = dust.compile(contents, filename);

        output.write(compiled);
    });
};
