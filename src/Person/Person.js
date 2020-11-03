import React, {Component} from 'react';



class Person extends Component {

state = {
    'paragraphText': 'hello i am there',
    'other': 'anc'
};

changeParagraphHandler  = (text) => {
    console.log('state before changinf--',this.state);
this.setState({paragraphText: text} ,() => {
    console.log('state after changing--',this.state);

});
}
    
    render(){
        return(
           
            <div>
                 <p>my name is {this.props.name}</p>
        <p onClick = {this.props.paragraphClick}>{this.state.paragraphText}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange = {this.props.changed} />
        <button onClick = {this.changeParagraphHandler.bind(this, 'i hav been changed')} >chnage paragraph text</button>

    </div>
        )
    }
}
export default Person;

//our code will convert like this
// React.createElement('div',null,React.createElement('p',null,'i am person class component'))

// const person = (props) => {
//     return (
//         <div>
//                 <p>my name is{props.name}</p>
//        <p>i am person functional component</p>
//      </div>
//     )
// }
// export default person;