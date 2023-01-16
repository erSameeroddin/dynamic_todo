import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  Form: {
    // border:"2px solid",
    width: "32vw",
    display: "flex",
    justifyContent: "space-between",
  },
});
const Form = ({ input, setInput, todos, setTodos }) => {
  const classes = useStyle();
  const handelChange = (e) => {
    setInput(e.target.value);
  };
  console.log(todos);
  const handelSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: input,
        complete: false,
      },
    ]);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handelSubmit} className={classes.Form}>
        <TextField
          id="outlined-basic"
          label="Enter Items"
          variant="outlined"
          value={input}
          required
          onChange={handelChange}
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default Form;
