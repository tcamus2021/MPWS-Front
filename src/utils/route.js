import Error404 from "../components/Error404";
import { COMPONENT_URL } from "../constants/url";

const getRouteByUrl = (url) => COMPONENT_URL[url] || <Error404/>;

export { getRouteByUrl };
