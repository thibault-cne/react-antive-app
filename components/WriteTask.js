import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native'

import { writeTaskStyles } from '../assets/styles'

const WriteTask = ({task, setTask, todoList, setTodoList}) => {
    const handleChange = () => {
        Keyboard.dismiss();
        const newTask = {'task': task, 'isTouched': false};
        setTodoList([...todoList, newTask]);
        setTask(null);
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={writeTaskStyles.writeTaskWrapper}
        >
            <TextInput
                style={writeTaskStyles.textInput}
                placeholder="Write a task"
                value={task}
                onChangeText={text => setTask(text)}
            />

            <TouchableOpacity
                style={writeTaskStyles.addWrapper}
                onPress={() => handleChange()}
            >
                <Text style={writeTaskStyles.addText}>+</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default WriteTask