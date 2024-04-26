import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import '../../App.css';

import img1 from '../images/newsCard-img1.png';
import img2 from '../images/newsCard-img2.png';
import img3 from '../images/newsCard-img3.png';
import icon from '../images/arrow-icon.svg';

const Style = {
    container: {
        padding: "75px 12px 75px",
    },

    bg: {
        background: "white",
        borderRadius: "8px",
    },

    text: {
       marginBottom: "2rem"
    },

    button: {
        paddingLeft: "28px",
        paddingRight: "28px"
    },

    rowMargin: {
        marginBottom: "79px",
    }
}

const NewsCard = () => {
    return (
        <div className="container-xxl">
            <div style={Style.container}>
                <h3 className="h3 fw-bold text-center">News</h3>
                <Row
                    className="row-gap-4 gap-xl-0 justify-content-center"
                     style={Style.rowMargin}
                >
                    <Col md={7} lg={5} xl={4}>
                        <Card className="py-3 px-4 bg-grey w-100">
                            <Card.Img src={img1}/>
                            <Card.Body className="pb-0 pt-4 px-1 mt-2">
                                <Card.Title className="fw-bold">Изменение глобальной стратегии оправдывает
                                    типичный</Card.Title>
                                <Card.Text style={Style.text}>
                                    <small>
                                        Изменение глобальной стратегии оправдывает типичный комплексный анализ ситуации.
                                        Перераспределение бюджета одновременно искажает коллективный фактор коммуникации.
                                        <br/>Интересно отметить, что коммуникация ускоряет нестандартный подход. Опрос
                                        методически искажает эксклюзивный формирование
                                    </small>
                                </Card.Text>
                                <Card.Footer
                                    className="border-0 pb-1 transparent-bg d-flex d-flex justify-content-between p-0">
                                    <small className="py-1 px-2" style={Style.bg}>20.04.24</small>
                                    <a className="button py-1 btnMore" style={Style.button} href="#">
                                        More
                                        <img className="mb-1 ms-1" src={icon} alt="icon"/>
                                    </a>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7} lg={5} xl={4}>
                        <Card className="py-3 px-4 bg-grey">
                            <Card.Img src={img2}/>
                            <Card.Body className="pb-0 pt-4 px-1 mt-2">
                                <Card.Title className="fw-bold">Изменение глобальной стратегии оправдывает
                                    типичный</Card.Title>
                                <Card.Text style={Style.text}>
                                    <small>
                                        Изменение глобальной стратегии оправдывает типичный комплексный анализ ситуации.
                                        Перераспределение бюджета одновременно искажает коллективный фактор коммуникации.
                                        <br/>Интересно отметить, что коммуникация ускоряет нестандартный подход. Опрос
                                        методически искажает эксклюзивный формирование
                                    </small>
                                </Card.Text>
                                <Card.Footer
                                    className="border-0 pb-1 transparent-bg d-flex d-flex justify-content-between p-0">
                                    <small className="py-1 px-2" style={Style.bg}>20.04.24</small>
                                    <a className="button px-4 py-1 btnMore" style={Style.button} href="#">
                                        More
                                        <img className="mb-1 ms-1" src={icon} alt="icon"/>
                                    </a>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7} lg={5} xl={4}>
                        <Card className="py-3 px-4 bg-grey">
                            <Card.Img src={img3}/>
                            <Card.Body className="pb-0 pt-4 px-1 mt-2">
                                <Card.Title className="fw-bold">Изменение глобальной стратегии оправдывает
                                    типичный</Card.Title>
                                <Card.Text style={Style.text}>
                                    <small>
                                        Изменение глобальной стратегии оправдывает типичный комплексный анализ ситуации.
                                        Перераспределение бюджета одновременно искажает коллективный фактор коммуникации.
                                        <br/>Интересно отметить, что коммуникация ускоряет нестандартный подход. Опрос
                                        методически искажает эксклюзивный формирование
                                    </small>
                                </Card.Text>
                                <Card.Footer
                                    className="border-0 pb-1 transparent-bg d-flex d-flex justify-content-between p-0"
                                >
                                    <small className="py-1 px-2" style={Style.bg}>20.04.24</small>
                                    <a className="button px-4 py-1 btnMore" style={Style.button} href="#">
                                        More
                                        <img className="mb-1 ms-1" src={icon} alt="icon"/>
                                    </a>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <a className="btn btn-outline-dark fs-4 d-block mx-auto col-3 py-3 btnNews" href="#">All news</a>
            </div>
        </div>
    );
};

export default NewsCard;