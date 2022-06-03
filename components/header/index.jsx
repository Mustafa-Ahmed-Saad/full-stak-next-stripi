import React from 'react';
import styled from '@emotion/styled';
import { rem } from 'polished';
import Navigation from '../navigation';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import changeNavColor from '../../redux/navegation/nav.action';

const Header = ({ isDark }) => {
  const dispatch = useDispatch();

  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <div className="cont-logo-navegation">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/images/logo.png" alt="mylogo" />
              </a>
            </Link>
            <span className="logo-text">logo text</span>
          </div>

          <Navigation />

          <button
            onClick={() => {
              dispatch(changeNavColor('#fff'));
            }}
            className="change-color"
          >
            change color
          </button>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  /* background-color: ${(props) => props.theme.colors.primary}; */
  background-color: ${(props) => (props.isDark ? '#000' : '#efefef')};

  .change-color {
    color: #4c9ee3;
  }

  .cont-logo-navegation {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
      }

      .logo-text {
        color: ${(props) => (props.isDark ? 'wheat' : '#333333')};
        font-weight: bold;
        font-size: ${rem(20)};
        margin-left: 20px;
      }
    }
  }
`;

export default Header;
