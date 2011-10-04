var vows = require('vows'),
    assert = require('assert'),
    fs = require('fs'),
    StringStream = require('spec/helpers').StringStream,
    cmd = require('src/lib/compile').compile;

var templateFile = 'spec/dust/template.dust',
    templateContents = 'dust.register("template"';

function scenario(input) {
    return function (){
        var results = new StringStream();
        cmd(input, results, this.callback);
    };
}

vows.describe('Compile Command').addBatch({
    'When the template does not exist': {
        topic: scenario('unknown file'),

        'error is given': function (err, stream) {
            assert.isNotNull(err);
        },

        'output stream is still returned': function (err, stream) {
            assert.isNotNull(stream);
        }
    },

    'When template is given': {
        topic: scenario(templateFile),

        'template is compiled to output': function (err, output) {
            assert.include(output.string, templateContents);
        }
    }
}).export(module);
