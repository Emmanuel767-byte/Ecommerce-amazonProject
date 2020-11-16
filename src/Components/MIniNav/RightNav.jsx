import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Ul = styled.ul`
list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .link {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

  .link {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link className="link" to={{/*!user*/} && '/login'}>Sign In</Link>
      <Link className="link" to="/orders"  >Your Orders </Link>
      <Link className="link" to="/checkout" >Check Out</Link>
      <Link className="link" href="#">Nav2</Link>
    </Ul>
  )
}

export default RightNav
