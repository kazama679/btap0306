import React from 'react'

export default function Bai3() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Đăng Nhập</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Tên người dùng</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Đăng Nhập</button>
        </form>
      </div>
    </div>
  )
}
