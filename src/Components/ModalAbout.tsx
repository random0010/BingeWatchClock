import React, { FunctionComponent, useState, useEffect } from "react";
import { Modal, Button } from 'antd';

interface IModalAbout {
    visibility: boolean,
    setVisibility: (visibility: boolean) => void
}

const ModalAbout: FunctionComponent<IModalAbout> = (props) => {
  
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        if(props.visibility === true){
            props.setVisibility(true);
            setVisibility(true);
        }
    })
    
    const handleCancel = () => {
        setVisibility(false);
        props.setVisibility(false);
    };

    return (
        <Modal
            title="Basic Modal"
            visible={visibility}
            onCancel={handleCancel}
            footer={<Button onClick={() => handleCancel()}>Fermer</Button>}
            >
            <p>cc</p>
        </Modal>
    );
};

export default ModalAbout;
