import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';
import './Community.css'; // 아직 생성하지 않았다면 나중에 추가하세요

function Community() {
  const { communityId } = useParams();
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('hot'); // 'hot', 'new', 'top' 등 정렬 옵션

  useEffect(() => {
    // 실제 구현에서는 API에서 데이터를 가져옵니다
    // 여기서는 데모용 더미 데이터를 사용합니다
    const fetchData = () => {
      // 커뮤니티 정보 가져오기
      const communityData = {
        id: communityId,
        name: communityId,
        description: `Welcome to r/${communityId}, a community for everything related to ${communityId}!`,
        memberCount: 12500,
        createdAt: '2020-05-15',
        isJoined: false
      };
      
      // 게시물 목록 가져오기
      const postsData = [
        {
          id: 1,
          title: `${communityId}에 대한 첫 번째 게시물입니다`,
          author: 'user1',
          community: communityId,
          votes: 35,
          commentCount: 12,
          timeAgo: '2 hours ago',
          content: '이것은 게시물의 내용입니다. 실제 게시물에는 더 많은 내용이 있을 것입니다.'
        },
        {
          id: 2,
          title: `${communityId} 커뮤니티에서 논의하고 싶은 주제`,
          author: 'user2',
          community: communityId,
          votes: 28,
          commentCount: 7,
          timeAgo: '4 hours ago',
          content: '이것은 두 번째 게시물의 내용입니다.'
        },
        {
          id: 3,
          title: `${communityId}에 관한 유용한 팁과 트릭`,
          author: 'user3',
          community: communityId,
          votes: 42,
          commentCount: 15,
          timeAgo: '6 hours ago',
          content: '이것은 세 번째 게시물의 내용입니다.'
        },
        {
          id: 4,
          title: `${communityId} 관련 새로운 소식`,
          author: 'user4',
          community: communityId,
          votes: 19,
          commentCount: 3,
          timeAgo: '12 hours ago',
          content: '이것은 네 번째 게시물의 내용입니다.'
        }
      ];
      
      setCommunity(communityData);
      setPosts(postsData);
      setLoading(false);
    };
    
    fetchData();
    
    // 커뮤니티 ID가 변경될 때마다 데이터를 다시 가져옴
  }, [communityId]);
  
  const handleJoinCommunity = () => {
    setCommunity(prevState => ({
      ...prevState,
      isJoined: !prevState.isJoined,
      memberCount: prevState.isJoined ? prevState.memberCount - 1 : prevState.memberCount + 1
    }));
    // 실제 구현에서는 API로 가입/탈퇴 요청을 보냅니다
  };
  
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    // 실제 구현에서는 선택된 정렬 방식에 따라 게시물을 다시 가져오거나 정렬합니다
  };
  
  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }
  
  return (
    <div className="community-page">
      {/* 커뮤니티 배너 */}
      <div className="community-banner">
        <div className="community-info">
          <h1>r/{community.name}</h1>
          <p>{community.description}</p>
          <div className="community-stats">
            <span>{community.memberCount.toLocaleString()} members</span>
            <span>Created {community.createdAt}</span>
          </div>
          <button 
            className={`join-button ${community.isJoined ? 'joined' : ''}`}
            onClick={handleJoinCommunity}
          >
            {community.isJoined ? '가입됨' : '가입하기'}
          </button>
        </div>
      </div>
      
      {/* 게시물 컨트롤 */}
      <div className="post-controls">
        <div className="sort-options">
          <button 
            className={sortBy === 'hot' ? 'active' : ''} 
            onClick={() => handleSortChange('hot')}
          >
            인기
          </button>
          <button 
            className={sortBy === 'new' ? 'active' : ''} 
            onClick={() => handleSortChange('new')}
          >
            최신
          </button>
          <button 
            className={sortBy === 'top' ? 'active' : ''} 
            onClick={() => handleSortChange('top')}
          >
            TOP
          </button>
        </div>
        
        <button className="create-post-button">게시물 만들기</button>
      </div>
      
      {/* 게시물 목록 */}
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="no-posts">이 커뮤니티에는 아직 게시물이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default Community;