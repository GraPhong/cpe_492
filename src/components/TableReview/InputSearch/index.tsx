import React from 'react'

const InputSearch = () => {
  return (
  <form>
    <div className="max-w-xl">
      <div className="flex space-x-2 items-center py-2">
      </div>
      <div className="flex space-x-4">
        <div className="flex rounded-md overflow-hidden w-full">
          <input type="text" placeholder="Search..." className="w-full rounded-md rounded-r-none" />
          <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
        </div>
      </div>
    </div>
  </form>

  )
}

export default InputSearch