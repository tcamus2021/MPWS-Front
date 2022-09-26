import HomeLayout from "../components/Home";

const HOME_URL = {
    long: '/home',
    short: '/'
};

const COMPONENT_URL = [];
COMPONENT_URL[HOME_URL.long] = <HomeLayout/>;
COMPONENT_URL[HOME_URL.short] = <HomeLayout/>;
export { COMPONENT_URL, HOME_URL };