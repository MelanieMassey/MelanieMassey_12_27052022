import './Loader.css';

function Loader() {
    return (
        <div className="loader">
            <div className="loader--firstdot">
                <div className="dot dot--1"></div>
                <div className="dot dot--2"></div>
            </div>
            <div className="dot dot--3"></div>
            <div className="dot dot--4"></div>
        </div>
    )
}

export default Loader;