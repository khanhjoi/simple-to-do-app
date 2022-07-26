function RenderList (props) {
    

    return <>
        {props.ToDoList && props.ToDoList.length > 0 && 

            props.ToDoList.map((todo,index) => {
                return <li key = {todo.id} className="to-do-list__Child">
                    {props.CheckObject === true
                    ? <span className="to-do-list-">
                        {index + 1} - {todo.content}    
                    </span>
                    : props.editToDo.id === todo.id ? 
                        <span>
                            {index + 1}
                            <input value={props.editToDo.content} onChange={(event) => props.handleInput(event)}/>
                        </span>
                        : 
                        <span className="to-do-list-">
                            {index + 1} - {todo.content}    
                        </span>
                    }          
                    
                    <button className="button" onClick={() => props.HandleEditJob(todo)}>
                        {props.CheckObject === true ? 'edit'
                            : props.editToDo.id === todo.id ? 'save' : 'edit'
                        }
                        
                    </button>
                    <button className="button" onClick={() => props.HandleDeleteJob(todo)}>delete</button>
                </li>
            })

        }
    </> 
}

export default RenderList