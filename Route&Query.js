import React from 'react'
import Home from "./Home2";
import AboutUs from "./AboutUs2";
import ContactUs from "./ContactUs2";
import Login from "./Login2";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './Rout&Query.css'
import User from './User';

function Header() {
    return (
      <div className="rout">
      <ul>
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/about">AboutUs</Link>
        </li>
        <li>
          <Link className="link" to="/contact">ContactUs</Link>
        </li>
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="link" to="/user">User</Link>
        </li>
      </ul>
      </div>
    )
  }
export default function RouteAndQuery() {
  return (
    <div>
          <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="user/:id/:name" element={<User />}>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
