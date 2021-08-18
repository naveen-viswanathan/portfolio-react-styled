import React from "react";
import {
  Icon,
  CloseIcon,
  SidebarContainer,
  SideBarLink,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap,
  SideBarMenu,
} from "./SideBarElements";

const SideBar = ({isOpen, toggle}: {isOpen: boolean, toggle: () => void}) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="discover">Discover</SideBarLink>
          <SideBarLink to="services">Services</SideBarLink>
          <SideBarLink to="signup">Signup</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
