import {Component, ReactElement} from "react";
import { Anchor, Box, Header } from 'grommet';

interface LayoutProps {
  children?: ReactElement;
}
interface LayoutState { }
export default class Layout extends Component<LayoutProps, LayoutState> {
  state: LayoutState = { };
  render() {
    return (
      <Box fill direction={'column'}>
        <Header background="brand" height={{min: 'xxsmall'}} pad={'small'}>
          <Box>
            BoardGamesPlay
          </Box>
        </Header>
        <Box fill direction={'row'}>
          <Box  background="light-3" fill={'vertical'} width={'small'}></Box>
          <Box fill overflow={'auto'}>
            <Box flex={false}>
              {this.props.children}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}