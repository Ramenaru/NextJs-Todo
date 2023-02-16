import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'


export default function Modal(props) {
    const {setOpenModal} = props
    const [_document, set_document] = useState(null)
    const {logout} = useAuth()

    useEffect(() => {
      set_document(document)
    }, [])
  
    if (!_document) {return null}


  return   ReactDom.createPortal(
    <div className='fixed inset-0 bg-white text-slate-900 text-lg sm:text-xl flex flex-col'>
        <div className='flex items-center justify-between border-b border-solid border-slate-900 p-4'>
            <h1 id='poppins' className='font-extrabold text-2xl sm:text-3xl select-none'>Options Menu</h1>
            <i onClick={() => setOpenModal(false)} className='fa-solid fa-xmark cursor-pointer duration-300 hover:rotate-90'></i>
        </div>
        <div className='p-4 flex flex-col gap-3'>
            <h2 onClick={() => {
              logout()
              setOpenModal(false)
            }} className='cursor-pointer duration-300 hover:pl-2'>Logout</h2>
        </div>
    </div>,
     _document.getElementById('portal')
  )
}
