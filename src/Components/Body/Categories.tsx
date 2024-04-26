import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import '../../App.css';

import img1 from '../images/categories-img1.svg';
import img2 from '../images/categories-img2.svg';
import img3 from '../images/categories-img3.svg';
import img4 from '../images/categories-img4.svg';

const styled = {
    bg: {
        padding: "105px 0 110px",
        marginTop: "-3px"
    },

    img: {
        width: '6.5rem',
        marginTop: '-3px',
    }

}

const Categories = () => {
    return (
        <div className="bg-grey" style={styled.bg}>
            <div className="container-xxl">
                <div className="px-3 mx-1 ">
                    <h3 className="fw-bold text-center h3">Catalog categories</h3>
                    <Row className="row-gap-xl-0 row-gap-md-5 justify-content-md-center fs-5">
                        <Col md={5} lg={4} xl={3}>
                            <Card className="row" style={{width: '18.5rem', borderRadius: '10px'}}>
                                <Card.Img className="mx-auto" style={styled.img} variant="top" src={img1}/>
                                <Card.Body className="text-center mt-4 px-4 py-1" style={{minHeight: '95px'}}>
                                    <Card.Text className="fw-bold mb-4">Электронные компоненты</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5} lg={4} xl={3}>
                            <Card className="row" style={{width: '18.5rem', borderRadius: '10px'}}>
                                <Card.Img className="mx-auto" style={styled.img} variant="top" src={img2}/>
                                <Card.Body className="text-center mt-4 px-4 py-1" style={{minHeight: '95px'}}>
                                    <Card.Text className="fw-bold mb-4">Технологическое оборудование</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5} lg={4} xl={3}>
                            <Card className="row" style={{width: '18.5rem', borderRadius: '10px'}}>
                                <Card.Img className="mx-auto" style={styled.img} variant="top" src={img3}/>
                                <Card.Body className="text-center mt-4 px-4 py-1" style={{minHeight: '95px'}}>
                                    <Card.Text className="fw-bold mb-4">Запасные части оборудования</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5} lg={4} xl={3}>
                            <Card className="row" style={{width: '18.5rem', borderRadius: '10px'}}>
                                <Card.Img className="mx-auto" style={styled.img} variant="top" src={img4}/>
                                <Card.Body className="text-center mt-4 px-4 py-1" style={{minHeight: '95px'}}>
                                    <Card.Text className="fw-bold mb-4">Пуско-наладочные работы и сервис</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
)
;
};

export default Categories;