import React from 'react';
import { Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';


import styles from './TodoItem.module.css'

TodoItem.propTypes = {

};

function TodoItem(props) {
    return (
        <div className={styles.todoItemContainer}>
            <div>Lorem ipsum </div>
            <Icon name='trash alternate outline' size='large'/>
        </div>
    );
}

export default TodoItem;
