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
         time :new Date()
    }
}
currentTime = () => {
    this.setState({
        time : new Date()
    })
}

componentWillMount= () => {
    setInterval (()=> this.currentTime(),1000)
}
    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                {this.call}
            </div>
        )
    }
}

export default Clock
