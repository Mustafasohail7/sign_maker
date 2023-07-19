import { Link } from 'react-scroll'

//stylesheet
import '../styles/DropDown.css'

const DropDown = ({dropDown,setDropDown}) => {

  const handleClick = () => {
    setDropDown(false)
  }

  return (
    <>
    <div className={`navbar-dropdown ${dropDown ? 'open' : ''}`}>
        <ul className="navbar-options-dropdown">
            <li className="nav-item-dropdown">
              <Link to="portfolio" smooth={true} duration={500} offset={-500} onClick={handleClick}>
                  Portfolio
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='features' smooth={true} duration={700} offset={-500} onClick={handleClick} >
                  Features
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='description' smooth={true} duration={800}  offset={-480} onClick={handleClick} >
                  Description
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='faq' smooth={true} duration={800} offset={-480} onClick={handleClick} >
                  FAQ
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='about' smooth={true} duration={800} offset={-450} onClick={handleClick} >
                  About
              </Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default DropDown
