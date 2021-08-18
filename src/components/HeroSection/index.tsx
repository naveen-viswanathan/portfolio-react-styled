import { HeroContainer, HeroBg, VideoBg, ArrowForward, ArrowRight, HeroBtnWrapper, HeroContent, HeroH1, HeroP } from './HeroElements'
import video from '../videos/video.mp4';
import { useState } from 'react';
import { Button } from '../Elements/ButtonElements';
 

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted>
                    <source src={video} type='video/mp4'></source>
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Naveen Viswanathan</HeroH1>
                <HeroP>Front-End Web Developer</HeroP>
            </HeroContent>
            <HeroBtnWrapper>
                <Button to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}>
                    Sign Up {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContainer>
    )
}

export default HeroSection;

