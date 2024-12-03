import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {

  const {isLoading, error, httpRequest:sendTaskRequest} = useHttp();
  
  const enterTaskHandler = async (taskText) => {
    const processData = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    }
    sendTaskRequest(
    {
      url: 'https://react-course-578e5-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: {text: taskText},
      headers: {
        'Content-Type': 'application/json',
      },
    },
    processData
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
