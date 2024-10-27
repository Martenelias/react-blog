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
              <p className='bg-gradient-to-t from-gray-400 to-white rounded text-center p-20 text-3xl'>Laen andmeid...</p>
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