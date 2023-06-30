import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// import {
//   Navbar,
//   Welcome,
//   Counter,
//   TodoApp,
// } from './components';
import Navbar from "./components/Navbar";
// import {
//   Typography,
//   Button,
// } from '@material-ui/core';

// all hooks must start with the word "use"

const App = () => {
  const name = "EMMANUEL";

  // props dont trigger a re-render
  // props is received by a child from a parent
  // state is declared
  // useState is a function that returns an array with 2 elements, it takes 1 parameter
  // the 1st element in the array will have the value of the parameter being passed to useState
  // the 2nd element is a function for updating the value of the 1st element
  const [count, setCount] = useState(0);

  // when returning html in react
  // we can only return 1 parent component

  // when we are returning html
  // we can actually use JavaScript expressions inside our html
  // the moment we are returning html, if we want to use any JS in the html we are returning
  // we use "{}" to embed our JS expression

  // useEffect is a hook that takes 2 parameters
  // 1st parameter is a function to call after the component first returns it's HTML
  // this function is only called one time
  // 2nd parameter is optional but is often passed an empty array by default

  // inside of useEffect we can create side effects
  // the callback passed to useEffect must be a regular function
  // useEffect is many life cycle methods in 1 go

  // class based component
  // componentDidMount - this is called after "render" is called. In classed based components render is normally a method that returns html this only gets called once
  // update life cycle methods
  // componentDidUpdate - allow to look at previous state and previous props and should we update the state or component depending on prevState or prevProps

  // in useEffect - the callback function we pass into useEffect is componentDidMount
  // in useEffect - the elements in the array that we pass as a 2nd arg to useEffect is componentDidUpdate
  // whenever an element in that array changes, it's going to call the callback function we pass into useEffect
  useEffect(() => {
    //   we can make side effects inside here
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" data-theme="cupcake" />
      </Helmet>
      <Navbar />
      {/* <TodoApp/>
      <Counter count={count} setCount={setCount}/> */}
      {/* <Typography>Hello {name[0].toUpperCase() + name.slice(1).toLowerCase()}</Typography> */}
      {/*Props travel from parent child*/}
      {/*and cant go from child to parent*/}
      {/* <Welcome
        isCool
        name={'manny'}
        powerLevel={9001}
        isTextColorRed={true}
        favoriteThings={[
          'Teemo',
          'Videogames',
          'Sleep',
        ]}
        myObject={{
          firstName: 'emmanuel',
          lastName: 'jucaban',
        }}
      />

      <Welcome
        name={'emmanuel'}
        powerLevel={100000}
        isTextColorRed={false}
        favoriteThings={[
          'XRP',
          'QNT',
          'Sleep',
        ]}
        myObject={{
          firstName: 'something cool',
          lastName: 'jucaban',
        }}
      /> */}
    </>
  );
};

export default App;
