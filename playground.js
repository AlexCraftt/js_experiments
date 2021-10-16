import { isAsync } from './async/isAsync.js'

const syncFn = (a) => {
  return a
}

const asyncFn = async (a) => {
  return a
}

console.log('syncFn is async?', isAsync(syncFn))
console.log('asyncFn is async?', isAsync(asyncFn))