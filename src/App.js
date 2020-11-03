import './App.css';
import Persons from './Person/Person';
import {useState} from 'react';
// functional component
function App() {
//after version 16.8
  const [person,setPerson] = useState({persons: ['mark','liz','tim','pavan']});
  const [showComponent,setShowComponent] = useState(false);
  let persons = null;

  const changeName = () => {
    setPerson({persons: ['tim','pavan']})
  }
  const nameChangeHandler = (event) =>{
    const  newName = event.target.value;
    setPerson({persons: [newName]});
  }
  const showComponentHandler = () => {
    const doesShow = showComponent;
    // if(doesShow === false){
    //   persons = (<h1>i am shown now</h1>);
    // }
    setShowComponent(!doesShow);
    

  }
  const removeName = (nameIndex) => {
    const names = [...person.persons];
    console.log('naemes before--',names);
    names.splice(nameIndex,1);
    console.log('names afetr--',names);
    setPerson({persons: names});
  }


  return (
    <div className="App">
      <button onClick = {showComponentHandler} > show Component </button>
  {  person.persons.map((p,index) => {
return <span>
  <p>my name is{p}</p>
  <button onClick = {removeName.bind(this,index)}  >Delete me</button>
  </span>

    })
  }
    
    </div>
  );
}

export default App;
