
import React from 'react';
import Person from './Person/Person';
class Persons extends React.Component {

    constructor(props){
        super(props);
        console.log('inside constructor of persons component');
    }

    static getDerivedStateFromProps(){
        console.log('inside derivedstatefromprops of persons component');
    }

    shouldComponentUpdate(nextProps,nextState){

        if(nextProps.persons !== this.props.persons){
            return true;
        } else {
            return false;
        }
        console.log('inside shouldComponentUpdate of persons component');
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('inside snapshtbeforeupdate of persons component');


    }

    componentDidUpdate(){
        console.log('inside componnetdidupdate of persons component');
    }

    componentWillUnmount(){
        console.log('persons component unmounted');
    }

    

    render(){
        console.log('persons.js rendering--');
        return (
            <div>
                {
                    this.props.persons.map((person)=>{
                        return <Person name={person.name}
                        
                        changed={event =>this.props.changed(event, person.id)}
                        />
                    })
                }
            </div>
        )
    }
    
}

export default Persons;