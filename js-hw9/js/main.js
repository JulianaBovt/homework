"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todoList = document.querySelector('.todos');

const createTodoElement = (todo) => {
  const li = document.createElement('li');
  li.classList.add('todo');
  li.dataset.id = todo[todoKeys.id];

  if (todo[todoKeys.is_completed]) li.classList.add('completed');

  const todoText = document.createElement('div');
  todoText.classList.add('todo-text');
  todoText.textContent = todo[todoKeys.text];

  const todoActions = document.createElement('div');
  todoActions.classList.add('todo-actions');

  const completeButton = document.createElement('button');
  completeButton.classList.add('button-complete', 'button');
  completeButton.innerHTML = '&#10004;';
  completeButton.addEventListener('click', () => {
    const updated = completeTodoById(todos, todo[todoKeys.id]);
    if (updated) {
      li.classList.toggle('completed', updated[todoKeys.is_completed]);
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button-delete', 'button');
  deleteButton.innerHTML = '&#10006;';
  deleteButton.addEventListener('click', () => {
    deleteTodoById(todos, todo[todoKeys.id]);
    li.remove();
  });

  todoActions.append(completeButton, deleteButton);
  li.append(todoText, todoActions);

  return li;
};

const handleCreateTodo = (todos, text) => {
  const newTodo = createTodo(todos, text);
  const newTodoElement = createTodoElement(newTodo);
  todoList.append(newTodoElement);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  handleCreateTodo(todos, text);
  input.value = '';
});
// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
