import React from 'react';

type Props = {};

export default function PageNotFound({}: Props) {
  return (
    <div className='bg-purple-600 min-h-screen flex flex-col items-center justify-center'>
      <img 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBBt006F2pNckYb6F-j2L_mCsuC8GwJVhyphenhyphenckminyhEIFusjd_4VhjVoz1C9Nl3yyRUDKObqTw0pbU9Aups92_MQQ22lH3yqOQ9jA75dhoO92K69-9yLAzknNjnueW6NgXLlC0r7czyhMl7/s800/internet_404_page_not_found.png" 
        alt="Page Not Found" 
        style={{ width: '40%', height: 'auto' }}
      />
    </div>
  );
}
