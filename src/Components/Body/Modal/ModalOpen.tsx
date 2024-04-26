import React, {useState} from 'react';
import ModalMain from "./ModalMain";

const ModalOpen = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="col-lg-3 col-xl-4 p-0">
            <button className="blue-bg text-color p-3 w-100 text-center rounded-2 border-0" onClick={() => setModalActive(true)}>Talk to Sales</button>
            <ModalMain active={modalActive} setAcrive={setModalActive} />
        </div>
    );
};

export default ModalOpen;