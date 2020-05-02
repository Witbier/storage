# storage
A Wrapper on JavaScript local and session storage.

## usage


```js
// import

import Storage from 'storage';

//initialize
const storage = new Storage({type: localStorage, async: false});

//set
storage.set("user", "admin");

//get
storage.get("user"); //admin

//delete
storage.delete("user"); //true



```
### asynchronous usage

```js
// import

import Storage from 'storage';

//initialize
const storage = new Storage({type: sessionStorage, async: true});

//set
storage.set("user", "admin"); // Resolved Promise

//get
storage.get("user"); //Resolved Promise

//delete
storage.delete("user"); //Resolved Promise

//get result in then

storage.get("user").then(function (user){}); // admin


```