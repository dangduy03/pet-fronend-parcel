import "../styles/layout/header.css";
import logoShop from "../assets/images/logo_cho_meo_web.png"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

function Header({ fullName }) {
  const history = useHistory();
  const Logout = async () => {
    localStorage.clear();
    history.push("/login");
  }
  return (
    <div>
      <header>
        <div class="head">
          <div class="head-title">
            <div class="head-logo">

              <Link to="/"><img src={logoShop} alt="" /></Link>
            </div>
            <div class="head-search">
              <div style={{ width: "95%" }} className="head-search-input"><input type="text" style={{ width: "95%" }} placeholder="Find the best for your pet..." /></div>
              <div >
                <button class="btn-search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <div class="head-right">
              <span>Here to help!</span>
              <span>
                <a href=""> 0353407454</a> | <a href="">Liên hệ</a>
              </span>
            </div>
            <div class="profile_account-cart">
              <div class="profile_account">
                {fullName ? (
                  <>
                    <div className="profile-detail-user">
                      <div><p style={{color: "white"}}>{fullName}</p></div>
                      <Link to="/profile/detail">Tài khoản của bạn </Link>
                      <button onClick={Logout}>Đăng xuất </button>
                    </div>

                  </>
                ) : (
                  <Link to="./login">Đăng nhập</Link>
                )}
              </div>
              <div class="cart">
                <Link to="/product-cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                  </Link>
                {/* <p>0</p> */}
              </div>
            </div>
          </div>
          <div class="head-menu-nav">
            <ul class="nav-content">
              <li>
                <a href="">Sale</a>
              </li>
              <li>
                <a href="">Brand</a>
              </li>
              <li>
                <a href="">Chó </a>
              </li>
              <li>
                <a href="">Mèo</a>
              </li>
            </ul>
          </div>

        </div>
      </header >
    </div >
  );
}

export default Header