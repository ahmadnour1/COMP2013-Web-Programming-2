import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };

  const handleChange = (event) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fakePost = {
      id: posts.length + 1,
      title: newPost.title,
      body: newPost.body,
    };

    setPosts([fakePost, ...posts]);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div>
      <h1>Fake API App</h1>

      <PostForm
        newPost={newPost}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {loading ? <h2>Loading...</h2> : <PostsContainer posts={posts} />}
    </div>
  );
}
