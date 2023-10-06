import { Component } from 'react';

import './app-info.css';

class AppInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            day: '',
            month: '',
            year: ''
        }
    }

    calculateTheAge = () => {
        if (this.props.year.length === 4 && this.props.day.length >= 1 && this.props.month.length >= 1)
        {
            var now = new Date();

            this.setState({ 
                day: `${now.getDay() - this.props.day}`,  
                month: `${now.getMonth() - this.props.month}`,  
                year: `${now.getFullYear() - this.props.year}`
            });
        }
        
    }

    render() {
        const { day, month, year } = this.state;

        return (
            <main>
                <div class="div-arrow">
                    <span class="div-arrow-circle" onClick={this.calculateTheAge}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
                    </span>
                    <span class="div-arrow-line"></span>
                </div>
    
                <p class="main-years"><span class="lines">{year.length ? year : '--'}</span> years</p>
                <p class="main-months"><span class="lines">{month.length ? month : '--'}</span> months</p>
                <p class="main-days"><span class="lines">{day.length ? day : '--'}</span> days</p>
            </main>
        )
    }
}

export default AppInfo;