"use client"

import TimeTable from '@/components/TimeTable';
import React, { useState } from 'react';

export default function Table() {

  return (
    <div>      
      <div className='max-w-7xl mx-auto '> 
        <TimeTable />
      </div>
    </div>
  )
}