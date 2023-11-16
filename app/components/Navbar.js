import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto w-3/4'>
        <div className="navbar  bg-slate-900 flex justify-between items-center p-4">
           <Link href={'/'}><h1 className='font-bold text-zinc-50 '>Next-CRUD</h1></Link> 
            <Link href={'/addTopic'} className='bg-zinc-50 font-semibold hover:bg-zinc-200  text-slate-900 px-4 py-2 rounded-lg'>Add</Link>
        </div>
    </div>
  )
}

export default Navbar