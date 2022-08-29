import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact(){
    const [formState, setFormState]= useState ({name: '', email: '', message:''});

    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
            if (!errorMessage){
                console.log('Submit Form', formState);
            }
        }
    
    const handleChange = (e) => {
        if (e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
                if (!isValid){
                    setErrorMessage('email is invalid. Try again.');
                } else {
                    setErrorMessage('');
                }
                } else {
                    if (!e.target.value.length){
                        setErrorMessage(`{$e.target.name} is required.`);
                } else {
                        setErrorMessage('');
                }
            }
                if (!errorMessage) {
                    setFormState ({...formState, [e.target.name]: e.target.value});
                        console.log('Handle Form', formState);
                }};

    return(
<section class = "contact">
            <form id = "form" onSubmit={handleSubmit}>
            <input id="name" type="text" placeholder="NAME"> defaultValue={name} onBlur={handleChange}</input>
            <input id="email" type="text" placeholder="E-MAIL"> defaultValue={email} onBlur={handleChange}</input>
            <textarea id="message" type="text" placeholder="MESSAGE">defaultValue={message} onBlur={handleChange}</textarea>
            <input id="submit" type="submit" value="GO!"></input>
            </form>  
        </section>
    )};

export default Contact;
