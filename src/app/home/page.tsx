"use client"

import TableResultSearch from '@/components/TableResultSearch';
import React, { useState } from 'react';



export default function Home() {

  return (
    <div> 
      <h1 className="text-3xl font-bold  h-10vh px-20 py-5  items-center ">ค้นหาวิชา</h1>      
      <div className='max-w-7xl mx-auto '> 
        <TableResultSearch />
      </div>
    </div>
  )
}
