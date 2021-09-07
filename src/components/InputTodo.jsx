import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <section className="input area">
      <input
        id="add-text"
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button id="add-btn" onClick={onClick} disabled={disabled}>
        追加
      </button>
    </section>
  );
};
