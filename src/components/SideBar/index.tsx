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
          <SideBarLink to="about" onClick={toggle}>About Myself</SideBarLink>
          <SideBarLink to="skills" onClick={toggle}>Skills</SideBarLink>
          <SideBarLink to="projects" onClick={toggle}>Projects</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="contact" onClick={toggle}>Contact Me</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
