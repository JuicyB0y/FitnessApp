import React from 'react';
import Icon from '../assets/icons/gym.png';
import './bodyPart.css';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const onCLickBtn = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };
  return (
    <button onClick={onCLickBtn} className={`body-wrapper ${item === bodyPart ? 'bodyActive' : ''}`}>
      <div className="body-iconWrapper">
        <img src={Icon} alt="dumbbell" className="body-icon" />
      </div>
      <p className="body-text">{item}</p>
    </button>
  );
};

export default BodyPart;
