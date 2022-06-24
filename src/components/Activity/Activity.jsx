import './Activity.css';
import propTypes from 'prop-types';

/**
 * Creates activity element of the vertical navigation bar
 * @prop {String} img Image path
 * @prop {String} alt Image description
 * @returns Activity component
 */
function Activity({img, alt}) {
    return(
        <div className='activityBox'>
            <img src={img} alt={alt}/>
        </div>
    )
}

Activity.propTypes = {
    img: propTypes.string,
    alt: propTypes.string,
}

export default Activity;