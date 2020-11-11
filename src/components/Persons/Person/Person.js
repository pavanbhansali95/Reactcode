import React from 'react';
class Person extends React.Component {
render(){
    console.log('inside person componen rendering--');
    return <div>
        {this.props.name}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
    </div>
}
}
   


export default Person;