import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/blog-animation.json';

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center gap-4 md:gap-10 lg:gap-20 p-9'>
      <div className='flex justify-center flex-col items-start gap-8 w-72 md:w-96 lg:w-2/4 lg:h-96 text-white font-poppins p-1 md:p-5 lg:p-10'>
        <h1 className='text-2xl font-extrabold md:text-3xl lg:text-5xl'>Avasta inspireerivaid lugusid</h1>
        <p className='text-base md:text-base lg:text-lg'>Sukeldu artiklite kogumikku, mis on loodud äratama sinu uudishimu ja avardama vaatenurki. Alates valdkonna uudistest kuni isikliku arengu nõuanneteni - meie blogi katab kõike.</p>
        <Link to='/blogi' className='border rounded py-2 px-4 text-sm md:text-base lg:text-lg hover:bg-white hover:text-blue-500'>Avasta meie blogi</Link>
      </div>
      <Player
        autoplay
        loop
        src={animationData}
        className='hidden md:h-48 md:w-48 md:flex lg:h-64 lg:w-64 lg:flex'
      />
    </div>
  );
};

export default Home;