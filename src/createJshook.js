export default (root = document, dataKey = 'jshook') => {
  // Store hooks
  const hooks = {}

  // Has alredy booted?
  let booted = false

  // Execute given function only when jshook is not alredy booted
  const whenNotBooted = (fn) => (...args) => {
    if (booted) {
      console.warn(
        `Alredy booted, register/unregister or boot actions must be ` +
        `performed before booting the first time.`
     )
      return
    }
    return fn(...args)
  }

  // Is hook alredy registered?
  const isRegistered = (key) => typeof hooks[key] !== 'undefined'

  // Register hook
  const register = whenNotBooted((key, fn, options = {}) => {
    if (isRegistered(key)) {
      console.warn(
        `The hook for key ${key} is alredy registered, you have to ` +
        `explicit unregister them before re-register the hook.`
      )
      return
    }
    hooks[key] = { fn, options }
  })

  // Unregister hook
  const unregister = whenNotBooted((key) => {
    delete hooks[key]
  })

  // Boot hooks
  const boot = whenNotBooted(() => {
    Array.from(root.querySelectorAll(`[data-${dataKey}]`)).forEach(element => {
      const key = element.getAttribute(`data-${dataKey}`)

      if (!isRegistered(key)) {
        console.warn(`No hook defined for key ${key}.`)
        return
      }

      // TODO: Implement options...
      const { fn } = hooks[key]
      fn(element)
    })
    // jshook is now booted!
    booted = true
  })

  // jshook lib
  return { register, unregister, isRegistered, boot }
}
