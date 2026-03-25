import { useState, useMemo, useEffect } from "react";
import { FILTERS } from "../constants/Filter";
import { filterTodos } from "../utils/Helpers";



export default function useTodos(){
    const [todos, setTodos] = useState(()=>{
        const saved = localStorage.getItem("todos");
        return saved? JSON.parse(saved): [];
    });

    const [filter, setFilter] = useState(FILTERS.ALL);
     
    useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);

    const addTodo = (text)=>{
        setTodos((currentTodos)=>[
            ...currentTodos,
            { id:Date.now(),text :text.trim(), completed :false  }
        ]);
    };

    const toggleTodo = (id)=>{
        setTodos(
            todos.map((todo)=>
            todo.id === id
        ?{...todo,completed:!todo.completed}
        :todo
        )
        );
    };

    const deleteTodo = (id) =>{
        setTodos(
            todos.filter((todo)=> todo.id !== id)
        );
    }

    const editTodo = (id,newText)=>{
        const trimmedText = newText.trim();
        if(!trimmedText) return;

        setTodos(
            todos.map((todo)=>
            todo.id === id? {...todo, text:trimmedText} : todo)
        );
    };

    const filteredTodos = useMemo(()=>{
        return filterTodos(todos,filter);
    },[todos,filter]);


    return {
        todos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        filteredTodos
    };



}