import React from 'react';

const UserDetail = ({ currentUser }) => {
  const username = currentUser.username;
  return (
    <div className='user-detail'>
      <span className='user-detail-username'>{`${username}'s Profile`}</span>
    </div>
  );
};

export default UserDetail;
