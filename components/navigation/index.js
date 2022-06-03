import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navegation = () => {
  const { pathname } = useRouter();

  return (
    <NavigationStyled>
      <ul>
        <li>
          <Link href="/about">
            <a className={pathname === '/about' ? 'active' : ''}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={pathname === '/contact' ? 'active' : ''}>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/movies">
            <a className={pathname === '/movies' ? 'active' : ''}>All Movies</a>
          </Link>
        </li>
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  color: wheat;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
      color: #4c9ee3;

      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: #ef6800;
      }
    }
  }
`;

export default Navegation;
