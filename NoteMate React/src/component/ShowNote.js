

const ShowNote = ({notelist, setNotelist, note, setNote}) => {

    const handleEdit = (id)=> {
        const selectedTask = notelist.find(task => task.id === id)
        setNote(selectedTask)
    }

    const handleDelete = (id)=> {
        const updatedTaskList = notelist.filter(task => task.id !== id);
        setNotelist(updatedTaskList);
    }
  return (
    <section className="showNote">
        <p className="head">
            <p>
               <span className="titlehead">Note</span>
               <span className="count">{notelist.length}</span>
            </p>   
            <button className="clearAll" onClick={() => setNotelist([])}>Clear All</button>
        </p>

        <ul>
            {notelist.map((task) =>(
                 <li key={task.id}>
                 <p>
                     <span className="name">{task.name}</span>
                     <span className="time">{task.time}</span>
                 </p>
                 <i className="bi bi-pencil-square" onClick={()=>handleEdit(task.id)}></i>
                <i className="bi bi-trash" onClick={()=>handleDelete(task.id)}></i>
             </li>

            ))}
           
            
        </ul>
    </section>
  )
}

export default ShowNote
