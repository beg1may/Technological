import React from 'react';
import '../../../App.css';
import {Form} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const Styled = {
    padding: {
        padding: "39px 32px 32px"
    },

    inputBg: {
        backgroundColor: "#E2E2E2"
    },

    textGrey: {
        color: "#ADACAC"
    },

    btnClose: {
        marginTop: "-100px",
        marginRight: "-20px",
    }
}

const ModalMain = ({active, setActive}) => {
    return (
        <div className={active ? "modalOpen active" : "modalOpen"} onClick={() => setActive(false)}>
            <div
                className="modal show"
                style={{display: 'block', position: 'initial'}}
            >
                <Modal.Dialog>
                    <div className="modalBlock rounded-3 border-white">
                        <div className="bgColor" style={Styled.padding}>
                            <Modal.Header className="border-bottom-0">
                                <Modal.Title className="text-center text-color">Заполните информацию и наш менеджер
                                    вамперезвонит</Modal.Title>
                                <button type="button" className="btn-close" style={Styled.btnClose}></button>
                            </Modal.Header>

                            <Modal.Body className="pb-0">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="name"
                                            placeholder="Ваше имя"
                                            autoFocus
                                            style={Styled.inputBg}
                                            className="py-3 ps-4 text-black rounded-2"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="tel"
                                            placeholder="Ваш телефон"
                                            autoFocus
                                            style={Styled.inputBg}
                                            className="py-3 ps-4 text-black rounded-2"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Ваш e-mail"
                                            autoFocus
                                            style={Styled.inputBg}
                                            className="py-3 ps-4 text-black rounded-2"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Ваше сообщение"
                                            rows={3}
                                            style={Styled.inputBg}
                                            className="py-3 ps-4 text-black rounded-2"
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>

                            <Modal.Footer className="border-top-0 pt-0">
                                <a className="blue-bg text-color p-3 w-100 text-center text-decoration-underline rounded-2"
                                   href="src/Components/Body/Modal/ModalMain#">Отправить</a>
                                <small className="text-center" style={Styled.textGrey}>Нажимая на кнопку, вы даете свое
                                    согласие на обработку персональных
                                    данных</small>
                            </Modal.Footer>
                        </div>
                    </div>
                </Modal.Dialog>
            </div>
        </div>
    );
};

export default ModalMain;