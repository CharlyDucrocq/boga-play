import { CSSProperties, FC } from 'react';
import { Box, Button } from 'grommet';
import { useSpring, animated, useSprings, SpringValue } from 'react-spring';
import { UseSpringProps } from '@react-spring/core/dist/declarations/src/hooks/useSpring';
import Cube from './cube';

interface DiceProps {
}


export const Dice: FC<DiceProps> = (props) => {
  return (
    <Box>
      <Cube/>
    </Box>
  );
}

export default Dice;