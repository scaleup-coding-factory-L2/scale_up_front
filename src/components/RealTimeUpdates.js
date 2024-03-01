// RealTimeUpdates.js

import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3000';

function RealTimeUpdates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('subjects', (updatedSubjects) => {
      setData(updatedSubjects);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h1>Front-end App with Real-time Updates</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name} - {item.year} - {item.promotion}</li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeUpdates;
