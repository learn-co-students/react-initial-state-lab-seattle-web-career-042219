import React from 'react'



export default class Bomb extends React.Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    SECONDS_LEFT = () =>{
        return this.state.secondsLeft
    }

    
    
    render(){

        return(
            
        this.state.secondsLeft !== 0?<div>{this.SECONDS_LEFT()} seconds left before I go boom!</div> :  <div>Boom!</div>
           
        )
    }
}

