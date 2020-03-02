import React from 'react';
import Form from './constainers/Form/Form';
import TodoList from "./constainers/TodoList/TodoList";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
        <Form />
        <TodoList />
    </div>
  );
}

export default App;
