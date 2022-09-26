import PropTypes from 'prop-types';
import { getRouteByUrl } from '../utils/route';

const Router = ({ url }) => getRouteByUrl(url);

Router.propTypes = { url: PropTypes.string };

Router.defaultProps = { url: '/' };

export default Router;