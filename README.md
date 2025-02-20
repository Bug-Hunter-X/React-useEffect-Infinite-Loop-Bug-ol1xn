# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook. The incorrect usage of `useEffect` creates an infinite loop, causing performance issues and potentially crashing the application.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected implementation.

## Bug Description
The `useEffect` hook is used incorrectly within the `MyComponent` function.  The `setCount(count + 1)` within the `useEffect` causes the component to re-render constantly, which in turn triggers the `useEffect` again, resulting in an infinite loop.  This is because the component is trying to update the state `count` based on `count`, which changes every time the component re-renders.