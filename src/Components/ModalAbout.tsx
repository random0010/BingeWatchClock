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
    }, [props])
    
    const handleCancel = () => {
        setVisibility(false);
        props.setVisibility(false);
    };

    return (
        <Modal
            title="À propos"
            visible={visibility}
            onCancel={handleCancel}
            footer={<><Button>Contacter le développeur</Button><Button onClick={() => handleCancel()}>Fermer</Button></>}
            >
            <div className="container-about">
                <p className="app-name"><i className="fas fa-stopwatch"></i>&nbsp;&nbsp;<b>BingeWatchClock</b></p>
                <div>
                    <p><b>Version :</b> 1.0.0</p>
                    <p><b>Build :</b> jeudi 19 août 2020</p>
                    <p><b>Base de données :</b> themoviedb</p>
                    <p className="data-storage">L'application ne stocke aucune de vos données d'utilisation !</p>
                </div>
                <i className="copyright">© 2020 Louis Bil, All rights reserved</i>
            </div>
        </Modal>
    );
};

export default ModalAbout;
