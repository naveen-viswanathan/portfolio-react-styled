import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Naveen</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
