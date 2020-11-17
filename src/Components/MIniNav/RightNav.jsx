import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Ul = styled.ul`
list-style: none;
  display: none;
  flex-flow: row nowrap;

  .link {
    padding: 18px 10px;
    color: #fff;
    text-decoration:none;
    border-bottom:1px solid;
   
    font-family: 'MuseoModerno', cursive; !important;
    font-size:1.1em;
  }
  .link:hover{
    background-color:rgb(79, 207, 20);
    color: rgb(8,8,8);
    font-size:1.1em;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: fit-content;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

  

  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link className="link" to={{/*!user*/} && '/login'}>Sign In</Link>
      <Link className="link" to="/orders"  >Your Orders </Link>
      <Link className="link" to="/checkout" >Check Out</Link>
      
    </Ul>
  )
}

export default RightNav
