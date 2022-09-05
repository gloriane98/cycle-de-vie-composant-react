import React from 'react';
import DeleteHeader from "./DeleteHeader"

class Header extends React.Component{

  constructor(props){
    console.log("constructor");
    super(props);
    this.state= {compteur: 0, show: true}
    
  }
  delHeader (){
    this.setState({...this.state, show: !this.state.show})
  }
  incremente(){
    this.setState(prevState => {
      
     return{compteur : prevState.compteur +1} 
    })
  }
  componentDidMount(){
    console.log("componentDidmount");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  
  render(){
    console.log("render");
   return (
    <div>
      {this.state.show &&  <DeleteHeader />}
     
      <h1> compteur : {this.state.compteur} </h1>
      <button onClick= {()=> this.incremente()} > incrementer</button>
      <button onClick= {()=> this.delHeader()} >DeleteHeader</button>
    </div>
   )
  }

};


export default Header;

