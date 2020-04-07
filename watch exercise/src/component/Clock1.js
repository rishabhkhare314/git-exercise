import React, { Component } from 'react'
import Clock from 'react-live-clock';
// import moment from 'moment'
export class Clock1 extends Component {
    render() {
        return (
            <div>
                <Clock format={'h:mm:ss a'} ticking={true} timezone={'Asia/Kolkata'} />
            </div>
        )
    }
}

export default Clock1
