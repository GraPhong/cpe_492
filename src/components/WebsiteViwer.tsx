"use client"
import React, { useState } from 'react';

const WebsiteViewer = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const sidebarItems = [
        { id: 11, name: 'โยธา', url: 'https://civil.eng.cmu.ac.th/students/undergraduate' },
        { id: 12, name: 'ไฟฟ้า', url: 'https://ee.eng.cmu.ac.th/web/page.php?id=69&t=%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%B5' },
        { id: 13, name: 'เครื่องกล', url: 'https://me.eng.cmu.ac.th/article/study-program-th' },
        { id: 14, name: 'สิ่งแวดล้อม', url: 'https://env.eng.cmu.ac.th/course.php?t=%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%B5&id=7' },
        { id: 15, name: 'อุตสาหการ', url: 'https://ie.eng.cmu.ac.th/curriculum/undergrad_th' },
        { id: 16, name: 'เหมืองแร่และปิโตรเลียม', url: 'https://mining.eng.cmu.ac.th/web/?page_id=216' },
        { id: 17, name: 'คอมพิวเตอร์', url: 'https://www.cpe.eng.cmu.ac.th/curriculum-thai.php?view_id=CPE-2563B' },
    // Add more links as needed
  ];

  const handleItemClick = (url) => {
    setSelectedLink(url);
  };

  return (
    <div style={{ display: 'flex',height: '100vh' }}>
      {/* Left side - Sidebar */}
      <div style={{ flex: '0 0 200px', background: '#f0f0f0', padding: '20px' }}>
        <h2 className='text-3xl font-bold h-10vh flex justify-between  px-20 py-8   items-center flex-l'>หลักสูตร</h2>
        <ul className='text-xl px-20 '>
          {sidebarItems.map((item) => (
            <li key={item.id} style={{ cursor: 'pointer' }} onClick={() => handleItemClick(item.url)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Display Website */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h2></h2>
        {selectedLink ? (
          <iframe
            title="External Website"
            src={selectedLink}
            style={{ width: '100%', height: '80vh', border: 'none' }}
          />
        ) : (
          <p>Please select a link from the sidebar to view a website.</p>
        )}
      </div>
    </div>
  );
};

export default WebsiteViewer;

