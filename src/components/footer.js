import React from 'react';
import styled from 'styled-components';

const Navigation = styled.footer`
  width: 100%;
  background: #34343a;
  position: absolute;
  padding: 10px 0;
  bottom: 0;
  a,
  span {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 5px 0;
    list-style: none;
    li {
      font-size: 14px;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 12px;
  color: white;
`;

const Footer = () => {
  return (
    <Navigation>
      <Copyright>
        © Copyright 2020 - Made with{' '}
        <span role='img' aria-label='Love Heart' style={{color: 'red', padding: '0 0 0 4px'}}>
          ❤️
        </span>{' '}
        by{' '}
        <a href='https://www.twitter.com/johnnyxbell' rel='noopener noreferrer' target='_blank'>
          @johnnyxbell
        </a>
      </Copyright>
    </Navigation>
  );
};

export default Footer;
