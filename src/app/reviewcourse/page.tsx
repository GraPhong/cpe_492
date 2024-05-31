"use client"
import TableResultReview from '@/components/TableResultReview'
import React from 'react'

export default function Review() {
  return (
    <div>
      <div className='max-w-6xl mx-auto p-10'>
        <div>Sample Header</div>
        <div className='py-4'>
          <TableResultReview/>
        </div>
      </div>
    </div>
  )
}