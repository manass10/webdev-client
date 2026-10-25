// Demonstrates three different ways a module can be imported in JS/TS.

// Named export - a plain function
export function add(a, b) {
  return a + b;
}

// Named export - another plain function
export function multiply(a, b) {
  return a * b;
}

// Default export - a single object bundling related functions
const mathLib = {
  add,
  multiply,
  square: (x) => x * x,
};

export default mathLib;
