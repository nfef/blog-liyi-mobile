import React, { useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ReactComponent as SettingImage} from '../../../assets/images/settings.svg';
import './root.style.scss';

const RootPage = () => {

    const [host, setHost] = useState("");
    const [inputVal, setInputVal] = useState("");

    const navigate = useNavigate();

    const onValueChanged = (e) => {
        console.log(" ", inputVal);
        setInputVal(e.target.value);
    }

    const setHostname = () => {
        localStorage.setItem("hostname", inputVal);
        navigate('home');
    }

    useEffect(() => {

        if(localStorage.getItem("hostname") !== null){
            navigate('home');
        }
        
    }, [navigate])

    return (
        <div className="liyi">
            <div className="liyi__settings">
                {/* <SettingImage /> */}
            </div>
            <div className="liyi__note">
                <p>Veuillez saisir l'adresse  du serveur <br/>
                exemple: <strong>http://192.168.8.104</strong> <br/>
                puis cliquer sur le bouton valider
                </p>
            </div>
            <div className="liyi__form">
                <input 
                    type="text"
                    value={inputVal}
                    onChange={onValueChanged}

                />
                <button
                    type="button"
                    onClick={setHostname}
                >
                    Valider
                </button>
            </div>
            
        </div>
    )
}

export default RootPage;
