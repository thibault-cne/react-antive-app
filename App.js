import { Text, View } from 'react-native';
import { useState } from 'react';

import { ToDoElement, WriteTask } from './components';
import { styles } from './assets/styles';

const App = () => {
  const [task, setTask] = useState();
  const [todoList, setTodoList] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>To Do React Native App</Text>

        {
          todoList.map((element, index) => {
            return <ToDoElement element={element} key={index} todoList={todoList} setTodoList={setTodoList} />
          })
        }
      </View>

      <WriteTask task={task} setTask={setTask} todoList={todoList} setTodoList={setTodoList} />
    </View>
  );
}

export default App
