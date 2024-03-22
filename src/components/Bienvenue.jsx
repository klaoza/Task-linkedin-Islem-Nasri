import React, { useState } from 'react';
import './Bienvenue.css';

function Bienvenue({ imgUrl }) {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='bienvenue'>
            <div className='text'>
                <h1 className='title'>Bienvenue dans votre communauté professionnelle</h1>
                <div className='signin'>
                <p>E-mail ou téléphone</p>
                <br />
                <input type='text' />
                <br />
                <p>Mot de passe</p>
                <input 
                    type={showPassword ? "text" : "password"} 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                />
             
                <a onClick={togglePassword} className='aff'>
                    {showPassword ? "Cacher" : "Afficher"}
                </a>
                <br></br>
                <a href='#oubli' className='oubli'>Mot de passe oublié ?</a>
                <br></br>
                <button type='submit' id='identifier' >S'identifier</button>
                <br></br>
                <div className="line">
                    <hr />
                        <span> ou </span>
                    <hr />
                </div>
                <br></br>
                <a className='disclaimer'>En cliquant sur Continuer, vous acceptez   </a>
                    <a href="#conditions" className='cond'> les Conditions d’utilisation,</a>
                    <a href="Politique" className='pol'> la Politique de confidentialité </a>
                    <a className='disclaimer'>et la </a> <a href="Polrela" className='rel'>Politique relative aux cookies de LinkedIn.</a>
                    <br></br>
                <button type='submit' id="nouveau" >Nouveau sur LinkedIn ? S’inscrire</button>

                    </div>
            </div>
            <div className='photo'>
                <img src={imgUrl} alt="A MAN SITTING" />
            </div>
        </div>
    );
}

export default Bienvenue;
