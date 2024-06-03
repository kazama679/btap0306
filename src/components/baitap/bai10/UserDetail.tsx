import React from 'react';
import { useParams } from 'react-router-dom';

interface UserParams {
  id: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

const UserDetail: React.FC<{ users: User[] }> = ({ users }) => {
  const { id } = useParams<UserParams>();
  const user = users.find(user => user.id === parseInt(id, 10));

  if (!user) {
    return <div>Người dùng không tồn tại</div>;
  }

  return (
    <div>
      <h1>Thông Tin Người Dùng</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
};

export default UserDetail;
