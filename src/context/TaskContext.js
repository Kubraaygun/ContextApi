import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data);
      })
      .catch(err => {
        setError(err);
        setError(false);
      });
  }, []);

  return (
    <TaskContext.Provider value={{tasks, loading, error}}>
      {children}
    </TaskContext.Provider>
  );
};
