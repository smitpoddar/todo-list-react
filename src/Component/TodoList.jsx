import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({todos,setTodos}){

  const sorted = todos.slice().sort((a,b)=>Number(a.done) - Number(b.done))

   return (
     <div className={styles.todolist}>
       {sorted.map((item) => (
         <TodoItem item={item}  key={item.name} todos={todos} setTodos={setTodos}/>
       ))}
     </div>
   );
}