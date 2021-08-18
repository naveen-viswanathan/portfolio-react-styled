import { InfoContainer, InfoWrapper, SectionHeading } from './InfoElements'
const InfoSection = () => {
    return (
        <>
           <InfoContainer id="about">
               <InfoWrapper>
                <SectionHeading>About Myself</SectionHeading>
               </InfoWrapper>
            </InfoContainer> 
           <InfoContainer id="skills">
                <InfoWrapper>
                    <SectionHeading>Skills</SectionHeading>
                </InfoWrapper>
            </InfoContainer>
            <InfoContainer id="projects">
                <InfoWrapper>
                    <SectionHeading>Projects</SectionHeading>
                </InfoWrapper>
            </InfoContainer>
            <InfoContainer id="contact">
                <InfoWrapper>
                    <SectionHeading>Contact Me</SectionHeading>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
