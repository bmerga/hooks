import React, { useState, useEffect } from 'react';

function Hooks() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((data) => data.json())
            .then(res => setTodos(res));
    }, []);
    
    return 
    <div> 
        {todos && todos.filter(todo=>todo.id<6).map((todo) => <div>{todo.title}</div>)      
        }
    </div>
        
};

export default Hooks;