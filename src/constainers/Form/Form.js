import React     from 'react';
import { Input, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import styles from './Form.module.css';


function Form(props) {
    return (
        <div className={styles.formContainer} >
            <div className={styles.inputContainer}>
                <Input fluid />
            </div>
            <div className={styles.buttonContainer}>
                <Button primary >Create</Button>
                <Button secondary >Clear List</Button>
            </div>
        </div>
    );
}

export default Form;
