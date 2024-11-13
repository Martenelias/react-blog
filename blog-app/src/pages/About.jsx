import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='text-center max-w-xl mx-auto mb-10'>
          <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
            Meie Meeskond
          </h2>
          <p className='mt-6 text-lg text-white'>
            Tere tulemast meie blogisse! Jagame teadmisi ja kogemusi veebiarenduse, disaini ning projektijuhtimise teemadel.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 max-w-2xl xl:max-w-none'
        >
          <li>
            <div className='flex items-center gap-x-6'>
              <img
                className='w-16 h-16 rounded-full'
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt='img'
              />
              <div>
                <h3 className='text-base font-semibold tracking-tight text-white'>
                  Leslie Alexander
                </h3>
                <p className='text-sm font-semibold text-blue-900'>Projektijuht / CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div className='flex items-center gap-x-6'>
              <img
                className='w-16 h-16 rounded-full'
                src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt='img'
              />
              <div>
                <h3 className='text-base font-semibold tracking-tight text-white'>
                  Joe Smith
                </h3>
                <p className='text-sm font-semibold text-blue-900'>Tarkvaraarendaja</p>
              </div>
            </div>
          </li>
          <li>
            <div className='flex items-center gap-x-6'>
              <img
                className='w-16 h-16 rounded-full'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt='img'
              />
              <div>
                <h3 className='text-base font-semibold tracking-tight text-white'>
                  Lucy Hall
                </h3>
                <p className='text-sm font-semibold text-blue-900'>Disainer</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className='flex justify-center mt-10'>
        <Link
          to='/blogi'
          className='border rounded w-36 py-2 px-4 text-sm text-center text-white md:text-base md:w-40 lg:text-lg hover:bg-white hover:text-blue-500'
        >
          Avasta meie blogi
        </Link>
      </div>
    </div>
  );
};

export default About;
