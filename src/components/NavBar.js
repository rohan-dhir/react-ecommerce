import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">
                    {/* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}

                    {/* Navigation */}
                    
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to='/' className="nav-link">
                                Products
                            </Link>
                        </li>
                    </ul>
                    <Link to='/cart' className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                            My Cart
                            </span>
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainWhite);
.nav-link {
    color:var(--mainDark) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}

.nav-link:hover {
    text-decoration: underline;
    text-decoration-color: var(--grey);
    
}

.navbar-brand {
    width: 5rem;
    height: 5rem;
}

`;