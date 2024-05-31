import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';


const SortDropdown = () => {
  const [selectedSort, setSelectedSort] = useState('Most relevant');
  const sortOptions = ['Most relevant', 'Newest first', 'Oldest first', 'Highest rated'];

  return (
    <div className="inline-block text-left">
      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Sort: {selectedSort}
          <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" />
        </Menu.Button>
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sortOptions.map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    onClick={() => setSelectedSort(option)}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } block w-full text-left px-4 py-2 text-sm`}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default SortDropdown;
