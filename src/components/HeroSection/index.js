import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { 
  HeroContainer, 
  HeroBg, 
  GridOverlay, 
  Blob1, 
  Blob2, 
  HeroLeftContainer, 
  Badge, 
  BadgeDot, 
  BadgeText, 
  Title, 
  NameText, 
  TextLoop, 
  Span, 
  SubTitle, 
  CTAContainer, 
  PrimaryButton, 
  SecondaryButton, 
  HeroRightContainer, 
  ProfileCard, 
  ImgContainer, 
  Img, 
  FloatingBadge, 
  HeroInnerContainer 
} from './HeroStyle'
import sai from '../../images/sai.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <GridOverlay />
                    <Blob1 />
                    <Blob2 />
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Badge>
                            <BadgeDot />
                            <BadgeText>Available for Opportunities</BadgeText>
                        </Badge>
                        <Title>
                            Hi, I am <br /> 
                            <NameText>{Bio.name}</NameText>
                        </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <CTAContainer>
                            <PrimaryButton href={Bio.resume} target='display'>
                                Check Resume
                            </PrimaryButton>
                            <SecondaryButton href="#contact">
                                Let's Connect
                            </SecondaryButton>
                        </CTAContainer>
                    </HeroLeftContainer>

                    <HeroRightContainer>
                        <ProfileCard>
                            <FloatingBadge pos={1} delay={0} iconColor="#61DAFB">
                                <FaReact />
                                <span>React</span>
                            </FloatingBadge>
                            <FloatingBadge pos={2} delay={1} iconColor="#339933">
                                <FaNodeJs />
                                <span>Node.js</span>
                            </FloatingBadge>
                            <FloatingBadge pos={3} delay={2} iconColor="#3776AB">
                                <FaPython />
                                <span>Python</span>
                            </FloatingBadge>
                            <FloatingBadge pos={4} delay={3} iconColor="#FF9900">
                                <FaAws />
                                <span>AWS</span>
                            </FloatingBadge>
                            
                            <ImgContainer>
                                <Img src={sai} alt="V. Sai Charan profile" />
                            </ImgContainer>
                        </ProfileCard>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection