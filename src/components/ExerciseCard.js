import React from 'react';
import { Link } from 'react-router-dom';
import './exerciseCard.css';

const ExerciseCard = ({ item }) => {
  return (
    <Link className="exercise-card-link" to={`/exercise/${item.id}`}>
      <img src={item.gifUrl} alt={item.name} loading="lazy" />
      <div className="exercise-card-buttons">
        <button className="exercise-card-body">{item.bodyPart}</button>
        <button className="exercise-card-target">{item.target}</button>
      </div>
      <p className="exercise-card-name">{item.name}</p>
    </Link>
  );
};

export default ExerciseCard;
