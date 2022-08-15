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
    
    const handleAddTodo = () => {
        const name = todo.trim();
        if (name === '') return;
        setTodos(prevTodo => [...prevTodo, {id: name, name, complete: false}] );

        setTodo('')
    }

    const toggleTodo = id => {
      const newTodos = [...todos];
      const todo = newTodos.find(todo => todo.id === id);
      todo.complete = !todo.complete;

      setTodos(newTodos);
    }
    
    const handleClearChecked = ()  => { 
        const incompleteTodods = todos.filter( todo => !todo.complete)
        setTodos(incompleteTodods);
    }
    

    return (
        <div className='todo-box'>
            <div className="input-box">
                <input className="inputTodo" onChange={chandleInputChange} type='text' value={todo} />
                <span>todo...</span>
            </div>
            <div className='buttons-box'>
                <button onClick={handleAddTodo} >Add Todo</button>
                <button onClick={handleClearChecked}>Clear Checked Todos</button>
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            
            <div className="info-left">
                {todos.length > 0 ? <h3>{todos.length} left to do</h3> : ''}    
            </div>
        </div>
    )

}

export default App;
