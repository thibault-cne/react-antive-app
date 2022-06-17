import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { styles } from '../assets/styles';

const ToDoElement = ({ element, todoList, setTodoList }) => {
    const handleDelete = () => {
        setTodoList(todoList.filter((elem) => elem !== element));
    }

    const handleTouch = () => {
        const newTodoList = todoList.map((elem) => {
            if (elem === element) {
                return { ...elem, isTouched: !elem.isTouched };
            }
            return elem;
        }, []);
        setTodoList(newTodoList);
    }

    return (
        <View style={styles.todoElement_container}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity
                    style={element.isTouched ? styles.green_square : styles.blue_square}
                    onPress={() => handleTouch()}
                ></TouchableOpacity>
                <Text style={styles.itemsText}>{ element.task }</Text>
            </View>
            <TouchableOpacity
                style={styles.circular}
                onPress={() => handleDelete()}
            >
                <Text style={styles.circularText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDoElement