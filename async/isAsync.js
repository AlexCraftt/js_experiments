// higher-order function, checks if an argument function is asynchronous
export const isAsync = (fnc) => {
  const AsyncFunction = (async () => {}).constructor
  const GeneratorFunction = (function* () {}).constructor
  return fnc instanceof AsyncFunction && AsyncFunction !== Function && AsyncFunction !== GeneratorFunction
}
