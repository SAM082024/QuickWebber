"use client"
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import {RiNextjsFill} from 'react-icons/ri'
// import {BiMenu, BiX} from 'react-icons/bi'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [isHydrated, setIsHydrated] = useState(false) // new
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathName = usePathname()

    // Mark as hydrated
    useEffect(() => {
        setIsHydrated(true)
    }, [])


    useEffect(( ) => {
        if (!isHydrated) return // wait for client
        let lastScrollY = window.scrollY

        const controlNavbar = () => {
            const currentScrollY = window.scrollY
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
            lastScrollY = currentScrollY;
        }

        window.addEventListener('scroll', controlNavbar)
        return () => window.removeEventListener('scroll', controlNavbar)
    }, [isHydrated])

    if (!isHydrated) return

    const navLinks = [
        {href: '/', label: 'Home'},
        {href: '/about', label: 'About'},
        {href: '/services', label: 'Services'},
        {href: '/contact', label: 'Contact'},
    ]

    return (
        <nav className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${isVisible ? "translate-y-0": "-translate-y-full"}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                <div className='flex justify-between h-16'>
                    <div className='flex items-center'>
                        <Link href='/'>
                        <div className='text-6xl text-gray-800'>QW</div>
                        </Link>
                    </div>

                    <div className='hidden md:flex items-center space-x-8'>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}
                            className={`text-gray-600 hover:text-gray-900 px-3 py-2
                            rounded-md text-md font-semibold transition-colors ${pathName
                            ===link.href ? 'text-blue-600' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className='md:hidden flex items-center'>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md
                            text-gray-600 hover:text-gray-900 hover:bg-gray-100
                            focus:outline-none focus:ring-2 focus:ring-inset
                            focus:ring-blue-500'>
                            {!isMobileMenuOpen ? (
                                <span className='text-3xl'>☰</span>
                            ) : (
                                <span className='text-3xl'>✕</span>
                            )}
                        </button>
                    </div>

                    <div 
                        className={`md:hidden transition-all duration-300 ease-in-out ${
                            isMobileMenuOpen
                            ? 'max-h-64 opacity-100'
                            : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                    >
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            {navLinks.map((link) => (
                                <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => {setIsMobileMenuOpen(false)}}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    pathName===link.href
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >   
                                {link.label}
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

