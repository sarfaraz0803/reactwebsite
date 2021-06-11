function Card(props){
    return (
        <>
        <div className="cards">
            <div className="card">
                <div className='img_div'><img src={props.imgsrc} alt="cardimage" className="card_img" /></div>
                
                <div className="card_info">
                    <h3 className="card_title">{props.title} </h3>
                    <h4 className='price'>price: ${props.price}</h4>
                    <div className='btns'>
                        <button onClick={()=>props.onSelect(props.id)}> Add To Cart</button>
                        <button onClick={()=>{alert(`Your Product's Name is: (${props.title}) & Price is: (${props.price})`)}}> Buy Now</button>
                    </div>
                </div>
            </div>            
        </div>
        </>
    );
}
export default Card;