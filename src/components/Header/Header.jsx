import { useSelector } from 'react-redux';
import { BurgerButton } from '../../helperComponents/BurgerButton/BurgerButton';
import { LogOutBtn } from '../../helperComponents/LogOutBtn/LogOutBtn';
import { Logo } from '../../helperComponents/Logo/Logo';
import { UserBar } from '../../helperComponents/UserBar/UserBar';
import { UserNav } from '../../helperComponents/UserNav/UserNav';
import {
  HeaderContainer,
  HeaderWrap,
  Nav,
  UserBarWrapper,
  UserMenuBox,
} from './Header.styled';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { MobileMenu } from '../../helperComponents/MobileMenu/MobileMenu';
import { useState } from 'react';

// по ТЗ хедер на всих сторінках
// коли еррор === еррор передаєзначення в стор і лого змінюється
// якщо не авторизований прибрати нижній бордер
const borderBottomStyle = '1px solid rgba(239, 237, 232, 0.2)';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerBurgerButton = () => {
    setIsOpenMenu({ isOpen: !isOpenMenu });
  };

  return (
    <HeaderContainer
      style={{ borderBottom: isLoggedIn ? borderBottomStyle : 'none' }}
    >
      <HeaderWrap className="container">
        <Logo />

        {isLoggedIn && (
          <UserMenuBox>
            <Nav>
              <UserNav />
            </Nav>

            <UserBarWrapper>
              <UserBar />
              <LogOutBtn className="desktop" />
              <BurgerButton toggleMenu={handlerBurgerButton} />
            </UserBarWrapper>
          </UserMenuBox>
        )}
      </HeaderWrap>
      <MobileMenu isOpenMenu={isOpenMenu} />
    </HeaderContainer>
  );
};
