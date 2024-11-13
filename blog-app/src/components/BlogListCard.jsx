import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const avatarUrls = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  'https://images.unsplash.com/photo-1502378735452-bc7d86632805',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
];

const getRandomAvatar = () => avatarUrls[Math.floor(Math.random() * avatarUrls.length)];

const BlogCard = ({ post, randomHeader }) => {
  const avatarUrl = getRandomAvatar();

  const bodyText = 'This article explores the latest trends in the world of tech, diving into emerging innovations...';

  return (
    <div className='bg-white p-6 font-poppins rounded-lg shadow-md shadow-black transition-transform transform hover:scale-105' key={post.id}>
      <div className='flex items-center space-x-4 mb-4'>
        <img
          className='rounded-full w-14 h-14 object-cover'
          src={avatarUrl}
          alt='Avatar'
        />
        <div>
          <h3 className='text-lg font-bold text-gray-900'>{randomHeader}</h3>
          <p className='text-xs text-gray-500'>by Tech blogger</p>
        </div>
      </div>
      <p className='text-gray-700 mb-4'>{bodyText.substring(0, 80)}...</p>
      <Link
        className='inline-flex items-center py-1 px-2 text-black-500 font-semibold rounded border border-blue-500 hover:bg-blue-500 text-sm'
        to={`/blogi/${post.id}`}
      >
        Loe edasi
      </Link>
    </div>
  );
};
BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
  }).isRequired,
  postId: PropTypes.string.isRequired,
  randomHeader: PropTypes.string.isRequired,
};

export default BlogCard;