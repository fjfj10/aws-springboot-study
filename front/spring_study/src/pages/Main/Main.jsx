import React, { useState } from 'react';
import { registerUser } from '../../api/users';

function Main(props) {
    const [ userInput, setUserInput ] = useState({
        userId: "",
        username: "",
        name: "",
        phone: ""
    });
    
    const handleUserInputChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    }

    const handleRegisterClick = () => {
        // request
        registerUser(userInput); 
    }

    const handleUpdateClick = () => {
        
    }

    const handleDeleteClick = () => {
        
    }
    
    return (
        <div>
            <div><input type="text" name='userId' placeholder='user-id' onChange={handleUserInputChange}/></div>
            <div><input type="text" name='username' placeholder='username' onChange={handleUserInputChange}/></div>
            <div><input type="text" name='name' placeholder='name' onChange={handleUserInputChange}/></div>
            <div><input type="text" name='phone' placeholder='phone' onChange={handleUserInputChange}/></div>
            <button onClick={handleRegisterClick}>추가하기</button>
            <button onClick={handleUpdateClick}>수정하기</button>
            <button onClick={handleDeleteClick}>삭제하기</button>

            <ul>

            </ul>
        </div>
    );
}

export default Main;