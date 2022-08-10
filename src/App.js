import React, { useState , useEffect} from 'react';

import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'todoApp';


function App() {
    const storedTodos = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));

    const [todos, setTodos] = useState( storedTodos || []);
    const [todo, setTodo] = useState('');

  
    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);


    const chandleInputChange = e => setTodo( e.target.value ); 
    
    const addTodoHandler = () => {
        const name = todo;
        if (name === '') return;
        setTodos(prevTodo => [...prevTodo, {id: name, name, complete: false}] );

        setTodo('')
    }
    

    return (
        <>
            <div>0 left to do</div>
            <input onChange={chandleInputChange} type='text' value={todo} />
            <button onClick={addTodoHandler} >Add Todo</button>
            <button>Clear Checked Todos</button>
            <TodoList todos={todos}/>
        </>
    )

  
}

export default App;
