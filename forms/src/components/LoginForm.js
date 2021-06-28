import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './input';

class LoginForm extends Component {
    state = {
        account: {username: "", password: ""},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    componentDidMount() {
        console.clear();
    }

    validate = () => {
        const options = {
            abortEarly: true
        }
        const result = Joi.validate(this.state.account, this.schema, options);
        // console.log(result);

        if(!result.error) return null;
        const errors = {};
        for(let item of result.error.details){
            errors[item.path[0]] = item.message;
        }
        return errors;

        // const errors = {};
        // const {account} = this.state;

        // if(account.username.trim() == ""){
        //     errors.username = "Username is required";
        // }
        // if(account.password.trim() == ""){
        //     errors.password = "Password is required";
        // }

        // return Object.keys(errors).length === 0 ? null: errors;
    };

    validateProperty = ({name,value}) => {
        const obj = {[name]:value};
        const schema = {[name]:this.schema[name]}
        const result = Joi.validate(obj,schema);
        const {error} = result;
        return error ? error.details[0].message : null;
    };

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage){
            errors[input.name] = errorMessage;
        }else{
            delete errors[input.name];
        }

        const account = {...this.state.account};
        account[input.name] = input.value;

        this.setState({account: account});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();

        this.setState({errors: errors || {}});
        if(errors){
            return;
        }

        // API Call
        console.log("Form Submitted");
    };

    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <Input
                            id="username"
                            name="username"
                            label="username"
                            type="text"
                            value={this.state.account.username}
                            error={this.state.errors.username}
                            onChange={this.handleChange}
                        />
                        <Input
                            id="password"
                            name="password"
                            label="password"
                            type="password"
                            value={this.state.account.password}
                            error={this.state.errors.password}
                            onChange={this.handleChange}
                        />
                        <button type="Submit" className="btn btn-primary" disabled={this.validate()}>Login</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LoginForm;