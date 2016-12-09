var exec = require('child_process').exec;
var async = require('async');
var expect = require("chai").expect;
var transl = require('../lib/transl.js');
var program = require('../lib/program.js');

describe('Translate the keyword "night" from english to portuguese', function() {
  describe('with one language setted', function() {
    it('and the result should be "noite"', function(done) {
      execCommand('auto', 'pt', 'night', function(result) {
        expect(result).to.equal('noite');
        done();
      });
    });
  });

  describe('with source and translate language setted', function() {
    it('and the result should be "noite"', function(done) {
      execCommand('en', 'pt', 'night', function(result) {
        expect(result).to.equal('noite');
        done();
      });
    });
  });
});

describe('Translate the phrase "the book is on the table" from english to portuguese', function() {
  describe('with one language setted', function() {
    it('and the result should be "O livro está sobre a mesa"', function(done) {
      execCommand('auto', 'pt', 'the book is on the table', function(result) {
        expect(result).to.equal('O livro está sobre a mesa');
        done();
      });
    });
  });

  describe('with source and translate language setted', function() {
    it('and the result should be "O livro está sobre a mesa"', function(done) {
      execCommand('en', 'pt', 'the book is on the table', function(result) {
        expect(result).to.equal('O livro está sobre a mesa');
        done();
      });
    });
  });
});

describe('The cli arguments', function() {
  it('should be formated correctly with only translate language setted', function() {
    var arguments = {
      '0': 'pt',
      '1': 'tomorrow',
      '2': {
        rawArgs: [
          '/usr/local/Cellar/node/6.2.2/bin/node',
          '/usr/local/bin/transl',
          'pt',
          'tomorrow'
          ]
        }
      };

    var result = program.formatCliArguments('pt', arguments);

    expect(result.sourceLanguage).to.equal('auto');
    expect(result.translateLanguage).to.equal('pt');
    expect(result.keyword).to.equal('tomorrow');
  });

  it('should be formated correctly with source and translate language setted', function() {
    var arguments = {
      '0': 'pt:en',
      '1': 'amanhã',
      '2': {
        rawArgs: [
          '/usr/local/Cellar/node/6.2.2/bin/node',
          '/usr/local/bin/transl',
          'pt:en',
          'amanhã'
          ]
        }
      };

    var result = program.formatCliArguments('pt:en', arguments);

    expect(result.sourceLanguage).to.equal('pt');
    expect(result.translateLanguage).to.equal('en');
    expect(result.keyword).to.equal('amanhã');
  });
});


var execCommand = function(sourceLanguage, translateLanguage, keyword, cb) {
  async.waterfall([
    function (callback) {
      transl.translate(sourceLanguage, translateLanguage, keyword, false, function(result) {
        callback(result);
      });
    }
  ], cb);
};
