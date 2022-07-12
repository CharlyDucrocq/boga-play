import { grommet, Grommet } from 'grommet';
import {ThemeType} from "grommet/themes/base";
import Layout from "../src/main/layout";
import '../public/global.scss'

const myTheme: ThemeType = {

}

function MyApp({ Component, pageProps }) {
    return (
        <Grommet theme={{...grommet, ...myTheme}} full>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Grommet>
    );
}

export default MyApp;
