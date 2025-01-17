import styled from '@emotion/styled';
import '../../index.css';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 80px;

  @media screen and (min-width: 375px) {
    width: 375px; /* Добавлено из media query 375px в index.css */
  }

  @media screen and (min-width: 768px) {
    padding-top: 136px;
    padding: 0 32px; /* Добавлено из media query 768px в index.css */
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px; /* Добавлено из media query 1440px в index.css */
    padding: 0 96px;
  }
`;

export const PageTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: var(--white);
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: end;
    margin-left: 0;
  }
`;

export const WrapDaySwitcher = styled.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;
export const MobileDaySwitch = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`;
export const NotMobileDaySwitch = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
    align-items: normal;
  }
`;

export const InfoText = styled.p`
  /* font-family: Roboto, sans-serif; */
  margin-left: 8px;
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  letter-spacing: 0;
  color: var(--white);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const WrapInfoText = styled.div`
  max-width: 335px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    max-width: 593px;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`;

export const WrapDashBoard = styled.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`;

export const WrapTableBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 826px;
    margin: 0;
  }
`;

export const WrapMainBlock = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`;
