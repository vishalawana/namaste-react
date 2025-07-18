const fs = require('node:fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});

// When will the setTimeout callback be executed relative to the file read operation? Why?

// (Understanding the delay caused by the blocking while-loop and poll phase behavior.)

// Why does the final log statement show around 105ms delay instead of 100ms?

// (Testing your grasp of how synchronous blocking delays timer execution.)

// What phase does fs.readFile complete its callback in?

// (It queues the callback during the poll phase.)

// If the while loop inside the fs.readFile callback was not there, would the setTimeout callback execute closer to 100ms?

// (Explores how blocking synchronous code affects the event loop.)

// What would happen if we used setImmediate instead of setTimeout?

// (Triggers discussion about the check phase and microtasks.)

// At what phase does the event loop wrap back to timers if a timer is due while in poll?

// (Highlights wrapping behavior mentioned in Node.js docs.)

// Would adding a Promise.resolve().then(...) change the execution order of callbacks in this example?

// (Tests knowledge of microtask queue vs macrotask queue.)

// How does the event loop determine how long to block in the poll phase?

// (Touches on internal mechanics of libuv and event loop timing.)