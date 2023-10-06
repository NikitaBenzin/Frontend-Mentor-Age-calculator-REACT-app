import { Component } from 'react';

import './app-form.css'

class AppForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            day: '',
            month: '',
            year: '',
            dayError: false,
            monthError: false,
            yearError: false
        }
        this.style = {
            red: 'var(--red-100)',
            gray: 'var(--gray-200)'
        }
        this.errorMassages = {
            dayErrorMassages: 'Must be a valid day',
            monthErrorMassages: 'Must be a valid month',
            yearErrorMassages: 'Must be in the past'
        }
    }

    dayCounter = (e) => {
        if (e.target.value <= 31 && e.target.value >= 1) {
            e.target.style.border = '1px solid var(--gray-100)';
            this.setState({
                day: e.target.value,
                dayError: false,
                emptyError: false
            })
        } else {
            e.target.style.border = '1px solid var(--red-100)';
            this.setState({
                day: '',
                dayError: true
            })
        }
    }

    monthCounter = (e) => {
        if (e.target.value <= 12 && e.target.value >= 1) {
            e.target.style.border = '1px solid var(--gray-100)';
            this.setState({
                month: e.target.value,
                monthError: false,
                emptyError: false
            })
        } else {
            e.target.style.border = '1px solid var(--red-100)';
            this.setState({
                month: '',
                monthError: true
            })
        }
    }

    yearCounter = (e) => {
        var now = new Date();
        if (e.target.value <= now.getFullYear() && e.target.value >= 1000) {
            e.target.style.border = '1px solid var(--gray-100)';
            this.setState({
                year: e.target.value,
                yearError: false,
                emptyError: false
            })
        } else {
            
            e.target.style.border = '1px solid var(--red-100)';
            this.setState({
                year: '',
                yearError: true
            })
        }
    }

    render() {
        const { onFormConfirm } = this.props;
        const { day, month, year } = this.state;
        const { dayError, monthError, yearError } = this.state;
        const { dayErrorMassages, monthErrorMassages, yearErrorMassages } = this.errorMassages;

        return (
            <header>
                <section class="Day">
                    <p style={{color: dayError ? this.style.red : this.style.gray}}>Day</p>
                    <input type="text" maxlength="2" placeholder="DD" 
                        onInput={this.dayCounter} 
                        onBlur={() => onFormConfirm(day, month, year)}
                    />
                    <span class="input-day-error">{dayError ? dayErrorMassages : ''}</span>
                </section>
                
                <section class="Month">
                    <p style={{color: monthError ? this.style.red : this.style.gray}}>Month</p>
                    <input type="text" maxlength="2" placeholder="MM" 
                        onInput={this.monthCounter}
                        onBlur={() => onFormConfirm(day, month, year)}
                    />
                    <span class="input-month-error">{monthError ? monthErrorMassages : ''}</span>
                </section>
    
                <section class="Year">
                    <p style={{color: yearError ? this.style.red : this.style.gray}}>Year</p>
                    <input type="text" maxlength="4" placeholder="YYYY" 
                        onInput={this.yearCounter}
                        onBlur={() => onFormConfirm(day, month, year)}
                    />
                    <span class="input-year-error">{yearError ? yearErrorMassages : ''}</span>
                </section>
            </header>
        )
    }
}

export default AppForm;