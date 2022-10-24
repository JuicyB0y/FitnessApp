import React, { useContext } from 'react';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div className="scroll-div" key={item.id || item} itemId={item.id || item} title={item.id || item}>
          {isBodyParts ? (
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          ) : (
            <ExerciseCard item={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
