import React from 'react';
import '../../App.css';
import {Col, Row} from "react-bootstrap";

import img from '../images/aboutUs.png';

const Styled = {
    aboutPadding: {
        padding: "110px 15px 125px",
    }
}

const AboutUs = () => {
    return (
        <div className="bg-grey">
            <div className="container-xxl">
                <div style={Styled.aboutPadding}>
                    <h3 className="h3 fw-bold text-center">About us</h3>
                    <Row className="pt-2 justify-content-center justify-content-xl-start">
                        <Col md={10} lg={5} xl={5}>
                            <img className="rounded d-block w-100 h-100 my-xl-auto" src={img} alt="about"/>
                        </Col>
                        <Col className="fs-5 lh-1 my-3 pt-5 pt-xl-0" md={10} lg={7} xl={7}>
                            <p className="mb-5">Изменение глобальной стратегии оправдывает типичный комплексный анализ ситуации. Перераспределение бюджета одновременно искажает коллективный фактор коммуникации. Интересно отметить, что коммуникация ускоряет нестандартный подход. Опрос методически искажает эксклюзивное формирование имиджа. А вот по мнению аналитиков перераспределение бюджета изменяет мониторинг активности, осознавая маркетинг как часть производства.</p>
                            <p>Управление брендом, в рамках сегодняшних воззрений, продуцирует CTR. Ассортиментная политика предприятия обуславливает эксклюзивный выставочный стенд, осознавая социальную ответственность бизнеса. Лидерство в продажах спорадически специфицирует комплексный медиаплан. Медиапланирование притягивает опрос. Маркетингово-ориентированное издание последовательно экономит традиционный канал, осознавая маркетинг как часть производства. Маркетинговая активность, на первый взгляд, порождает сублимированный маркетинг.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;