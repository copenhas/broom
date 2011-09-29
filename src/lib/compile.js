/*jslint node: true */

var dust = require('dust'),
    path = require('path'),
    fs = require('fs');

exports.compile = function (template, out) {
    var output = out || process.stdout;

    var extname = path.extname(template);

    fs.readFile(template, 'utf-8', function (err, contents) {
        console.log("Compiling '" + template + "'");

        if (err) throw err;

        var filename = path.basename(template, extname),
            compiled;

        compiled = dust.compile(contents, filename);

        output.write(compiled);
    });
};
