import {
  Box,
} from "grommet";
import Dice from '../src/utils/dice/dice';

export default function Home() {
  return (
    <Box
      margin={{ horizontal: "auto" }}
      width={{ max: "large" }}
      height={{min: '100%'}}
      // flex={false}
    >
      <Dice/>
    </Box>
  );
}
