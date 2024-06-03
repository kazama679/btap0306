import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink, Route, Router, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import Bai1 from './components/baitap/Bai1'
import Bai2 from './components/baitap/Bai2'
import Bai3 from './components/baitap/Bai3'
import Bai4 from './components/baitap/Bai4'
import Bai5 from './components/baitap/Bai5'
import Bai6 from './components/baitap/Bai6'
import Product from './components/baitap/bai7/Product'
import Detail from './components/baitap/bai7/Detail'
import Header from './components/baitap/bai7/Header'
import Account from './components/baitap/bai8/Account'
import Admin from './components/baitap/bai8/Admin'
import CustomLink from './components/baitap/bai9/CustomLink'
import HomePage from './components/baitap/bai9/HomePage'
import UserDetail from './components/baitap/bai10/UserDetail'
import ListUser from './components/baitap/bai10/ListUser'
const users = [
  { id: 1, name: 'Quang', email: 'a@gmail.com', address: 'abc' },
  { id: 2, name: 'Duc', email: 'b@gmail.com', address: 'xyz' },
  { id: 3, name: 'Cuop', email: 'c@gmail.com', address: 'cxs' },
];
function App() {
  const navigate = useNavigate();
  const handleRedirect = () =>{
    // chuyển hướng về trang Home
    navigate('./')
  }
  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}
      <div>-------------------------------------</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <button onClick={handleRedirect}>Chuyển hướng về Home</button>
        <button onClick={()=>navigate(-1)}>Quay lại</button>
        <button onClick={()=>navigate(1)}>Tiến</button>
      </nav>
      {/* khu vực định tuyến các route, k đc viết HTML trong này */}
      <Routes>
        {/* định nghĩa các Router cho component */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <div>*****************************-</div>
      <nav>
          <Routes>
            <Route path="/" element={<Bai1 />} />
            <Route path="/" element={<Bai2 />} />
            <Route path="/" element={<Bai3 />} />
            <Route path="/" element={<Bai4 />} />
            <Route path="/" element={<Bai5 />} />
            {/* bài 6 */}
            <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          </Routes>
      </nav>
      {/* bai 7 */}
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
    {/* bài 8 */}
    <Router>
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
    {/* bài 9 */}
    <Router>
      <CustomLink />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
    {/* bai 10 */}
    <Router>
      <Routes>
        <Route path="/" element={<ListUser users={users} />} />
        <Route path="/user-detail/:id" element={<UserDetail users={users} />} />
      </Routes>
    </Router>
    </>
  )
}
export default App

