import './Activity.css';

function Activity({img, alt}) {
    
    return(
        <div className='activityBox'>
            <img src={img} alt={alt}/>
        </div>
    )
}

export default Activity;