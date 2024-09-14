import {React}  from 'react';
import './IndexContact.css';
import { useNavigate } from 'react-router-dom';

const IndexContact = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact')
  }

  return (
    <div className='indexcontact-container'>
      <p>Escríbenos para recibir promociones de los productos Celuma.</p>
      <button className='indexcontact-button' onClick={() => handleButtonClick()}>
        Contáctanos
      </button>
    </div>
  );
}

export default IndexContact;