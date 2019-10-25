export function emitAction (action) {
  let _action = `action${action.name}`
  if (this.hasOwnProperty(_action)) {
    this[_action](action.data)
  } else {
    this.$emit('action', action)
  }
}

export function dispatchAction (action) {
  let namespace = action.namespace || this.store.namespace
  this.$store.dispatch(`${namespace}/${action}`, action.data, { root: true })
}
