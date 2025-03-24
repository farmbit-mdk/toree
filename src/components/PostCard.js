// components/PostCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

function PostCard({ post }) {
  const [votes, setVotes] = useState(post.votes);
  
  const handleUpvote = () => {
    setVotes(votes + 1);
    // API 호출로 서버에 업데이트
  };
  
  const handleDownvote = () => {
    setVotes(votes - 1);
    // API 호출로 서버에 업데이트
  };
  
  return (
    <div className="post-card">
      <div className="vote-section">
        <button onClick={handleUpvote}>↑</button>
        <span>{votes}</span>
        <button onClick={handleDownvote}>↓</button>
      </div>
      <div className="content-section">
        <span className="community-tag">
          <Link to={`/r/${post.community}`}>r/{post.community}</Link>
        </span>
        <h3 className="post-title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <div className="post-metadata">
          Posted by <Link to={`/user/${post.author}`}>u/{post.author}</Link> {post.timeAgo}
        </div>
        <div className="post-footer">
          <span>{post.commentCount} comments</span>
          <span>Share</span>
          <span>Save</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;