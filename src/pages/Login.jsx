import { useContext, useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom";
import FirebaseContext from '../context/firebase';


	
const Login = () => {
	// const history=useHistory();
	const {firebase} =useContext(FirebaseContext);

	//states
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const [error ,setError]=useState('');

	const isInvalid= password === '' || email === '';

	const handleLogin=()=>{

	}
	useEffect(()=>{


	},[])

	return (
		<div>
			i am the log in page
		</div>
	);
}

export default Login;
