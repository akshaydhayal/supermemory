import { useState } from 'react'
import { Add } from '../icons/Add'
import Note from '../icons/Note'
import { Share } from '../icons/Share'
import Button from './Button'

const Navbar = ({setModalOpen}) => {
  return (
    <div className='flex justify-between px-4 py-2 bg-[#121212]'>
        <div className='flex gap-2 items-center'>
            <Note/>
            <p className='text-xl font-semibold text-slate-200'>SuperMemory</p>
        </div>
        <div className='flex gap-4 items-center'>
            <Button variant='light' icon={<Add/>} size='sm' defaultStyle='' onClick={()=>{
                setModalOpen(true);
            }}>Add Memory</Button>
            <Button variant='dark' icon={<Share/>} size='sm'>Share Brain</Button>
        </div>
    </div>
  )
}

export default Navbar