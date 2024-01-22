import {
  ExerciseItem,
  ItemTopBloc,
  Workout,
  ArrowIcon,
  StartBtnWrapper,
  StartBtn,
  ExerciseTitleWrapper,
  FigureIcon,
  ExerciseTitle,
  TargetsList,
  TargetsListItem,
  TargetsListTitle,
  TargetsListText,
} from '../ExercisesItem/ExercisesItem.styled';
import sprite from '../../assets/sprite.svg';

export const ExercisesItem = ({
  bodyPart,
  burnedCalories,
  equipment,
  gifUrl,
  name,
  target,
  time,
  _id,
}) => {
  return (
    <ExerciseItem>
      <ItemTopBloc>
        <Workout>WORKOUT</Workout>
        <StartBtnWrapper>
          <StartBtn>Start</StartBtn>
          <ArrowIcon>
            <use href={`${sprite}#icon-arrow`}></use>
          </ArrowIcon>
        </StartBtnWrapper>
      </ItemTopBloc>
      <ExerciseTitleWrapper>
        <FigureIcon>
          <use
            href={`${sprite}#icon-running-stick-figure-svgrepo-com-1-1`}
          ></use>
        </FigureIcon>
        <ExerciseTitle>{name}</ExerciseTitle>
      </ExerciseTitleWrapper>
      <TargetsList>
        <TargetsListItem>
          <TargetsListTitle>Burned calories:</TargetsListTitle>
          <TargetsListText>{burnedCalories}</TargetsListText>
        </TargetsListItem>
        <TargetsListItem>
          <TargetsListTitle>Body part:</TargetsListTitle>
          <TargetsListText>{bodyPart}</TargetsListText>
        </TargetsListItem>
        <TargetsListItem>
          <TargetsListTitle>Target:</TargetsListTitle>
          <TargetsListText>{target}</TargetsListText>
        </TargetsListItem>
      </TargetsList>
    </ExerciseItem>
  );
};
