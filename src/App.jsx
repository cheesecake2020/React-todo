import "./styles.css";
import React, { useState } from "react";
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <header>
        <h1>To Do App</h1>
      </header>
      <div className="container">
        <section className="input area">
          <input
            id="add-text"
            placeholder="ToDoを入力"
            value={todoText}
            onChange={onChangeTodoText}
          />
          <button id="add-btn" onClick={onClickAdd}>
            追加
          </button>
        </section>
        <section className="incomplete area">
          <p className="todotitle">未完了のToDo</p>
          <ul id="incomplete-ul">
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo} className="list-row">
                  <span>{todo}</span>
                  <button
                    onClick={() => onClickComplete(index)}
                    className="mx-10"
                  >
                    完了
                  </button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="complete area">
          <p className="todotitle">完了したToDo</p>
          <ul id="complete-ul">
            {completeTodos.map((todo, index) => {
              return (
                <li key={todo} className="list-row">
                  <span>{todo}</span>
                  <button className="mx-10" onClick={() => onClickBack(index)}>
                    戻す
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};
