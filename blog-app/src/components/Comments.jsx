import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment) return;

    const updatedComments = [...comments, { body: newComment }];
    setComments(updatedComments);
    setNewComment('');
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit} className=' flex justify-center items-center my-6'>
        <input
          className='p-2 rounded w-3/4 text-sm'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Kirjuta kommentaar...'
        />
        <button type='submit' className='w-1/4 px-2 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600'>
          Lisa
        </button>
      </form>
      <h3 className='text-lg text-center font-bold'>Kommentaarid</h3>
      <ul className='space-y-4 mt-2'>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index} className='p-2 bg-gray-100 rounded'>
             {comment.body}
            </li>
          ))
          ) : (
            <p>Sellel postitusel kommentaarid puuduvad!</p>
          )}
      </ul>
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Comments;