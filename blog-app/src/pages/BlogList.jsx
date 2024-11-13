import BlogListFetcher from '../components/BlogListFetcher';
import BlogCard from '../components/BlogListCard';

const BlogList = () => {

  const headersList = ['Veebiarendus', 'Disain', 'Projektijuhtimine', 'Karjäär', 'Eneseareng', 'Tehnoloogia', 'Tarkvaraarendus', ];

  return (
    <BlogListFetcher>
      {({ posts, loading, error }) => {
        if (loading) {
          return (
            <div className='min-h-screen flex justify-center items-center bg-gradient-to-t from-gray-900 to-gray-500 transition-all duration-500 ease-in-out tracking-normal'>
              <div className='flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg'>
                <svg
                  className='animate-spin h-5 w-5 mr-3 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8v8H4z'
                  ></path>
                </svg>
                Laen andmeid...
              </div>
            </div>
          );
          
        }
        if (error) {
          return <p>{error}</p>;
        }

        return (
          <div className='py-24 px-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {posts.map(post => {
                const randomHeader = headersList[Math.floor(Math.random() * headersList.length)];

                return <BlogCard key={post.id} post={post} randomHeader={randomHeader} />;
              })}
            </div>
          </div>
        );
      }}
    </BlogListFetcher>
  );
};

export default BlogList;