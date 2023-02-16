import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'

export default function UserDashboard() {
    const {userInfo} = useAuth();
    const [addTodo, setAddTodo] = useState(false);
    const [todo, setTodo] = useState('')

  return (
    <div className='w-full py-5 max-w-[35ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5'>
      <input type='text' placeholder='Enter List' value={todo} onChange={
        (e) => setTodo(e.target.value)} className='outline-none p-3 text-base sm:text-lg text-slate-900'/>

      {userInfo && (
        <>
      
        </>
      )}
      <button className='text-cyan-300 rounded-md border border-solid border-cyan py-2 text-center uppercase font-medium text-lg duration-300 hover:opacity-30'>Add List</button>
    </div>
  )
}
