import { getTodosFromLocalStorage } from "./LS.js";
import { renderTodos, initToDoHandlers } from "./todoDOM.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  const todosElement = document.querySelector(".todos");
  renderTodos(todos, todosElement);
  initToDoHandlers(todos);
});