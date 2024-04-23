import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import img1 from '../images/categories-img1.svg';
import img2 from '../images/categories-img2.svg';
import img3 from '../images/categories-img3.svg';
import img4 from '../images/categories-img4.svg';

const styled = {
    bg: {
        backgroundColor: "#E8E8E8",
        padding: "105px 0 110px",
        marginTop: "-3px"
    },

    title: {
        fontSize: "48px",
        marginBottom: "42px",
    },

    img: {
        width: '6.5rem',
        marginTop: '-3px',
    }

}

const Categories = () => {
    return (
        <div style={styled.bg}>
            <div className="container-xxl">
                <div className="px-3 mx-1 ">
                    <h3 className="fw-bold text-center" style={styled.title}>Catalog categories</h3>
                    <Row className="gap-xl-0 gap-md-4 align-content-center mx-xl-0 mx-md-auto">
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <Card className="row" style={{width: '19rem', borderRadius: '10px'}}>
                                <Card.Img className="mx-auto" style={styled.img} variant="top" src={img1}/>
                                <Card.Body className="text-center mt-4 px-4 py-1" style={{minHeight: '95px'}}>
                                    <Card.Title className="fw-bold mb-4">Электронные компоненты</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <Card className="row" style={{width: '19rem', borderRadius: '10px'}}>
                                <Card.Img className="mx-auto" style={styled.img} variant="top" src={img2}/>
                                <Card.Body className="text-center mt-4 px-4 py-1" style={{minHeight: '95px'}}>
                                    <Card.Title className="fw-bold mb-4">Технологическое оборудование</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <Card className="row" style={{width: '19rem', borderRadius: '10px'}}>
                                <Card.Img className="mx-auto" style={styled.img} variant="top" src={img3}/>
                                <Card.Body className="text-center mt-4 px-4 py-1" style={{minHeight: '95px'}}>
                                    <Card.Title className="fw-bold mb-4">Запасные части оборудования</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <Card className="px-4 row" style={{width: '19rem', borderRadius: '10px'}}>
                                <Card.Img className="mx-auto" style={styled.img} variant="top" src={img4}/>
                                <Card.Body className="text-center mt-4 px-4 py-1" style={{minHeight: '95px'}}>
                                    <Card.Title className="fw-bold mb-4">Пуско-наладочные работы и сервис </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    )
        ;
};

export default Categories;