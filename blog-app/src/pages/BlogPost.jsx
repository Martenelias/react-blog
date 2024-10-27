import BlogPostFetcher from '../components/BlogPostFetcher';
import Comments from '../components/Comments';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  return (
    <BlogPostFetcher>
      {({ post, loading, error }) => {
        if (loading) {
          return (
            <div className='min-h-screen flex justify-center items-center bg-gradient-to-t from-gray-900 to-gray-500 transition-all duration-500 ease-in-out tracking-normal'>
              <p className='bg-gradient-to-t from-gray-400 to-white rounded text-center p-20 text-3xl'>Laen andmeid...</p>
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

        return (
          <div className='min-h-screen flex justify-center items-center'>
            <div className='bg-gradient-to-t from-gray-400 to-white my-20 p-4 w-11/12 md:w-3/4 lg:w-2/4 font-poppins rounded shadow-md shadow-black' key={post.id}>
              <div className='flex justify-between items-center'>
                <img className='rounded-full w-12' src={post.avatarUrl} alt='Avatar' />
                <h3>{randomHeader}</h3>
              </div>
              <p className='text-justify my-2 py-2 border-b border-t border-black'>{post.body}</p>
              <Link className='text-xl md:text-2xl lg:text-3xl transition-all duration-500 ease-in-out tracking-normal hover:tracking-widest font-bold' to='/blogi'>Tagasi &#x21A9;</Link>
              <Comments postId={post.id} />
            </div>
          </div>
        );
      }}
    </BlogPostFetcher>
  );
};

export default BlogPost;
