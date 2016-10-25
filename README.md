## Installation
```
npm i jshook --save
```

## Usage

```js
// Use the singleton version
import jshook from 'jshook'

// Register hook
// This is triggered by any dom element with data-jshook="awesome"
jshook.register('awesome', element => {
  element.innerHTML = '<h1>Awesome!</h1>'
})

// Boot all registered hooks!
jshook.boot()


// Use the factory version to create your custom jshook
import { createJshook } from 'jshook'

// Create the polpetta hook
const polpettaHook = createJshook(
    // Custom dom element default use document
    document.getElementById('polpetta'),
    // Custom data-key default is jshook
    'polpetta'
)

// This is triggered by any dom element contained by id="polpetta"
// and with data-polpetta="awesome"
polpettaHook.register('awesome', element => {
  element.innerHTML = '<h1>Polpetta is awesome!</h1>'
})

// Boot all registered polpetta hooks!
polpettaHook.boot()
```
