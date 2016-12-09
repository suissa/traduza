#Index

**Classes**

* [class: SaySomething](#SaySomething)
  * [new SaySomething(config)](#new_SaySomething)
  * [saySomething.now(text)](#SaySomething#now)

**Events**

* [event: "talking"](#event_talking)
* [event: "done"](#event_done)

<a name="SaySomething"></a>
#class: SaySomething
**Extends**: `EventEmitter`
**Members**

* [class: SaySomething](#SaySomething)
  * [new SaySomething(config)](#new_SaySomething)
  * [saySomething.now(text)](#SaySomething#now)

<a name="new_SaySomething"></a>
##new SaySomething(config)
Creates an instance of the SaySomething object.

**Params**

- config `object` - configuration object.
  - language `string` - OPTIONAL (dafault 'en').

**Extends**: `EventEmitter`
**Fires**

- [event:taliking - will be emitted when talking something.](event:taliking - will be emitted when talking something.)
- [event:done - will be emitted after say something.](event:done - will be emitted after say something.)

**Example**
```js
var SaySomething = require('say-something'),
    saySomething = new SaySomething({
      language: 'pt-br' //default language is 'en'
    });
```

<a name="SaySomething#now"></a>
##saySomething.now(text)
Say something now

**Params**

- text `string` - The text the machine should say.

**Example**
```js
...

saySomething.now('Hi, i am your machine, and i am talking to you!');
```

<a name="event_talking"></a>
#event: "talking"
Talking event will be fired when talking something.

**Example**
```js
...

saySomething.on('talking', function (text) {
  console.log('Im talking: ' + text);
});
```

<a name="event_done"></a>
#event: "done"
Done event will be fired after say something.

**Example**
```js
...

saySomething.on('done', function () {
  console.log('Im done talking');
});
```

