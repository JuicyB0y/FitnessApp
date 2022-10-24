import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import './detail.css';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];
  return (
    <div className="detail-wrapper">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="detail-description">
        <h3 className="detail-name">{name}</h3>
        <h5 className="detail-text">
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </h5>
        {extraDetail.map((item) => (
          <div className="detail-extra" key={item.name}>
            <button className="detail-button">
              <div className="detail-iconWrap">
                <img className="detail-icon" src={item.icon} alt={bodyPart} />
              </div>
            </button>
            <p className="detail-iconDescr">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
