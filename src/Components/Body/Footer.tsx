import React from 'react';
import {Col, Row} from "react-bootstrap";
import '../../App.css';

import logo from '../images/logo.png';
import icon from '../images/location-icon.svg';

const Styled = {
    footerText: {
        color: "#BDBDBD",
        margin: "0px",
    },

    tel: {
        maxWidth: "150px",
    }
}

const Footer = () => {
    return (
        <div className="bg-footer">
            <div className="container-xxl">
                <div className="py-3 text-color px-3">
                    <Row>
                        <Col className="py-4" xl={12}>
                            <Row className="justify-content-md-center">
                                <Col className="align-self-md-center mb-md-5 mb-lg-0" md={4} xl={3}>
                                    <img src={logo}/>
                                </Col>
                                <Col lg={8} xl={9}>
                                    <Row className="justify-content-md-center justify-content-xl-between">
                                        <Col className="ms-md-0 ms-xl-5 p-0 pe-2" md={4} lg={4} xl={3}>
                                            <Col md={8}>
                                                <a className="d-block btn btn-secondary transparent-bg rounded-pill text-uppercase pt-2 mb-2"
                                                   href="#">
                                                    <img className="pe-2 pb-1" src={icon}/>
                                                    Адрес
                                                </a>
                                            </Col>
                                            <p style={Styled.footerText}>ул. Московская 25б пом 458</p>
                                        </Col>
                                        <Col className="ms-md-0 ms-xl-5 ps-md-0 ps-xl-5 pe-md-0" md={3} lg={4} xl={4}>
                                                <a className="d-block align-self-end btn btn-secondary transparent-bg rounded-pill text-uppercase pt-2 mb-2 ms-md-0 ms-xl-5" style={Styled.tel}
                                                   href="#">
                                                    <img className="pe-2 pb-1" src={icon}/>
                                                    Телефон
                                                </a>
                                            <p className="ms-md-0 ms-xl-5" style={Styled.footerText}>375 (29) 222 33 33</p>
                                        </Col>
                                        <Col className="ms-md-0 ms-xl-5 ps-md-0 ps-xl-5 pe-0" md={3} lg={4} xl={3}>
                                            <Col className="ms-md-0 ms-xl-5" md={9}>
                                                <a className="d-block btn btn-secondary transparent-bg rounded-pill text-uppercase pt-2 mb-2"
                                                   href="#">
                                                    <img className="pe-2 pb-1" src={icon}/>
                                                    e-mail
                                                </a>
                                            </Col>
                                            <p className="ms-md-0 ms-xl-5" style={Styled.footerText}>fvrjrvrjn@mail.ru</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <p className="mt-md-3 mt-lg-1 mb-0 text-md-center text-lg-start">С нами легко работать!</p>
                            </Row>
                        </Col>
                        <hr/>
                        <Col xl={12}>
                            <Row className="mb-3">
                                <Col md={4}>
                                    <p className="text-md-end text-lg-start" style={Styled.footerText}>Sitemap</p>
                                </Col>
                                <Col md={4}>
                                    <p className="text-center" style={Styled.footerText}>Copyright 2023</p>
                                </Col>
                                <Col md={4}>
                                    <p className="text-md-start text-lg-end" style={Styled.footerText}>Privacy
                                        Policy</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Footer;