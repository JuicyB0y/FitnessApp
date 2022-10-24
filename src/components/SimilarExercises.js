import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import './similarExercises.css';
import Loader from './Loader';

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <div className="similar-wrapper">
      <h3 className="similar-header">Exercises that target the same muscle group</h3>
      <div className="similar-stack">
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </div>
      <h3 className="similar-secondheader">Exercises that target the same muscle group</h3>
      <div className="similar-stack">
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </div>
    </div>
  );
};

export default SimilarExercises;
