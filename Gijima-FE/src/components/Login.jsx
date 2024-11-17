import Input from "./functional/Input";
import Button from "./functional/Button.jsx";
import {useState} from "react";
import { useDispatch } from 'react-redux';
import {setAuthState} from "../features/auth/userSlice.jsx";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import api from "../manageBaseUrl.jsx";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(api)

            // const response = await api.post(`/Login/PostLogin`, { Username: email, Password: password });

            // const { token } = response.data;

            // console.log(token);
            const token = "MockToken"

            localStorage.setItem('token', token);
            dispatch(setAuthState({ email, token }));
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-items-center h-full">
                <div className="flex flex-col align-center rounded-md bg-grey-300 p-8">
                    <h1 className="text-4xl self-center mb-4">Login</h1>
                    <label>
                        Email:<br/>
                        <Input classes="mb-4" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                               required/>
                    </label><br/><br/>
                    <label>
                        Password:<br/>
                        <Input classes="mb-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </label><br/><br/>
                    <Button type="submit">Login</Button>
                </div>
            </div>
        </form>
    );
}