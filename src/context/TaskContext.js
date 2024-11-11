import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setError(false);
      });
  }, []);
  //Gönderilen id'li taskı sil
  const removeTask = id => {
    const filtred = tasks.filter(task => task.id !== id);
    //Tasks state'ı güncelle
    setTasks(filtred);
    Alert.alert('Task silindi');
  };

  const addTask = title => {
    const newTask = {
      userId: 1,
      id: tasks.length + 1,
      title,
    };
    setTasks([newTask, ...tasks]);

    Alert.alert('Yeni Task Eklendi');
    setNewTaskTitle('');
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        removeTask,
        newTaskTitle,
        setNewTaskTitle,
        addTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
