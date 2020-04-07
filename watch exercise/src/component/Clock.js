import React, { Component } from 'react'

// var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
class Clock extends Component {

// call = () =>{
//     setInterval(() => {
//         var today = new Date();
//     }, 1000);

// }


constructor(props) {
    super(props)

    this.state = {
         date :new Date()
    };
    
}

currentTime = () => {
    this.setState({
        date : new Date()
    })
}

componentWillMount= () => {
    setInterval (()=> this.currentTime(),1000)
    // if(console.log(this.state.date.getHours()) <= 11){
    //    set = {
    //         format : 'am'
    //     }
    // else{
    //     set = {
    //         format : 'pm'
    //     }
    // }
    // }
}

render() {
        
        return (
            
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                
               
            </div>
        )
    }
}

export default Clock
