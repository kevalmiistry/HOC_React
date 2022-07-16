import React from "react";
import './App.css'
import TodoList from "./search/TodoList";
import Users from "./search/Users";
// import A from "./AB/A";
// import B from "./AB/B";

function App() {
  return (
    <>
      <div className="flex">
        {/* <A name={'BTN-A'} />
        <B name={'BTN-B'} /> */}
        <Users />
        <TodoList />
      </div>
    </>
  );
}

export default App
