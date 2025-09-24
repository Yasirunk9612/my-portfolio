import { Navbar, Container, Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assest/img/yk-2.png';
import navIcon1 from '../assest/img/nav-icon1.svg';
import navIcon2 from '../assest/img/nav-icon2.svg';
import navIcon3 from '../assest/img/nav-icon3.svg';
import navIcon4 from '../assest/img/github-mark.svg';
import { HashLink } from 'react-router-hash-link';



export const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  useEffect(() => {
    // Update active link based on current route
    if (location.pathname === '/blog') {
      setActiveLink('blog');
    } else {
      setActiveLink('home');
    }
  }, [location]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
                
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={HashLink} 
              to="/#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              to="/#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              to="/#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              to="/#experience" 
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/blog" 
              className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('blog')}
            >
              Blog
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yasiru-nisal/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/yasiru.nisal.98" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/yasiru_nisal__/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://github.com/Yasirunk9612" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="GitHub" />
              </a>
            </div>
            <HashLink to='/#connect'>
              <button className="vvd"><span>Let's Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}