# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

You display data on a webpage, a user interacts with it, now that data changes and you want the webpage to look different. React does that for you. You have data > Data gets displayed > Data updates > Which updates the UI. This happens _AUTOMATICALLY_ once you define the components.

1. What does it mean to think in react?

To think in React: Break your UI into custom components. Each component is responsible for displaying itself, based on the _external_ and _internal_ data available. Build trees of these components for a full UI.

1. Describe state.

Internal, _changeable_ data is called "state". State is defined by the `useState` function, which returns the data, and a function to change that data (in an array).

1. Describe props.

Data that comes in from the outside of a component is called "props" (properties). This can be passed from a parent to a child through JSX attributes. Props come into function components as the first argument to the function.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. There are two categories of side effects in React components - those that don’t require clean-up and those that do require cleanup.

Perform Async functions and side effects (like data fetching) inside of `useEffect` (takes a callback). The second argument is an array of dependencies (Don't forget this!). Include any variable the useEffect uses that might change, or an empty array if there are none.