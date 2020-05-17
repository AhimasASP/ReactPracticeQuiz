import React, {Component} from "react";
import classes from './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component{
    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = () => {

    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit = {this.submitHandler} className={classes.AuthForm}>
                       <Input
                           label = "Email"
                       />
                       <Input
                           label = "Password"
                           errorMessage = {'Test'}
                       />
                        <Button
                            type="success"
                        onClick = {this.loginHandler}> Login</Button>
                        <Button
                            type="primary"
                        onClick = {this.registerHandler}> Register</Button>
                    </form>
                </div>
            </div>
        );
    }
}