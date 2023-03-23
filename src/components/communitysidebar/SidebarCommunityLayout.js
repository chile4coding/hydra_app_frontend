import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SidebarCommunityLayout({bg, header, footer,  children}) {
  return (
    <Card >
      <div className='ml-4 py-3 border-bottom'>
        <h5 className='mx-4'>{header}</h5>
      </div>
      <Card.Body style={{backgroundColor: `${bg}`}}>
        
        {children}
        
       
      </Card.Body>
      <div className='ml-4 py-3 border-top'>
        <p className='mx-4'>{footer}</p>
      </div>
    </Card>
  );
}

export default SidebarCommunityLayout

