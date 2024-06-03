import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

const ListUser: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <div>
      <h1>Danh Sách Người Dùng</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name}</span>
            <button>
              <Link to={`/user-detail/${user.id}`}>Xem Chi Tiết</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
