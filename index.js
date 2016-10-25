import jshook, { createJshook } from './src'

// Use the singleton version
jshook.register('awesome', element => {
  element.innerHTML = '<h1>Awesome!</h1>'
})

jshook.register('awesome', element => {
  element.innerHTML = '<h1>Not so awesome</h1>'
})

jshook.boot()
jshook.boot()
jshook.boot()

// Create custom jshook!
const polpettaHook = createJshook(document.getElementById('polpetta'), 'polpetta')
polpettaHook.register('awesome', element => {
  element.innerHTML = '<h1>Polpetta is awesome!</h1>'
})
polpettaHook.boot()
