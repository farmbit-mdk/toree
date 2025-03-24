// 예시: src/pages/Home.js
import React from 'react';
import PostCard from '../components/PostCard';
import './Home.css';  // CSS 파일을 import

function Home() {
  // 더미 데이터
  const posts = [
    {
      id: 1,
      title: '첫 번째 게시물 제목',
      author: 'user1',
      community: 'programming',
      votes: 25,
      commentCount: 10,
      timeAgo: '3 hours ago'
    },
    {
      id: 2,
      title: '두 번째 게시물 제목',
      author: 'user2',
      community: 'webdev',
      votes: 15,
      commentCount: 5,
      timeAgo: '5 hours ago'
    }
  ];
  
  return (
    <div className="home">
      <h1>인기 게시물</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;