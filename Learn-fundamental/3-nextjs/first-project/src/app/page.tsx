"use client";
import { useEffect, useState, useContext } from 'react'


// import React, { useState, useEffect } from 'react';

import Pusher from 'pusher-js'

let pusher = new Pusher('332116290f279cf76db1', {
  cluster: 'ap1'
});

const channel = pusher.subscribe('end-milk-4');

Pusher.logToConsole = true;
Pusher.log = (msg) => {
  console.log(msg);
};


import type { Metadata } from 'next'
export type PostData = {
  userId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const metadata: Metadata = {
  title: 'Pages',
  description: 'Pages - About',
}

const Home = () => {
  const [propsParam, setParams] = useState<Array<PostData>>([]);
  useEffect(() => {
    channel.bind('my-event', (data: any) => {
      setParams(data);
    });
  }, [propsParam])

  return (
    <main className=" items-center p-24">
      <div className="container">
        <h1 className="font-bold underline">Hello, Next.js!</h1> 
        <div>
          <ul className='flex flex-wrap items-center justify-center'>
            {propsParam.map(p => (
              <li key={p.id} className='p-5'>
                {p.title}
                <img src={p.url} alt='asdasdasda' width={100} height={100}></img>

              </li>
            ))}
          </ul>
        </div>
      </div>
      </main>
  )
}


export default Home;