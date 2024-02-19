import Header from './component/Header';
import AddNote from './component/AddNote';
import ShowNote from './component/ShowNote';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [notelist, setNotelist] = useState(JSON.parse(localStorage.getItem("notelist")) ||[]);
  const [note, setNote] = useState({});

  useEffect(() => {
    localStorage.setItem("notelist", JSON.stringify(notelist))
  }, [notelist]);


  return (
    <div className="App">
      <Header/>
      <AddNote notelist={notelist} setNotelist={setNotelist} note={note} setNote={setNote}/>
      <ShowNote notelist={notelist} setNotelist={setNotelist} note={note} setNote={setNote}/>
    </div>
  );
}

export default App;
