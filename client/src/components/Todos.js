import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todosList = todos.length ?  (todos.map(todo => {
        // this is the view of the application
        return (
            <div className="collection-item" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
            </div>
        )
    })) : (<p className="center"> You have no Todo's left!</p>);
    return (
        <div className="todos collection center">
            {todosList}
        </div>
        
    )
}
export default Todos;