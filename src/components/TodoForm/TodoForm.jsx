import React, { useState } from "react";


function TodoForm(props) {
    const {addTodo} = props;
    const [value, setValue] = useState("");       // review message, setmessage notes... same same concept.
    
    const handleSubmit = (event) => {
        event.preventDefault();                   // review these event things... 
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        value={value}
        type="text"
        placeholder="Add To do..."
        onChange={(event) => setValue(event.target.value)}
        />
    </form>
    );
}

export default TodoForm;