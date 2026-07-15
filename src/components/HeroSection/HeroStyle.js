import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
  
  @media (max-width: 960px) {
    padding: 80px 16px;
  }
  @media (max-width: 640px) {
    padding: 60px 16px;
  }
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%);
`;

export const Blob1 = styled.div`
  position: absolute;
  top: 10%;
  left: 15%;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, ${({ theme }) => theme.glow} 0%, rgba(58, 134, 255, 0) 70%);
  border-radius: 50%;
  filter: blur(80px);
  animation: drift-blob-1 20s infinite alternate ease-in-out;
  opacity: 0.6;
`;

export const Blob2 = styled.div`
  position: absolute;
  bottom: 15%;
  right: 15%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, ${({ theme }) => theme.secondaryGlow} 0%, rgba(155, 93, 229, 0) 70%);
  border-radius: 50%;
  filter: blur(90px);
  animation: drift-blob-2 25s infinite alternate ease-in-out;
  opacity: 0.55;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1150px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 960px) {
    order: 2;
    align-items: center;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  backdrop-filter: blur(8px);
  border-radius: 50px;
  margin-bottom: 24px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
`;

export const BadgeDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10B981;
  animation: pulse-glow 2s infinite ease-in-out;
`;

export const BadgeText = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_secondary};
`;

export const Title = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 4.5rem;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  margin-bottom: 16px;
  letter-spacing: -2px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 3.5rem;
  }

  @media (max-width: 640px) {
    font-size: 2.8rem;
    letter-spacing: -1px;
  }
`;

export const NameText = styled.span`
  background: linear-gradient(225deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 4px 12px ${({ theme }) => theme.glow + '20'});
`;

export const TextLoop = styled.div`
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 24px;
  
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  width: 100%;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const PrimaryButton = styled.a`
  text-decoration: none;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  color: #ffffff;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  padding: 16px 36px;
  border-radius: 12px;
  box-shadow: 0px 8px 30px -5px ${({ theme }) => theme.glow};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 12px 35px -5px ${({ theme }) => theme.glow};
    filter: brightness(1.1);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 640px) {
    width: 90%;
    padding: 14px 28px;
  }
`;

export const SecondaryButton = styled.a`
  text-decoration: none;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  backdrop-filter: blur(8px);
  padding: 16px 36px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.06);
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: 0px 8px 25px -10px ${({ theme }) => theme.secondaryGlow};
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 640px) {
    width: 90%;
    padding: 14px 28px;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 40px;
  }
`;

export const ProfileCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  backdrop-filter: blur(12px);
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-5px) rotate(1deg);
    border-color: ${({ theme }) => theme.primary + '30'};
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 60%, rgba(11, 14, 20, 0.8) 100%);
    z-index: 1;
  }

  @media (max-width: 640px) {
    width: 250px;
    height: 250px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.08);
  }
`;

export const FloatingBadge = styled.div`
  position: absolute;
  background: rgba(21, 26, 35, 0.85);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  z-index: 5;
  animation: ${({ delay }) => delay % 2 === 0 ? 'float' : 'float-delayed'} 4s ease-in-out infinite;
  animation-delay: ${({ delay }) => `${delay * 0.5}s`};
  
  svg {
    font-size: 1.4rem;
    color: ${({ iconColor }) => iconColor || '#3A86FF'};
  }
  
  span {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.2px;
  }

  ${({ pos }) => pos === 1 && `
    top: -10px;
    left: -20px;
  `}
  ${({ pos }) => pos === 2 && `
    bottom: 30px;
    left: -40px;
  `}
  ${({ pos }) => pos === 3 && `
    top: 40px;
    right: -40px;
  `}
  ${({ pos }) => pos === 4 && `
    bottom: -15px;
    right: -10px;
  `}
  
  @media (max-width: 640px) {
    padding: 8px 12px;
    span {
      font-size: 0.75rem;
    }
    svg {
      font-size: 1.1rem;
    }
    
    ${({ pos }) => pos === 1 && `
      top: -15px;
      left: -10px;
    `}
    ${({ pos }) => pos === 2 && `
      bottom: 20px;
      left: -20px;
    `}
    ${({ pos }) => pos === 3 && `
      top: 30px;
      right: -20px;
    `}
    ${({ pos }) => pos === 4 && `
      bottom: -10px;
      right: -5px;
    `}
  }
`;

