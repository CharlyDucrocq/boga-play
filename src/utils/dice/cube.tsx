import { CSSProperties, FC, ReactElement } from 'react';
import { Box, Button } from 'grommet';
import { useSpring, animated, useSprings, SpringValue } from 'react-spring';
import { UseSpringProps } from '@react-spring/core/dist/declarations/src/hooks/useSpring';

type Position = {
  x?: number | SpringValue<number>;
  y?: number | SpringValue<number>;
  z?: number | SpringValue<number>;
  rotateX?: number | SpringValue<number>;
  rotateY?: number | SpringValue<number>;
  rotateZ?: number | SpringValue<number>;
};

interface CubeProps {
  size?: number;
  style?: Position;
}

const initFaceStyleFactory: (r: number) => CSSProperties[] = (r) => ([
  {
    background: 'red',
    transform: `translate3d(0,0,${r}px)`,
    perspective: r
  },
  {
    background: 'pink',
    transform: `translate3d(0,0,-${r}px)`,
    perspective: r
  },
  {
    background: 'blue',
    transform: `translate3d(${r}px,0,0)`,
    rotateY: 90,
  },
  {
    background: 'lightblue',
    transform: `translate3d(-${r}px,0,0)`,
    rotateY: 90,
  },
  {
    background: 'green',
    transform: `translate3d(0,${r}px,0)`,
    rotateX: 90,
  },
  {
    background: 'yellow',
    transform: `translate3d(0,-${r}px,0)`,
    rotateX: 90,
  },
])

export const Cube: FC<CubeProps> = (props) => {
  const {size = 50} = props;
  const initFacesStyles = initFaceStyleFactory(size);
  const facesStyles = useSprings<UseSpringProps>(initFacesStyles.length,initFacesStyles.map((face, idx) => ({
      position: 'absolute',
      left: -size,
      top: -size,
      bottom: 0,
      right: 0,
      boxShadow: 'inset 0 0 6px #000000',
      backgroundColor: '#fff',
      width: size*2,
      height: size*2,
      transform: `translate3d(0,0,${size*(idx*2-1)}px)`,
      ...face
    })),
  )
  return (
    <animated.div {...props} style={{...props.style, transformStyle: 'preserve-3d'}} >
      { facesStyles.map(style => (<animated.div style={style}/>))}
    </animated.div>
  );
}

export default Cube;