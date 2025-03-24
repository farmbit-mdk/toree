import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

function Post() {
  const { postId } = useParams(); // URL에서 postId 가져오기
  const [votes, setVotes] = useState(120); // 초기 투표 수
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvote = () => {
    if (upvoted) {
      setVotes(votes - 1);
      setUpvoted(false);
    } else {
      setVotes(downvoted ? votes + 2 : votes + 1);
      setUpvoted(true);
      setDownvoted(false);
    }
  };

  const handleDownvote = () => {
    if (downvoted) {
      setVotes(votes + 1);
      setDownvoted(false);
    } else {
      setVotes(upvoted ? votes - 2 : votes - 1);
      setDownvoted(true);
      setUpvoted(false);
    }
  };

  return (
    <div className="post">
      <div className="vote-section">
        <button className={`vote-btn upvote ${upvoted ? 'active' : ''}`} onClick={handleUpvote}>▲</button>
        <span className="vote-count">{votes}</span>
        <button className={`vote-btn downvote ${downvoted ? 'active' : ''}`} onClick={handleDownvote}>▼</button>
      </div>

      <div className="post-content">
        <h2 className="post-title">Reddit 스타일의 게시물 제목</h2>
        <p className="post-meta">
          <span className="community">r/reactjs</span> • 게시됨 3시간 전 • <span className="author">u/username</span>
        </p>
        <p className="post-body">
          이곳은 Reddit 스타일의 게시물 내용입니다. 수경재배, AI, 음악 등 다양한 주제에 대해 이야기할 수 있습니다.  
          여러분의 생각을 자유롭게 나누어 보세요!
        </p>
        <div className="post-actions">
          <button className="comment-btn">💬 댓글 24개</button>
          <button className="share-btn">🔗 공유</button>
          <button className="save-btn">🔖 저장</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
