"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const EditForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='my-8  flex justify-center  '>
      <div className="main w-1/2 p-6 bg-zinc-100  border border-zinc-300 shadow-lg" >
        <h1 className='text-center font-semibold my-2'>Update Topic</h1>
        <form className="form  rounded-lg " onSubmit={handleUpdate}>
          <input
            className="mb-2 w-full p-2 text-xl"
            onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            
          />
          <textarea
            className="mb-2 w-full p-2 text-xl"
            type="text"
            name="description"
            id="description"
            placeholder="Describe Here..."
            onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
          />
          <div className="div flex justify-center">
            <button
            type="submit"
            className="font-semibold bg-green-600 hover:bg-green-700 px-4 py-2 text-white"
          >
            Update 
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EditForm