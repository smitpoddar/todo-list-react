import { useState } from "react";
import styles from './form.module.css'

export default function Form({todos,setTodos}){
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name:"",done:false});
    function handleSubmit(e) {
      e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }
    return (
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <input className={styles.modernInput}
          value={todo.name}
          type="text" placeholder="Enter todo item..."
          onChange={(e) => setTodo({name:e.target.value,done:false})}
        />
        <button className={styles.modernbutton} type="submit" disabled={!todo.name.trim()}>Add</button>
      </form>
    );
}