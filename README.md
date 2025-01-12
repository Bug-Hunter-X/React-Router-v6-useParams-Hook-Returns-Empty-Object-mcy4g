# React Router v6 useParams Hook Returns Empty Object

This repository demonstrates a common error in React Router v6 where the `useParams` hook returns an empty object when used outside of a route that defines parameters in its path. The issue arises because `useParams` relies on the router's context to access the parameters from the URL. If the component using `useParams` is not nested within the correct route, it lacks access to this context.

The `bug.js` file showcases the incorrect usage, where `MyComponent` attempts to access parameters but receives an empty object.  The `bugSolution.js` file provides the corrected structure, ensuring that `MyComponent` is correctly nested within a route that matches the parameters in the URL.

## Solution

The solution involves nesting the component that uses `useParams` within a route that defines the relevant parameters in its path, enabling access to the parameters through the router's context.