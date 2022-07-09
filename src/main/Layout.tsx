import {Component, ReactElement} from "react";
import {Box} from "grommet";

interface LayoutProps {
    children?: ReactElement;
}
interface LayoutState { }
export default class Layout extends Component<LayoutProps, LayoutState> {
    state: LayoutState = { };
    render() {
        return (
            <Box>
                {this.props.children}
            </Box>
        );
    }
}