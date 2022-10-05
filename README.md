## Why components? s

A component is a self-contained, reusable code block that divides the user interface into smaller pieces rather than building the entire UI in a single file.

**Reusability:**
Don't repeat yourself
<br>

**Separation of Concerns:**
Don't do too many things in one and the same place ( function )

Split big chunks of code into
multiple smaller functions

A _declarative_ style, like what react has, allows you to control flow and state in your application by saying "It should look like this" (let react figure it out).
<br>
An _imperative_ style turns that around and allows you to control your application by saying "This is what you should do".

**Declarative approach his is great analogy:**

> An imperative response: Go out of the north exit of the parking lot and take a left. Get on I-15 south until you get to the Bangerter Highway exit. Take a right off the exit like you’re going to Ikea. Go straight and take a right at the first light. Continue through the next light then take your next left. My house is #298.

> A declarative response: My address is 298 West Immutable Alley, Draper Utah 84020\*

## What is JSX?

Is a javasript extension syntax.
<br>
Enables and simplifies the creation of HTML in React, resulting in more readable and understandable markup.

### Output dynamic data

To make use of a variable we need to make use of {}

```jsx
const expenseTitle = 'Car Insurance';
```

## Props

Props are also referred to as properties ("_customHTMLAttributes_"). They are used to transfer data from one component to the next (parent component to child component). They are typically used to render dynamically generated data.

> Note: A child component can never send props to a parent component since this flow is unidirectional (parent to child).

When we combined components we're making composition

### Closer look to JSX

In legacy projects in react we will see `import` of React although in newer version you don't need to, because react do it under the hood.
<br>
You will see the `import` in EVERY component (I think).

This was in old versions, less readable and verbose

```jsx
return React.createElement (
  'div',
  { } ,
  React.createElement ( 'h2', {}, "Let's get started!"),
  React.createElement ( Expenses, {items:expenses});
```

New version, better and readable

```jsx
return (
  <div>
    <h2> Let's get started! </h2>
    <Expenses items={expenses} />
  </div>
);
```

<hr>

## Component life cycle

**getInitialState():** This is executed before the creation of the component.

**componentDidMount():** Is executed when the component gets rendered and placed on the DOM.

**shouldComponentUpdate():** Is invoked when a component determines changes to the DOM and returns a “true” or “false” value based on certain conditions.

**componentDidUpdate():** Is invoked immediately after rendering takes place.

**componentWillUnmount():** Is invoked immediately before a component is destroyed and unmounted permanently.

<hr>

# React State & Working with Events

Adding the 'Handler' tells its a function attached to an eventListener, more for naming convention.

```jsx
const clickHandler = () => {
  console.log('Clicked!!!');
};
<button onClick={clickHandler}>Change Title</button>;
```

Example of naming convention in hooks

```jsx
const [title, setTitle] = useState(props.title);
```

Updating State That Depends On The Previous State
Some examples you can use while using useState

```jsx
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// });

const titleChangedHandler = (e) => {
  setEnteredTitle(e.target.value);

  //Another way to use useState with an object
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: e.target.value,
  // });

  //If your state update depends on the previous state, use this function form.
  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     enteredTitle: e.target.value,
  //   };
  // });
};
```

### **Two-Way binding**

Means that for inputs we don't just listen to changes, but we can also pass a new value back into the input. (Reset or change the input programatically)

Useful when you're working with forms because it allows you to gather user input, but then also change it.

### **Lifting State up**

It is about moving data from a child component to some parent component to either use it there or to then pass it down to some other child component.

### **Understanding "Keys"**

See this lecture to learn more about the "keys" in react and why is important to add it. [Link to class](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25597082#overview)

The _**keys**_ are required for React to correctly identify and update (if needed) the list elements.

# Styling react components

### Inline styles

```jsx
const [isValid, setIsValid] = useState(true);

<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
  <input style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",}}
          type="text"
          onChange={goalInputChangeHandler}
  />
```

### Setting CSS Classes Dynamically

Note: We're also using the css classes from the css file. _(form-control & invalid)_

```jsx
const [isValid, setIsValid] = useState(true);
<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</div>;
```

### Styled Components

Easy way that I saw

```jsx
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label {
    color: red;
  }
`;

<FormControl className={!isValid && 'invalid'}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</FormControl>;
```

The other way which is more complex and scalable? It's in the `CourseInput.js`

If you want to use media queries, you simply add like a normal css file.

```jsx
const FormControl = styled.div`
  margin: 0.5rem 0;
  background-color: blue;

  @media (min-width: 768px) {
    width: auto;
    background-color: yellow;
  }
`;
```

### CSS Modules

### Questions

1. Podemos mezclar styled components & sass?

<hr>

### JSX limitations

You can return only one root element, we can use [ ] but it's more complex and need a key.

```jsx
return (
  <div>
    <h2> Hi there ! </h2>
    <p> This does not work :-( </p>
  </div>
);
```

Important : Doesn't have to be a < div > - ANY element will do the trick .

Using divs can make out code a div soup. A lot of divs in our application.

If you want to render without using divs `<React.Fragment> </React.Fragment>` or `<> </>`

Or you can make a little trick by making a wrapper as a "component"

```jsx
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
<Wrapper>...</Wrapper>;
```

# Hooks

## useState

The `useState` Hook is a store that enables the use of state variables in functional components. You can pass the initial state to this function, and it will return a variable containing the current state value (not necessarily the initial state) and another function to update this value.

```jsx
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return <div>// ...</div>;
};
```

## useEffect

The `useEffect` Hook allows you to perform side effects in your components like data fetching, direct DOM updates, timers like setTimeout(), and much more.

This hook accepts two arguments: the callback and the dependencies, which allow you to control when the side effect is executed.

> Note: The second argument is optional.

```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>// ...</div>;
};

