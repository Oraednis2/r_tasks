import { grommet, ThemeType } from "grommet";
import { deepMerge } from "grommet/utils";


const custom: ThemeType = {
    notification: {
        toast: { time: 3000, container: { elevation: 'large' } },
        container: { pad: 'small', background: 'dark-1' },

    },
    global: {
        font: {
            family: 'Roboto', size: '18px', height: "20px"
        }
    }
    , layer: { border: { radius: '16px' } }
};

const theme = deepMerge(grommet, custom);

export default theme;