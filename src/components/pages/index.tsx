import { useState } from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <NavBar toggle={toggle}/>
          <HeroSection/>
          <InfoSection/>
        </>
    );
  }
