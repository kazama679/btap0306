import React from 'react'

export default function Bai4() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Đăng Ký</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Tên người dùng</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Đăng Ký</button>
        </form>
      </div>
    </div>
  )
}
