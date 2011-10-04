var vows = require('vows'),
    assert = require('assert'),
    fs = require('fs'),
    StringStream = require('spec/helpers').StringStream,
    cmd = require('src/lib/package')['package'];

var templateFile = 'spec/dust/template.dust',
    templateContents = 'dust.register("template"';

function scenario(input, bundle) {
    return function (){
        var results = new StringStream();
        cmd(input, bundle, results, this.callback);
    };
}

vows.describe('Package Command').addBatch({
    'When not given an array of templates': {
        topic: scenario(templateFile),

        'error is given' : function (err, results) {
            assert.isNotNull(err);
        },

        'output stream is still returned': function (err, output) {
            assert.isNotNull(output);
        }
    },

    'When given an array of templates': {
        topic: scenario([templateFile]),

        'error is not given': function (err, results) {
            assert.isNull(err);
        },

        'it will bundle their outputs': function (err, results) {
            assert.include(results.string, templateContents);
        }
    },

    'When bundling dust core': {
        topic: scenario([templateFile], true),

        'it bundles dust': function (err, results) {
            assert.include(results.string, 'dust.render');
        },

        'it bundles the templates': function (err, results) {
            assert.include(results.string, templateContents);
        }
    }
}).export(module);

