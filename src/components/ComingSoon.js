import React, { Component } from 'react';
import '../styles/ComingSoon.css';
import Countdown from './Countdown';


class ComingSoon extends Component {
    state = {
        countdown: {
            futureDate: "2022-08-30 00:00:00"
        }
    }
    render() {
        const {
            countdown
        } = this.state;


        return (
            <div className="background">
                <Countdown futureDate={countdown.futureDate}></Countdown>
            </div>
        )
    };
}

export default ComingSoon;
