import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [isScrolled, setIsScroller] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScroller(true);
    } else {
      setIsScroller(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to close the menu after clicking a link
  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`fixed w-screen py-4 px-10 flex justify-between items-center z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'bg-black bg-opacity-75' : 'bg-transparent'}`}>
      <div>
        <h1 className='text-lg md:text-3xl lg:text-5xl font-bold text-white font-pacifico'>Blogi</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden mr-4 lg:flex space-x-8 text-xs md:text-sm lg:text-base font-poppins'>
        <li className='text-white hover:text-blue-200'>
          <NavLink to='/' exact>
            Avaleht
          </NavLink>
        </li>
        <li className='text-white hover:text-blue-200'>
          <NavLink to='/blogi'>
            Blogi
          </NavLink>
        </li>
        <li className='text-white hover:text-blue-200'>
          <NavLink to='/meist'>
            Meist
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu - Burger Icon */}
      <section className='lg:hidden'>
        <div
          className='space-y-1 cursor-pointer'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className='block h-0.5 w-6 bg-white'></span>
          <span className='block h-0.5 w-6 bg-white'></span>
          <span className='block h-0.5 w-6 bg-white'></span>
        </div>
      </section>

      {/* Mobile Menu - Links */}
      <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
        <div
          className='absolute top-0 right-0 px-8 py-8 cursor-pointer'
          onClick={() => setIsNavOpen(false)}
        >
          {/* Close Button for Mobile */}
          <svg
            className='h-8 w-8 text-black'
            viewBox='0 0 20 20'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </div>

        <ul className='flex flex-col items-center justify-between min-h-[250px]'>
          <li className='hover:underline hover:text-gray-500 my-8 uppercase font-poppins'>
            <NavLink to='/' exact onClick={handleNavLinkClick}>
              Avaleht
            </NavLink>
          </li>
          <li className='hover:underline hover:text-gray-500  my-8 uppercase font-poppins'>
            <NavLink to='/blogi' onClick={handleNavLinkClick}>
              Blogi
            </NavLink>
          </li>
          <li className='hover:underline hover:text-gray-500  my-8 uppercase font-poppins'>
            <NavLink to='/meist' onClick={handleNavLinkClick}>
              Meist
            </NavLink>
          </li>
        </ul>
      </div>

      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 30;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
