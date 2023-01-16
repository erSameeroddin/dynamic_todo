import { Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const useStyle = makeStyles({
  mainList: {
    marginTop: "2vh",
  },
  List: {
    // border:"2px solid",
    width: "30vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  para: {
    // color:"blue",
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "20px",
  },

  DeleteBtn: {
    height: 40,
  },
});
const Todolist = ({ todos, setTodos }) => {
  const classes = useStyle();

  const handelStatus = (id) => {
    setTodos(
      todos.map((items) => {
        if (items.id === id) {
          return { ...items, complete: !items.complete };
        }
        return items;
      })
    );
  };

  const handelDelet = (id) => {
    setTodos(todos.filter((items) => items.id !== id));
  };
  

  return (
    <div className={classes.mainList}>
      {todos.map((items, i) => {
        return (
          <Box className={classes.List}>
            <p
              className={classes.para}
              style={{ color: `${items.complete} ? 'green' :'red'` }}
              key={items.id}
            >
              {i + 1}] {items.title}
              
            </p>

            <Button onClick={() => handelStatus(items.id)}>
              {items.complete ? "complete" : "not complete"}
            </Button>
            <IconButton
              className={classes.DeleteBtn}
              variant="contained"
              onClick={() => handelDelet(items.id)}
            >
              <DeleteIcon fontSize="inherit" style={{ color: "red" }} />
              Delete
            </IconButton>
          </Box>
        );
      })}
    </div>
  );
};

export default Todolist;
