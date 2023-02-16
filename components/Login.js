import { useAuth } from '@/context/AuthContext';
import React, {use, useState} from 'react'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggin, setIsLoggin] = useState(true);

    const {login, signup, currentUser} = useAuth();

    async function submitHandler() {
        if (!email || !password) {
            setError('Please enter a valid Username or Password')
            return
        }
        if (isLoggin) {
            try {
                await login(email, password)
            } catch (error) {
                setError('Please enter a valid Username or Password')
            }
            return 
        }
        await signup(email,password)
    }

  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
        <h1 id='poppins' className='font-extrabold select-none text-2xl sm:text-4xl
        uppercase'>
        {isLoggin ? 'Login' : 'Register'}</h1>
        {error && <div className='px-7 sm:px-8 w-full max-w-[40ch] border-rose-300 text-rose-300 py-2'>{error}</div>}

        <input type='text'  value={email} onChange={(e) => setEmail (e.target.value)} placeholder='Your email address' name='email' className='outline-none rounded-md text-slate-900 p-2 w-full max-w-[30ch]'/>

        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
         placeholder='Your password' name='password' className='outline-none rounded-md text-slate-900 p-2 w-full max-w-[30ch]'/>

        <button onClick={submitHandler} className='border border-white border-solid uppercase py-1 rounded-md p-2 w-full max-w-[15ch] text-white duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 mt-2 sm:mt-0 hover:text-slate-900'>
            <h2 className='relative z-20'>
            Submit
            </h2>
        </button>
        <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={() => setIsLoggin(!isLoggin)}>{!isLoggin ? 'Login' : 'Register'}</h2>
    </div>
  )
}
