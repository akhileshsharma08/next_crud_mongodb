"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://next-crudv1.vercel.app/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push('/');
        // router.replace(router.asPath);
      } else {
        throw new Error('Failed to create');
      }
    } catch (error) {
      console.error('Error in creating', error);
    }
  };

  return (
    <div className='my-8  flex justify-center  '>
      <div className='main w-1/2 p-6 bg-zinc-100  border border-zinc-300 shadow-lg'>
        <h1 className='text-center font-semibold my-2'>Add Topic</h1>
        <form className='form  rounded-lg' onSubmit={handleSubmit}>
          <input
            className='mb-2 w-full p-2 text-xl'
            type='text'
            name='title'
            id='title'
            placeholder='Enter Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className='mb-2 w-full p-2 text-xl'
            type='text'
            name='description'
            id='description'
            placeholder='Describe Here...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className='div flex justify-center'>
            <button
              type='submit'
              className='font-semibold bg-green-600 hover:bg-green-700 px-4 py-2 text-white'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
