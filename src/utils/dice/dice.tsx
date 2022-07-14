import { FC } from 'react';
import { Box, Button } from 'grommet';
import { useSpring, animated, easings } from 'react-spring';
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
  const [bounce, bounceApi] = useSpring(() => ({
      from: {
        x: 500,
        z: 1000,
        perspective: 1000
      },
      to: {
        x: 0,
        z: 0,
        perspective: 1000
      },
      config: {
        duration: 2000,
        easing: easings.easeOutBounce,
      }
    })
  )

  const valueGot = Math.floor(Math.random()*6);
  console.debug('DICE - valueGot:', valueGot)
  const path = './imgs/simple'
  const faces = [
    require(path+'/face_1.png'),
    require(path+'/face_2.png'),
    require(path+'/face_3.png'),
    require(path+'/face_6.png'),
    require(path+'/face_5.png'),
    require(path+'/face_4.png'),
  ];

  const faceMapping = [0,1,2,5,4,3]
  for(let i=0;i<faceMapping[valueGot];i++){
    faces.push(faces.shift())
  }

  return (
    <Box>
      <animated.div style={bounce}>
        <Cube style={{...fromAToB}} faces={faces.map((src) => ({src}))}/>
      </animated.div>
    </Box>
  );
}

export default Dice;