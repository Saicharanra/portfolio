import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.bg === '#0B0E14' ? 'rgba(11, 14, 20, 0.75)' : 'rgba(250, 250, 250, 0.75)'};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all 0.3s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.5px;
  cursor: pointer;
  
  svg {
    color: ${({ theme }) => theme.primary};
    filter: drop-shadow(0px 0px 8px ${({ theme }) => theme.primary});
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(15deg) scale(1.1);
  }
`;

export const Span = styled.span`
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    background: linear-gradient(225deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
    padding: 6px 0;

    &:hover {
      color: ${({ theme }) => theme.text_primary};
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background: linear-gradient(90deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
      transition: all 0.3s ease;
      transform: translateX(-50%);
      border-radius: 2px;
      box-shadow: 0 0 8px ${({ theme }) => theme.primary};
    }

    &:hover::after, &.active::after {
      width: 100%;
    }
    
    &.active {
      color: ${({ theme }) => theme.text_primary};
    }
`;

export const GitHubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.glassBorder};
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  justify-content: center;
  display: flex;
  align-items: center;
  height: 42px;
  border-radius: 20px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 0 22px;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0px 4px 20px -3px ${({ theme }) => theme.glow};
    background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
    color: #ffffff;
  }
  
  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 768px) { 
    font-size: 14px;
    padding: 0 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    transition: all 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 24px 40px;
    background: ${({ theme }) => theme.bg === '#0B0E14' ? 'rgba(11, 14, 20, 0.96)' : 'rgba(250, 250, 250, 0.96)'};
    backdrop-filter: blur(16px);
    border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-120%)')};
    border-radius: 0 0 24px 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    z-index: 1000;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  padding: 4px 0;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after, &.active::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.text_primary};
  }
`;