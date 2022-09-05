
import React, { Component } from 'react'

export default class DeleteHeader extends Component {
 constructor(props){
    super(props);
    this.state= {}
 }
componentWillUnmount(){
    console.log("Composant supprimer");
}
  render() {
    return (
      <div>DeleteHeader</div>
    )
  }
}
