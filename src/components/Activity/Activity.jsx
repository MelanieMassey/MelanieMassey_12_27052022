import './Activity.css';
import propTypes from 'prop-types';
import React from 'react';

/**
 * Creates activity element of the vertical navigation bar
 * @param {String} img Image path
 * @param {String} alt Image description
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