import { CSSProperties, FC } from 'react';
import { animated, useSprings, SpringValue } from 'react-spring';
import { UseSpringProps } from '@react-spring/core/dist/declarations/src/hooks/useSpring';
import Image from 'next/image';
import dicePng from './imgs/simple_dice.png'

type Position = {
  x?: number | SpringValue<number>;
  y?: number | SpringValue<number>;
  z?: number | SpringValue<number>;
  rotateX?: number | SpringValue<number>;
  rotateY?: number | SpringValue<number>;
  rotateZ?: number | SpringValue<number>;
};
type Face = {
  src?: string;
};

interface CubeProps {
  size?: number;
  style?: Position;
  faces?: Face[];
}

const initFaceStyleFactory: (r: number) => CSSProperties[] = (r) => ([
  {
    background: 'red',
    z: r,
    perspective: r
  },
  {
    background: 'blue',
    x: r,
    rotateY: 90,
  },
  {
    background: 'green',
    y: r,
    rotateX: 90,
  },
  {
    background: 'pink',
    z: -r,
    perspective: r
  },
  {
    background: 'lightblue',
    x: -r,
    rotateY: 90,
  },
  {
    background: 'yellow',
    y: -r,
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
      ...face
    })),
  )
  return (
    <animated.div {...props} style={{...props.style, transformStyle: 'preserve-3d'}} >
      { facesStyles.map((style, idx) => {
        const src = !!props.faces ? props.faces.at(idx)?.src : undefined;
        const children = src ? (<Image src={src} layout={'fill'}/>) : undefined;
        return (<animated.div style={{...style, overflow: 'hidden'}} children={children} key={'face_'+idx}/>);
      })}
    </animated.div>
  );
}

export default Cube;