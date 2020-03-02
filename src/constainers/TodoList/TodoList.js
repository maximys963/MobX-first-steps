import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "../../components/TotdoItem/TodoItem";
import styles from './TodoList.module.css'

const TodoList = props => {
    return (
        <div className={styles.todoContainer}>
            <TodoItem />
        </div>
    );
};

TodoList.propTypes = {

};

export default TodoList;
