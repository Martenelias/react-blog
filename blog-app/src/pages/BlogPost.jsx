import BlogPostFetcher from '../components/BlogPostFetcher';
import { Link } from 'react-router-dom';
import Comments from '../components/Comments';

const avatarUrls = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  'https://images.unsplash.com/photo-1502378735452-bc7d86632805',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
];

const getRandomAvatar = () => avatarUrls[Math.floor(Math.random() * avatarUrls.length)];

const BlogPost = () => {
  return (
    <BlogPostFetcher>
      {({ post, loading, error }) => {
        if (loading) {
          return (
            <div className='min-h-screen flex justify-center items-center bg-gradient-to-t from-gray-900 to-gray-500'>
              <div className='flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg'>
                <svg className='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v8H4z'></path>
                </svg>
                Laen andmeid...
              </div>
            </div>
          );
        }
        if (error) {
          return <p>{error}</p>;
        }

        if (!post) {
          return <p>Postitust ei leitud.</p>;
        }

        const headersList = ['Veebiarendus', 'Disain', 'Projektijuhtimine', 'Karjäär', 'Eneseareng', 'Tehnoloogia', 'Tarkvaraarendus'];
        const randomHeader = headersList[Math.floor(Math.random() * headersList.length)];
        const avatarUrl = getRandomAvatar();

        return (
          <div className='min-h-screen py-10 pt-24 bg-blue-500'>
            <div className='max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md shadow-black font-poppins'>
              <div className='flex items-center space-x-4 mb-6'>
                <img className='w-16 h-16 rounded-full object-cover' src={avatarUrl} alt='Author Avatar' />
                <div>
                  <h1 className='text-3xl font-semibold text-gray-800'>{randomHeader}</h1>
                  <p className='text-gray-600'>by Tech Blogger</p>
                </div>
              </div>
              <div className='text-gray-700 space-y-4 leading-relaxed'>
                <p>{post.body}</p>
              </div>
              <Link
                className='inline-flex items-center mt-2 py-1 px-2 text-black-500 font-semibold rounded border border-blue-500 hover:bg-blue-500 text-sm'
                to={'/blogi}'}
              >
                Tagasi
              </Link>
              <Comments postId={post.id} />
            </div>
          </div>
        );
      }}
    </BlogPostFetcher>
  );
};


export default BlogPost;
