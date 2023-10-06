import { Component } from 'react';

import AppForm from '../app-form/app-form';
import AppInfo from '../app-info/app-info';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            month: '',
            year: ''
        }
    }
    

    onFormConfirm = (day, month, year) => {
        this.setState({
            day: day,
            month: month,
            year: year
        })
    }

    // onButtonPressed = () => {
        
    // }

    render() {
        return (
            <div className='app'>  
                <AppForm onFormConfirm={this.onFormConfirm}/>
                <AppInfo 
                    day={this.state.day}
                    month={this.state.month}
                    year={this.state.year}
                />
            </div>
            
        );
    }
}

export default App;