import React from 'react';
import Chest from '../exercisesJSON/ChestData';

const ChestExercises = (props) => {
  return props.data.exercises.map((exercise) => {
    return (
      <div>
        <p>{exercise.name}</p>
        <p>Starting Position</p><img src={exercise.images[0]} />
        <p>Ending Position</p><img src={exercise.images[1]} />
      </div>
    )
  });
};

export default ChestExercises;

