import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
  return (
    <header className='w-full px-5 py-5 flex justify-between items-center sm:px-10'>
      <nav className='flex screen-max-width w-full'>
        <img 
          src={appleImg} 
          alt="apple" 
          width={24}
          height={24}
        />

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer'>
          <img 
            src={searchImg} 
            alt="search" 
            width={18}
            height={18}  
          />
          <img 
            src={bagImg} 
            alt="store"
            width={18}
            height={18} 
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar