import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAvatarUrl } from '../utils/avatarUtils';

const BlogListFetcher = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        const postsWithAvatar = response.data.map(post => {
          return ({
            ...post,
            avatarUrl: getAvatarUrl(post.id)
          });
        });

        setTimeout(() => {
          setPosts(postsWithAvatar);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setError('Viga postituste laadimisel');
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return children({ posts, loading, error });
};

export default BlogListFetcher;