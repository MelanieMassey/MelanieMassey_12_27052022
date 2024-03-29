import './Keydata.css'
import propTypes from 'prop-types';
import React from 'react';


/**
 * Component that will show key data
 * @param {string} className To set classNames of some elements
 * @param {string} img Image src
 * @param {number} data 
 * @param {string} dataType Type of the data (carbohydrate, proteins, calories, lipids)
 * @returns React Component Keydata
 */
function Keydata({className, img, data, dataType}) {
    return(
        <div className={"keyData " + className}>
            <div className={"dataImg " + className + "Background"}>
                <img className={className + "Img"} src={img} alt={className}/>
            </div>
            <div className='dataText'>
                <p>{data}</p>
                <p>{dataType}</p>
            </div>
        </div>
    )
}

Keydata.propTypes = {
    className: propTypes.string,
    img: propTypes.string,
    data: propTypes.number,
    dataType: propTypes.string,
}

export default Keydata;