export default App;
```

```jsx
console.log('Render (Antes del useEffect)');

useEffect(() => {
  console.log('useEffect');
});

console.log('Render (Despues del useEffect)');

// ¡Como lo mostraria en el navegador!
// Render (Antes del useEffect)
// Render (Despues del useEffect)
// useEffect
```

## useMemo

The `useMemo()` hook is used in functional components to memoize expensive functions so that they are only called when a set input changes rather than every render.

`const result = useMemo(() => expensivesunction(input), [input]);`

This is similar to the `useCallback` hook, which is used to optimize the rendering behavior of your React function components. useMemo is used to memoize expensive functions so that they do not have to be called on every render.

## useRefs

The `useRefs()` hook, also known as the References hook, is used to store mutable values that do not require re-rendering when they are updated. It is also used to store a reference to a specific React element or component, which is useful when we need DOM measurements or to directly add methods to the components.

When we need to do the following, we use useRefs:

- Adjust the focus, and choose between text and media playback.
- Work with third-party DOM libraries.
- Initiate imperative animations

```jsx
import React, { useEffect, useRef } from 'react';

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputElRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default App;
```

## Custom Hooks

**What are Custom Hooks?** <br>
Custom Hooks are a JavaScript function that you write to allow you to share logic across multiple components, which was previously impossible with React components.

If we return more 3 or more values it better to make it an object instead of an array

<br>

# More hooks

## Context

Context is intended to share "global" data for a tree of React components by allowing data to be passed down and used (consumed) in whatever component we require in our React app without the use of props. It allows us to share data (state) more easily across our components.

- Es una herramienta de React que permite compartir estados a través de nuestros diferentes componentes de la app.
- Esto a partir de Providers y Consumer.
- Nos ayuda a reducir la cantidad de props que tengamos que compartir en todos los elementos de nuestros componentes.

Nos ayuda a evitar el problema _"props drilling"_

Props drilling es un término para describir cuando pasas props en varios niveles de profundidad <br>
Supongamos que tienes un componente “bisabuelo” y ese componente quiere darle un regalo 🎁 (props) a su bisnieto, el componente bisabuelo tiene la opción de darle ese regalo al abuelo, para que se lo de al hijo, y este hijo al nieto. O también tiene la opción de mejor entregárselo él directamente, sin intermediaciones innecesarias, que ahí es donde entraría React Context.

![Image](https://static.platzi.com/media/user_upload/context-0917efb7-ccab-4117-a12c-cf066b2aee91.jpg)

### useContext

Using the useContext hook
`const { searchValue, setSearchValue } = useContext(TodoContext);`

<br>

### React portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```jsx
ReactDOM.createPortal(
  <Backdrop onConfirm={props.onConfirm} />,
  document.getElementById('backdrop-root')
);
```

### React "ref"s

Refs provide a way to access DOM nodes or React elements created in the render method.

You only want to read a value and you never plan on changing anything, well, then you don't really need state because just to use state as a keylogger is not that great. Unnecessary code and work. So if you just want to read a value, refs are probably better.

```jsx
const nameInputRef = useRef();
const enteredName = nameInputRef.current.value;

//A lot of logic
if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
  setError({
    title: 'Invalid input',
    message: 'Please enter a valid name and age (non-empty values).',
  });
  return;
}
if (+enteredUserAge < 1) {
  setError({
    title: 'Invalid age',
    message: 'Please enter a valid age (> 0).',
  });
  return;
}
//A lot of logic

<input id="username" type="text" ref={nameInputRef} />;

nameInputRef.current.value = ''; //Reset the name
```

### Controlled and uncontrolled components

```
  //
```
