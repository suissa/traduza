var events  = require('events'),
    util    = require('util'),
    request = require('request'),
    Lame    = require('lame'),
    Speaker = require('speaker'),
    _       = require('underscore');


/**
 * Creates an instance of the SaySomething object.
 * @class
 * @param config {object} - configuration object.
 * @param config.language {string} - OPTIONAL (dafault 'en').
 * @extends EventEmitter
 * @fires taliking - will be emitted when talking something.
 * @fires done - will be emitted after say something.
 * @example
 * ```js
 * var SaySomething = require('say-something'),
 *     saySomething = new SaySomething({
 *       language: 'pt-br' //default language is 'en'
 *     });
 * ```
 */
 var SaySomething = function (config) {
  'use strict';

  //If is not instance of SaySomething  return a new instance
  if (false === (this instanceof SaySomething)) {
    return new SaySomething(config);
  }

  events.EventEmitter.call(this);

  this.defaults = {
    language: 'en'
  };

  //Extend default with the config object
  _.extend(this.defaults, config);

  return this;
};


/**
 * Nodejs EventEmitter.
 * @external EventEmitter
 * @see {@link http://nodejs.org/api/events.html#events_class_events_eventemitter}
 */
/**
 * Talking event will be fired when talking something.
 * @event talking
 * @example
 * ```js
 * ...
 *
 * saySomething.on('talking', function (text) {
 *   console.log('Im talking: ' + text);
 * });
 * ```
 */
/**
 * Done event will be fired after say something.
 * @event done
 * @example
 * ```js
 * ...
 *
 * saySomething.on('done', function () {
 *   console.log('Im done talking');
 * });
 * ```
 */
util.inherits(SaySomething, events.EventEmitter);


SaySomething.prototype._getUrl = function (text) {
  var t = text ? text : '';
  return 'https://translate.google.com/translate_tts?tl='+ this.defaults.language +'&q='+ encodeURIComponent(t) +'&client=tw-ob';
};


/**
 * Say something now
 * @param text {string} - The text the machine should say.
 * @example
 * ```js
 * ...
 *
 * saySomething.now('Hi, i am your machine, and i am talking to you!');
 * ```
 */
SaySomething.prototype.now = function (text) {
  var _this   = this,
      speaker = new Speaker();

  //Make it talk
  request(this._getUrl(text))
    .pipe(new Lame.Decoder)
    .pipe(speaker);

  //Emit events
  speaker.on('open', function () {
    _this.emit('talking', text);
  });

  speaker.on('close', function () {
    _this.emit('done');
  });

  return this;
};


module.exports = SaySomething;
