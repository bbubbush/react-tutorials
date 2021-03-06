import React, { Component } from 'react';

class PhoneForm extends Component{
    input = React.createRef();
    state = {
        name: '',
        phone: '',
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
        this.input.current.focus();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder='Name' 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    name='name'
                    ref={this.input}
                />
                <input 
                    placeholder="Phone Number" 
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name='phone'
                />
                <button type='submit'>Register</button>
            </form>
        )
    }

}

export default PhoneForm;