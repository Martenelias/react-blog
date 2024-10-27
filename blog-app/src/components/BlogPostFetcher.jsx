import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAvatarUrl } from '../utils/avatarUtils';
import { useParams } from 'react-router-dom';

const BlogPostFetcher = ({ children }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        const postWithAvatar = {
          ...response.data,
          avatarUrl: getAvatarUrl(response.data.userId)
        };

        setTimeout(() => {
          setPost(postWithAvatar);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setError('Viga postituse laadimisel');
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return (
    children({ post, loading, error })
  );
};

export default BlogPostFetcher;