import React, {useState} from 'react';
import '../../App.css';
import {
    Dropdown,
    Nav,
    Navbar,
    Form, Modal, Col, Row
} from "react-bootstrap";

import logo from '../images/logo.png';
import search from '../images/search-icon.svg';
import tel from '../images/tel-icon.svg';
import ModalOpen from "./Modal/ModalOpen";

const Styled = {
    btn: {
        padding: "8px 15px",
    },

    blue: {
        backgroundColor: "#00A2ED"
    },

    containerPadding: {
        padding: "18px 0 19px",
    }
}
const NavbarHeader = () => {
    return (
        <header className="header-bg" style={Styled.containerPadding}>
            <div className="container-xxl">
                <div className="px-4">
                    <Navbar className="p-0">
                        <Nav className="row">
                            <Col lg={10} xl={8}>
                                <Row className="justify-content-center">
                                    <div className="col-lg-3 col-xl-3 me-5">
                                        <img
                                            src={logo}
                                            alt="logo"
                                        />
                                    </div>
                                    <Nav.Link className="pt-4 ps-5 ms-3 col-lg-3 col-xl-2 me-4" href="#">
                                        <Dropdown>
                                            <Dropdown.Toggle className="navMenu transparent-bg border-0 p-0">
                                                About us
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="rounded-0 border-0" style={Styled.blue}>
                                                <Dropdown.Item className="text-color" href="#">
                                                    Электронные компоненты
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-color" href="#">
                                                    Технологическое оборудование
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-color" href="#">
                                                    Запасные части технологического оборудования
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-color" href="#">
                                                    Пуско-наладочные работы
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav.Link>
                                    <Nav.Link className="pt-4 col-lg-3 col-xl-3" href="#">
                                        <Dropdown>
                                            <Dropdown.Toggle className="navMenu transparent-bg border-0 p-0">
                                                Products and service
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="rounded-0 border-0" style={Styled.blue}>
                                                <Dropdown.Item className="text-color" href="#">
                                                    Электронные компоненты
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-color" href="#">
                                                    Технологическое оборудование
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-color" href="#">
                                                    Запасные части технологического оборудования
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-color" href="#">
                                                    Пуско-наладочные работы
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav.Link>
                                    <Nav.Link className="text-color pt-4 col-lg-3 col-xl-1" href="#">Contacts</Nav.Link>
                                </Row>
                            </Col>
                            <Col lg={10} xl={4}>
                                <Row className="justify-content-center">
                                    <Nav.Link className="pt-4 col-xl-1 p-0 me-2" href="#">
                                        <Dropdown>
                                            <Dropdown.Toggle className="navMenu transparent-bg border-0 p-0">
                                                <img src={search}/>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="rounded-0 border-0" style={Styled.blue}>
                                                <Dropdown.Item>
                                                    <Form.Control as="input" rows={3}/>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav.Link>
                                    <Nav.Link className="text-color p-0 pt-4 col-lg-3 col-xl-5" href="#"><img className="pe-2" src={tel}/>7
                                        (915) 777 77 77</Nav.Link>
                                    <ModalOpen />
                                    <Nav.Link className="text-color p-0 pt-4 ps-1 col" href="#">
                                        <Dropdown>
                                            <Dropdown.Toggle className="navMenu transparent-bg border-0 p-0">
                                                En
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="rounded-0 border-0" style={Styled.blue}>
                                                <Dropdown.Item>
                                                    En
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    En
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav.Link>
                                </Row>
                            </Col>
                        </Nav>
                    </Navbar>
                </div>

            </div>
        </header>
    );
};

export default NavbarHeader;