import './App.css';
import React from 'react';
import Persons from './components/Persons/Persons';
import Cockpit from './components/cockpit';
// class component
class App extends React.Component {
//after version 16.8
  // const [person,setPerson] = useState({persons: ['mark','liz','tim','pavan']});
  // const [showComponent,setShowComponent] = useState(false);
  // let persons = null;

  constructor(props){
    console.log('i am inside constructor-- app component');
    super(props);
    this.state = {
'persons':[
  { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }

],
showPersons: false,
showCockpit: true
    };
  }

  //2 lifecycle hook
  static getDerivedStateFromProps(nextProps, nextState){
    console.log('i am inside getDerivedStateFromProps-- app component');
return null;
  }


// Lifecycle hooks in react(class based)






  // changeName = () => {
  //   setPerson({persons: ['tim','pavan']})
  // }
  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  
  togglePersonHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
  }
  // showComponentHandler = () => {
  //   const doesShow = showComponent;
  //   // if(doesShow === false){
  //   //   persons = (<h1>i am shown now</h1>);
  //   // }
  //   setShowComponent(!doesShow);
    

  // }
  // removeName = (nameIndex) => {
  //   const names = [...person.persons];
  //   console.log('naemes before--',names);
  //   names.splice(nameIndex,1);
  //   console.log('names afetr--',names);
  //   setPerson({persons: names});
  // }

render(){
  console.log('inside render app comp--');
  return (
    <div className="App">

      
      <button onClick = {() => {
this.setState({showCockpit: false})
      }}>Remove Cockpit</button>


      {this.state.showCockpit === true ? <Cockpit persons = {this.state.persons} title="MY APP" clicked = {this.togglePersonHandler} /> : null}
    {this.state.showPersons ? <Persons changed = {this.nameChangeHandler} persons = {this.state.persons}  /> : null }


    
    </div>
  );
}

componentDidMount(){
  console.log('inside comp did mount app component--');
}

componentWillUnmount(){
  console.log('perosns things unmounted or removed');
}

}



export default App;
