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
		<div className='container mx-auto flex max-w-screen-md items-center h-screen '>
			<div className='flex  w-3/5'>
				<img src="/images/iphone-with-profile.jpg" alt="iphone with instagram app" className='w-4/5' />
			</div>
			<div className='flex flex-col w-2/5  items-center  content-center -mt-11 pt-10 pb-10  '>
				<div className=' self-center'  >
					<img src="/images/logo.png" alt="" />
				</div>
				<form action="" onSubmit={handleLogin} className='self-center mt-4 '>
				<input type="email" name="email" id="email" placeholder='     Enter Your Email' className='w-72 h-7 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
						disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
						invalid:border-pink-500 invalid:text-pink-600
						focus:invalid:border-pink-500 focus:invalid:ring-pink-500' />


				<input type="password" name="password" id="password" placeholder='     Enter Password' className=' mt-5 w-72 h-7 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
						disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
						invalid:border-pink-500 invalid:text-pink-600
						focus:invalid:border-pink-500 focus:invalid:ring-pink-500' />	


						
				<button type="submit" className='bg-sky-400 w-36 mt-5 rounded-md h-8 text-base text-emerald-50 font-medium  font-sans' >Login</button>					



				</form>

			</div>
			
		</div>
	);
}

export default Login;
