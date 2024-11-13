import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Fetch comments from the API when the component mounts or postId changes
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

  // Handle submitting a new comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    // Add new comment to the list
    const updatedComments = [
      { body: newComment, email: 'Anonymous', id: Date.now() },
      ...comments,
    ];
    setComments(updatedComments);
    setNewComment('');
  };

  const avatarUrls = [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    'https://images.unsplash.com/photo-1502378735452-bc7d86632805',
    'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
  ];

  const getRandomAvatar = () => avatarUrls[Math.floor(Math.random() * avatarUrls.length)];

  return (
    <div className='mt-8'>
      <form onSubmit={handleCommentSubmit} className='flex sm:flex-row items-center space-x-2 mb-8'>
        <input
          type='text'
          className='flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-sm'
          placeholder='Kirjuta kommentaar...'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type='submit'
          className='px-2 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 text-sm'
        >
          Lisa
        </button>
      </form>
      <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Kommentaarid</h3>
      <ul className='space-y-6'>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li key={comment.id} className='flex items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow-md'>
              <div className='flex-shrink-0'>
                <img
                  className='w-10 h-10 rounded-full object-cover'
                  src={getRandomAvatar()}  // Generate a new random avatar for each comment
                  alt='User Avatar'
                />
              </div>
              <div>
                <p className='text-gray-800 font-semibold'>{comment.email || 'Anonymous'}</p>
                <p className='text-gray-700 mt-1'>{comment.body}</p>
              </div>
            </li>
          ))
        ) : (
          <p className='text-gray-600'>Sellel postitusel kommentaarid puuduvad!</p>
        )}
      </ul>
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Comments;
