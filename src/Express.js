// Express.js 기반 백엔드 예시
const express = require('express');
const app = express();
app.use(express.json());

// 게시물 관련 API
app.get('/api/posts', getPosts);
app.post('/api/posts', createPost);
app.get('/api/posts/:id', getPost);
app.put('/api/posts/:id', updatePost);
app.delete('/api/posts/:id', deletePost);

// 댓글 관련 API
app.get('/api/posts/:id/comments', getComments);
app.post('/api/comments', createComment);

// 커뮤니티 관련 API
app.get('/api/communities', getCommunities);
app.get('/api/communities/:id', getCommunity);

// 사용자 관련 API
app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);