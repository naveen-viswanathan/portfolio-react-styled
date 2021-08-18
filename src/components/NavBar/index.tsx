import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NaveenLogo,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";


const NavBar = ({toggle}: {toggle: () => void}) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="hero" smooth duration={750} offset={-80}><NaveenLogo/></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth duration={1000} activeClass='active' spy={true}>About Myself</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills" smooth duration={1000} activeClass='active' spy={true}>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth duration={1000} activeClass='active' spy={true}>Projects</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="contact" smooth duration={1000} activeClass='active' spy={true}>Contact Me</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
