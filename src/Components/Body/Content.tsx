import React from 'react';
import '../../App.css';
import {Col, Row} from "react-bootstrap";

const styled = {
    btn: {
        padding: "22px 115px",
    },

    title: {
        textTransform: "uppercase",
        fontSize: "68px",
    },

    text: {
        fontSize: "30px",
    },

    number: {
        fontSize: "18px",
        marginBottom: "45px",
        marginRight: "10px",
    },

    margin55: {
        margin: "32px 0 50px 0",
    }
}

const Content = () => {
    return (
        <div className="content-bg">
            <div className="container-xxl">
                <Row className="text-color px-3">
                    <Col md={7}>
                        <div>
                            <h1 className="fw-bold m-0" style={styled.title}>Technological equipment</h1>
                            <p className="mb-5" style={styled.text}>only we have the best offer in its category</p>
                        </div>
                        <a className="button fs-4 btnMore" style={styled.btn} href="#">More</a>
                    </Col>
                    <Col md={2} className="ms-auto me-2 p-0">
                        <p className="line1 d-flex justify-content-end fw-bold fs-2" style={styled.margin55}>01</p>
                        <p className="line2 d-flex justify-content-end fw-bold" style={styled.number}>02</p>
                        <p className="line2 d-flex justify-content-end fw-bold" style={styled.number}>03</p>
                        <p className="line2 d-flex justify-content-end fw-bold" style={styled.number}>04</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Content;