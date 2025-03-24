import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ user, setUser }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // 검색 기능 구현 - 실제로는 검색 결과 페이지로 이동
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };
  
  const handleLogout = () => {
    // 로그아웃 로직 - 실제로는 인증 상태 및 토큰 제거
    setUser(null);
    setDropdownOpen(false);
  };
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  return (
    <header className="header">
      <div className="header-container">
        {/* 로고 */}
        <div className="logo">
          <Link to="/">
            <h1>ToRee</h1>
          </Link>
        </div>
        
        {/* 검색창 */}
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>
        
        {/* 유저 메뉴 */}
        <div className="user-menu">
          {user ? (
            <div className="user-dropdown">
              <button className="user-button" onClick={toggleDropdown}>
                <img 
                  src={user.profileImage || "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"} 
                  alt="User avatar" 
                  className="user-avatar" 
                />
                <span className="username">{user.username}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to={`/user/${user.username}`} onClick={() => setDropdownOpen(false)}>
                    프로필
                  </Link>
                  <Link to="/settings" onClick={() => setDropdownOpen(false)}>
                    설정
                  </Link>
                  <button onClick={handleLogout}>로그아웃</button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-button">로그인</Link>
              <Link to="/signup" className="signup-button">회원가입</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;