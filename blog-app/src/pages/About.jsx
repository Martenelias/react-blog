import { Link } from 'react-router-dom';
import { getAvatarUrl } from '../utils/avatarUtils';
 
const About = () => {

  const devAvatar = getAvatarUrl('1');
  const designerAvat = getAvatarUrl('2');
  const managerAvatar = getAvatarUrl('3');

  return (
    <div className='h-screen flex justify-center items-center flex-col text-white font-poppins'>
      <p className='text-base text-center p-5 md:p-20'>Tere tulemast meie blogisse! Jagame teadmisi ja kogemusi veebiarenduse, disaini ning projektijuhtimise teemadel.</p>
      <h2 className='text-2xl underline'>Meeskond</h2>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col p-5 md:m-12 text-center gap-3'>
          <img className='w-16' src={devAvatar} alt='Developer' />
          <h3 className='text-sm'>Arendaja</h3>
          <p className='text-xs'>Meie arendaja vastutab blogi tehnilise poole eest.</p>
        </div>
        <div className='flex justify-center items-center flex-col p-5 md:m-12 text-center gap-3'>
          <img className='w-16' src={designerAvat} alt='Designer' />
          <h3 className='text-sm'>Disainer</h3>
          <p className='text-xs'>Meie disainer loob blogi visuaalse poole.</p>
        </div>
        <div className='flex justify-center items-center flex-col p-5 md:m-12 text-center gap-3'>
          <img className='w-16' src={managerAvatar} alt='Manager' />
          <h3 className='text-sm'>Projektijuht</h3>
          <p className='text-xs'>Meie projektijuht tagab, et kõik sujuks plaanipäraselt.</p>
        </div>
      </div>
      <Link to='/blogi' className='mt-10 transition-all duration-500 ease-in-out tracking-normal hover:tracking-widest text-xs md:text-base lg:text-lg'>Tagasi blogisse &#x21A9;</Link>
    </div>
  );
};

export default About;