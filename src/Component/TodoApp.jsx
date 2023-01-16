import React, { useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Form from "./Form";
import Todolist from "./TodoList";

const useStyle = makeStyles({
  MainBox: {
    border: "1px solid",
    borderRadius:'5px',
    width:'40vw',
    height:"80vh",
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
    
  },
});
const TodoApp = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

  const classes = useStyle();

  return (
    <Box className={classes.MainBox}>
      <h2>Todo-List</h2>
      <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
      />
      <Todolist todos={todos} setTodos={setTodos} />
    </Box>
  );
};

export default TodoApp;
