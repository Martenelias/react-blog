import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ post, randomHeader }) => {
  return (
    <div className='bg-gradient-to-t from-gray-400 to-white p-4 font-poppins rounded shadow-md shadow-black' key={post.id}>
      <div className='flex justify-between items-center'>
        <img className='rounded-full w-12' src={post.avatarUrl} alt='Avatar' />
        <h3>{randomHeader}</h3>
      </div>
      <p className='text-justify my-2 py-2 border-b border-t border-black'>{post.body.substring(0, 100)}...</p>
      <Link className='text-xl md:text-2xl lg:text-3xl transition-all duration-500 ease-in-out tracking-normal hover:tracking-widest' to={`/blogi/${post.id}`}>Loe edasi &#x21AA;</Link>
    </div>
  );
};
BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  randomHeader: PropTypes.string.isRequired,
};

export default BlogCard;