"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

const List = () => {
  const router = useRouter();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://next-crudv1.vercel.app/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const { topics } = await res.json();
        setTopics(topics);
      } catch (error) {
        console.error("Error in Loading Topics", error);
      }
    };

    fetchData();
  }, [topics]);

  const deleteTopic = async (id) => {
    try {
      const res = await fetch(`https://next-crudv1.vercel.app/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.replace(router.asPath);
      }
    } catch (error) {
      console.error("Error deleting topic", error);
    }
  };

  return (
    <div className="container w-3/4 mx-auto mt-4">
      {topics.map((t) => (
        <div
          key={t._id}
          className="mycard flex justify-between items-center mb-4 border-2 shadow-lg bg-zinc-100"
        >
          <div className="textContainer p-4">
            <h1 className="font-bold text-lg capitalize">{t.title}</h1>
            <p>{t.description}</p>
          </div>
          <div className="iconsbox p-4 text-xl flex justify-end items-center">
            <Link href={`/editTopic/${t._id}`}>
              <p className="text-slate-900 mx-2">
                <BiEditAlt />
              </p>
            </Link>
            <button onClick={() => deleteTopic(t._id)}>
              <p className="text-red-500">
                <FaRegTrashAlt />
              </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
