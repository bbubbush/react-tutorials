import React, { Component } from 'react';

class PhoneForm extends Component{

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render(){
        return(
            <form>
                <input 
                    placeholder='Name' 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    name='name'
                /><br/>
                {this.state.name}<br/>
                <input 
                    placeholder="Phone Number" 
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name='phone'
                /><br/>
                {this.state.phone}
            </form>
        )
    }

}

export default PhoneForm;