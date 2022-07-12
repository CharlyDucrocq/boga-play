import { CSSProperties, FC } from 'react';
import { Box, Button } from 'grommet';
import { useSpring, animated, useSprings, SpringValue, easings } from 'react-spring';
import { UseSpringProps } from '@react-spring/core/dist/declarations/src/hooks/useSpring';
import Cube from './cube';

interface DiceProps {
}


export const Dice: FC<DiceProps> = (props) => {
  const [fromAToB, allApi] = useSpring(() => ({
      from: {
        x: 500,
        y: 500,
        rotateX: -450,
        rotateY: 0,
        rotateZ: 45,
      },
      to: {
        x: 0,
        y: 100,
        rotateX: 360,
        rotateY: 0,
        rotateZ: 360,
      },
      config: {
        duration: 2000,
      }
    })
  )

  return (
    <Box>
      <Button onClick={() => {
        allApi.start(() => ({
          y: 20+fromAToB.y.get(),
          rotateY: 20+fromAToB.rotateY.get()
        }))
      }} label={'test'}/>
      <Cube style={{...fromAToB}}/>
    </Box>
  );
}

export default Dice;