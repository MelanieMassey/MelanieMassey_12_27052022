import './Keydata.css'



function Keydata({className, img, data, dataType}) {


    return(
        <div className={className}>
            <div className={"dataImg " + className + "Img"}>
                <img src={img} alt={className}/>
            </div>
            <div className=''>
                <p>{data}</p>
                <p>{dataType}</p>
            </div>
            
        </div>
    )
}

export default Keydata;