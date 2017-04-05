# The Challenge

The challenge is to write a function that accepts an arbitrarily-deep nested Array-like structure and returns a flattened structure with any null values removed. Include documentation about how to run your code and how your solution works, especially any cases in which it might fail and tradeoffs. Please include a few test cases. Feel free to implement the challenge using whatever programming language you're most comfortable with.

As an example, in JavaScript, your function may look something like this:

```
function flatten(arr) {
  // Implement me!
}

flatten([0, 2, [[2, 3], 8, 100, null, [[null]]], -2]);
// [0, 2, 2, 3, 8, 100, -2]
```

### How To Run
1. npm install mocha -- save
2. npm install chai -- save
3. npm test


### Cases where my solution may fail and tradeoffs
My solution will work with any cases however it heavily relies
on recursion. Writing it this way allows my code to be eloquently written; however, it makes it inefficient in terms of run time optimization.
