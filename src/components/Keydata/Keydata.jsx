import './Keydata.css'



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

export default Keydata;