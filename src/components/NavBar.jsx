import { useState ,useEffect } from 'react';
import { Link } from 'react-scroll'  
//Shopping Cart and Three Bars Icon
import { FaShoppingCart, FaBars } from 'react-icons/fa'

//style
import '../styles/NavBar.css'

import logo from '../assets/logo.png'

const NavBar = ({dropDown,setDropDown,setSticky}) => {

    const [scrolled,setScrolled] = useState(false)

    useEffect(() => {
        const threshold = dropDown ? 700 : 350
        const handleScroll = () => {
        if (window.scrollY > threshold) {
            setScrolled(true)
            setDropDown(false)
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    },[dropDown,setDropDown])

    const toggleMenu = () => {
      setDropDown(prev => !prev)
    };

    const toggleSticky = () => {
        setSticky(prev => !prev)
    }

    const handleResize = () => {
        if(window.innerWidth > 768) {
            setDropDown(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })
  
    return (
        <>
      <nav className="navbar">
        <div className='main-flex-container'>
        <div className='header-left'>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <FaBars />
                </div>
                <img src={logo} alt="logo" className="navbar-logo" />
                <ul className='navbar-options'>
                    <li className="nav-item">
                        <Link to="portfolio" smooth={true} duration={500}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='features' smooth={true} duration={700}>
                            Features
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='description' smooth={true} duration={800}>
                            Description
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='faq' smooth={true} duration={800}>
                            FAQ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='about' smooth={true} duration={800}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>       
            <div className="navbar-cart">
                <FaShoppingCart />
                <span className="cart-count">3</span>
            </div>
        </div>
      </nav>
      {scrolled && <nav className="navbar scrolled">
      <div className='main-flex-container'>
        <div className='header-left'>
                <div className="navbar-toggle" onClick={toggleSticky}>
                    <FaBars />
                </div>
                <img src={logo} alt="logo" className="navbar-logo" />
                <ul className='navbar-options'>
                    <li className="nav-item">
                        <Link to="portfolio" smooth={true} duration={500}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='features' smooth={true} duration={700}>
                            Features
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='description' smooth={true} duration={800}>
                            Description
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='faq' smooth={true} duration={800}>
                            FAQ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='about' smooth={true} duration={800}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>       
            <div className="navbar-cart">
                <FaShoppingCart />
                <span className="cart-count">3</span>
            </div>
        </div></nav>}
      </>   
    )
}

export default NavBar