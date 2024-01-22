import { useEffect } from 'react';
import { Logo } from '../../helperComponents/Logo/Logo';
import {
  ContentBox,
  Title,
  Text,
  Link,
  BackgroundColor,
  SectionWrapper,
  SectionContainer,
  LogoWrap,
  Container,
} from './ErrorPage.styled';
import { useDispatch } from 'react-redux';
import { setErrorPage } from '../../redux/errorPage/err-slice';

const ErrorPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setErrorPage(true));

    return () => {
      dispatch(setErrorPage(false));
    };
  }, [dispatch]);

  return (
    <>
      <SectionWrapper className="container section-wrapper">
        <BackgroundColor>
          <Container className="container">
            <LogoWrap>
              <Logo colorWhite="true" />
            </LogoWrap>
            <SectionContainer>
              <ContentBox>
                <Title>404</Title>
                <Text>
                  Sorry, you have reached a page that we could not find. It
                  seems that you are lost among the numbers and letters of our
                  virtual space. Perhaps this page went on vacation or decided
                  to disappear into another dimension. We apologize for this
                  inconvenience.
                </Text>

                <Link to="/">Go Home</Link>
              </ContentBox>
            </SectionContainer>
          </Container>
        </BackgroundColor>
      </SectionWrapper>
    </>
  );
};

export default ErrorPage;
