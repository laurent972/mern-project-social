import React from 'react';
import Log from "../components/Log"

const Profil = () => {
    return (
        <div>
            <div className="profil-page">
                <div className="log-container">
                    <Log signin={false} signup={true} />
                    <div className="img-container">
                        <img src="./img/log.svg" alt="tito" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profil;