import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/blog-animation.json';

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center gap-4 md:gap-10 lg:gap-20 p-9'>
      <div className='flex justify-center flex-col items-start gap-8 w-72 md:w-96 lg:w-2/4 lg:h-96 text-white font-poppins p-1 md:p-5 lg:p-10'>
        <h1 className='text-lg md:text-3xl lg:text-5xl'>Avasta inspireerivaid lugusid</h1>
        <p className='text-xs md:text-base lg:text-lg'>Sukeldu artiklite kogumikku, mis on loodud äratama sinu uudishimu ja avardama vaatenurki. Alates valdkonna uudistest kuni isikliku arengu nõuanneteni - meie blogi katab kõike.</p>
        <Link to='/blogi' className='transition-all duration-500 ease-in-out tracking-normal hover:tracking-widest text-xs md:text-base lg:text-lg'>Avasta meie blogi &rarr;</Link>
      </div>
      <Player
        autoplay
        loop
        src={animationData}
        className='h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64'
      />
    </div>
  );
};

export default Home;