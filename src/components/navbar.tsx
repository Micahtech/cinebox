import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'
import { useViewportSize } from '@mantine/hooks'
import { cn } from '../lib/utils'

interface NavLinkType {
  name: string
  path: string
}

const navLinks: NavLinkType[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { width } = useViewportSize()

  const isMobile = width < 768 // below md breakpoint

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className='fixed w-full px-8 shadow-sm shadow-neutral-500 h-[--navbar-height] flex items-center'>
      <nav className='flex justify-between items-center w-full'>
        <NavLink to='/' className='font-bold'>
          NavigationBar
        </NavLink>
        <div>
          <ul
            className={cn(
              'flex items-center gap-8',
              isMenuOpen &&
                'bg-neutral-700 flex-col fixed top-[--navbar-height] right-0 bottom-0 w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-0',
              !isMenuOpen &&
                isMobile &&
                'bg-neutral-700 flex-col fixed top-[--navbar-height] right-0 bottom-0 w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-full'
            )}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'text-sky-500' : 'text-secondary'
                  }
                  onClick={closeMenuOnMobile}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <a
              href='https://chinwike.space'
              className='rounded-lg py-2 px-4 bg-[#1FABEB]'
            >
              Explore Further
            </a>
          </ul>
        </div>

        <button
          aria-labelledby='Menu Toggle Button'
          className='block md:hidden'
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon className='size-6 text-secondary' />
          ) : (
            <MenuIcon className='size-6 text-secondary' />
          )}
        </button>
      </nav>
    </header>
  )
}
