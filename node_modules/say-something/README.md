# Say something [![Build Status](https://travis-ci.org/vitorleal/say-something.svg?branch=master)](https://travis-ci.org/vitorleal/say-something)
[![NPM](https://nodei.co/npm/say-something.png?downloads=true)](https://nodei.co/npm/say-something/)

Say something is a node.js module to make your apps and things talk using the Google Trasnlate Voice.
It requeires internet connection.

## Install
Use NPM to instal the module

```
$ npm install say-something
```


## Example
Quick example:

```js
var SaySomehting = require('say-something');
	saySomething = new SaySomehting();

 //Say something
 saySomething.now('I am talking to you!');

 //When start talking
 saySomething.on('talking', function (text) {
   console.log("I'm saying: " + text);
 });

 //After stop talking
 saySomething.on('done', function () {
   console.log("I'm done talking");
 });
```

Change the default language (en) to 'pt-br' for example:

```js
var SaySomehting = require('say-something');
	saySomething = new SaySomehting({ language: 'pt-br' });

 //Say something
 saySomething.now('Eu estou falando!');

 //When start talking
 saySomething.on('talking', function (text) {
   console.log('Comecei a falar: ' + text);
 });

 //After stop talking
 saySomething.on('done', function () {
   console.log('Terminei de falar');
 });
```


## Documentation
Read the Docs - [Link](https://github.com/vitorleal/say-something/blob/master/DOCS.md)


## Author
| [![twitter/vitorleal](http://gravatar.com/avatar/e133221d7fbc0dee159dca127d2f6f00?s=80)](http://twitter.com/vitorleal "Follow @vitorleal on Twitter") |
|---|
| [Vitor Leal](http://vitorleal.com) |


## License
[LICENSE](https://github.com/vitorleal/say-something/blob/master/LICENSE.txt)

