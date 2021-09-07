import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <section className="complete area">
      <p className="todotitle">完了したToDo</p>
      <ul>
        {todos.map((todo, index) => {
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
  );
};
