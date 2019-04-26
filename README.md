<b>What is a Hook?</b>
<p>Hooks are a new addition in React 16.8. Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. For example, useState is a Hook that lets you add React state to function components.</p>

<b>When would I use a Hook?</b> 
<p>If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.</p>

<b>State Hook</b>
<p>useState is a Hook that we call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.</p>

<b>Effect Hook</b>
<p>The Effect Hook lets you perform side effects like Data fetching, setting up a subscription, and manually changing the DOM in React components in function component. useEffect Hook is like a combination of componentDidMount, componentDidUpdate, and componentWillUnmount of class based components.By using this Hook, you tell React that your component needs to do something after render.</p>