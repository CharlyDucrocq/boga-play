import { grommet, Grommet } from 'grommet';
import {ThemeType} from "grommet/themes/base";
import Layout from "../src/main/Layout";
import '../public/global.css'

const myTheme: ThemeType = {

}

function MyApp({ Component, pageProps }) {
    return (
        <Grommet theme={{...grommet, ...myTheme}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Grommet>
    );
}

export default MyApp;
