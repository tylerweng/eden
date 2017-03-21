import React from 'react';

const MyStationsDetail = ({ currentUser }) => {
  const username = currentUser.username;
  return (
    <div className='my-stations-detail'>
      <span className='my-stations-detail-username'>{`${username}'s Stations`}</span>
    </div>
  );
};

export default MyStationsDetail;
