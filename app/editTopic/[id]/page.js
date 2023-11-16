import React from 'react'
import EditForm from '@/app/components/EditForm'

const getTopicById = async (id) => {
  try {
    const res = await fetch(`https://next-crudv1.vercel.app/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Page = async({params}) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return (
    <div>
        <EditForm id={id} title={title} description={description}/>
    </div>
  )
}

export default Page