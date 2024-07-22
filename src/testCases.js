const apiClient = require('./apiClient');
const { assertResponse } = require('./utils');

async function getPosts() {
    const response = await apiClient.get('/posts');
    assertResponse(response, 200, response.data);  // Adjust as per expected data
}

async function createPost() {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    const response = await apiClient.post('/posts', newPost);
    assertResponse(response, 201, response.data);  // Adjust as per expected data
    return response.data.id;
}

async function updatePost(postId) {
    const updatedPost = { title: 'foo', body: 'bar', userId: 1 };
    const response = await apiClient.put(`/posts/${postId}`, updatedPost);
    assertResponse(response, 200, response.data);  // Adjust as per expected data
}

async function deletePost(postId) {
    const response = await apiClient.delete(`/posts/${postId}`);
    assertResponse(response, 200, {});  // Adjust as per expected data
}

async function runTests() {
    await getPosts();
    const postId = await createPost();
    await updatePost(postId);
    await deletePost(postId);
}

module.exports = { runTests };
