

const AddNote = ({notelist, setNotelist, note, setNote}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(note.id){
            const date = new Date();
            const updatedTasklist = notelist.map((task)=> (
                task.id === note.id ? 
                {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : task));
            setNotelist(updatedTasklist)
            setNote({});
        }else {
            const date = new Date();
            const newTask = {
            id: date.getTime(), 
            name:e.target.task.value, 
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setNotelist([...notelist, newTask]);
        setNote({});
        }   
    }
  return (
    <section className="addNote">
        <form onSubmit={handleSubmit}> 
            <input type="text" name="task" placeholder="add task" autoComplete="off" value={note.name || ""} onChange={e => setNote({...note, name: e.target.value})} />
            <button type="submit">{note.id ? "Update":"Add"}</button>
        </form>
    </section>
  )
}

export default AddNote
