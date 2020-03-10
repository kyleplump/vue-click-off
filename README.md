# vue-click-off
A custom Vue directive that can be used to detect when you've clicked off of an element.  Directive also accepts ignored elements, which when clicked, will not fire the directive callback (e.g. a dropdown menu)

# Requirements
vue: ^2.6.0

# Installation
``` sh
$ npm install vue-click-off --save
```

# Usage

1) Import the directive into your component

``` js

import { clickOff } from 'vue-click-off';

export default {
  name: 'VueClickOff',
  directives: {
    clickOff
  },

  methods: {
    clickedOff() {
      alert('clicked off!');
    }
  }
}

``` 

2) Use the directive in your template

``` html

<template>
  <div id="app">
    <div v-click-off="clickedOff">
      <h1>Alert when you click off of me!</h1>
    </div>
  </div>
</template>

```

# Options

You have the option to ignore specified pieces of the DOM from firing your click off handler.  For example, if you wanted to click a menu item in a dropdown, without firing the click off handler.  

1) Import the directive into your component 
2) Specify an array of class names as a data property
2) Use the directive in your template, passing the array of ignored class names

``` js

import { clickOff } from 'vue-click-off';

export default {
  name: 'VueClickOff',
  directives: {
    clickOff
  },
  
  data() {
    return {
      'ignoredEl': [ 'dontFire' ],
    }
  },

  methods: {
    clickedOff() {
      alert('clicked off!');
    }
  }
}

```

``` html 

<template>
  <div id="app">
    <div v-click-off:[ignoredEl]="clickedOff">
      <h1>Alert when you click off of me!</h1>
    </div>
  </div>
</template>

```

# License

[MIT](https://opensource.org/licenses/MIT)
