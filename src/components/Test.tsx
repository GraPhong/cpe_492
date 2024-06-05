"use client"
import React from 'react'
import TableReview from '@/components/TableReview/TableReview'
import SearchBarReview from '@/components/SearchBarReview'

export default function Review() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Call to Action Section */}
      <div className="bg-gray-700 text-white p-8 flex justify-between items-center rounded-md m-8">
        <div className="flex flex-col space-y-4 max-w-md">
          <div className='flex flex-col'>
            <h1 className="text-4xl font-bold">อยากอ่านรีวิว</h1>
            <SearchBarReview/>
          </div>
          <div className='flex'>
            <h1 className="text-4xl font-bold">อยากเขียนรีวิว</h1>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2">
              <span>Download App</span>
            </button>
          </div>

          <div className="flex space-x-4">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-6" />
              <span>Download App</span>
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Play_Arrow_logo.svg" alt="Google Play" className="h-6" />
              <span>Download App</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}