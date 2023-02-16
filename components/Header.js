import React, { useEffect, useState } from 'react'
import Modal from './Modal'

export default function Header() {
  const [openModal, setOpenModal] = useState(false)

  return(
    <>
    {openModal && <Modal setOpenModal ={setOpenModal} />}

    <div className='sticky top-0 w-full left-0 bg-inherit flex border-b border-solid border-white items-center justify-between p-4'>
        <h1 id='poppins' className='text-3xl select-none sm:text-4xl'>Todo List App</h1>
        <i onClick={() => setOpenModal(true)} className='fa-solid fa-user text-xl duration-300 hover:opacity-50 cursor-pointer sm:text-3xl'></i>
    </div>

    </>
  )
}
