import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomLink: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Link to="/">Trang Chủ</Link>
      {location.pathname === "/home-page" ? (
        <Link to="/home-page">Trang Chủ (Đang ở đây)</Link>
      ) : (
        <Link to="/not-found">Trang Không Tìm Thấy</Link>
      )}
    </div>
  );
};

export default CustomLink;
