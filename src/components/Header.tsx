import * as React from 'react';
import { Navbar, Container } from "react-bootstrap"

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React TypeScript Bootstrap</Navbar.Brand>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;
