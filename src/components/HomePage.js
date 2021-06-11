import React, { useEffect, useState } from 'react'
import Card from './Card'
 
const Product_Page = 'products'
const Cart_Page = 'cart'
const Homepage = () => {
    const [apiData, setApiData] = useState([])
    const [addItem, setAddItem] = useState([])
    const [page, setPage] = useState(Product_Page)
    const navigateTo = (nextpage)=>{
        setPage(nextpage)
    }
    
    
    useEffect(()=>{
        const fetch_api = async ()=>{
            const url = 'https://fakestoreapi.com/products'
            const res = await fetch(url)
            const json_data = await res.json()
            setApiData(json_data)
        }
        fetch_api()
   },[])

   const add_item = (id)=>{
        const match = apiData.filter((val,ind)=>{
            return val.id === id
        })
        setAddItem((preValue)=>{
            return [...preValue, match[0] ]
        })      
        
   }
    const renderProducts = ()=>(
        <>
            <h1>Products</h1>
            <div className='main-container'>
                {
                    apiData.map((curItem, ind)=>{
                        return <Card key={ind} id={ind} imgsrc={curItem.image} title={curItem.title} price={curItem.price} onSelect={add_item} /> 
                    })
                } 
            </div>
        </>
    )
    const renderCart = ()=>(
        <>
            <h1>Cart</h1>
            <div className='gal_container'>
                <div className='head'>
                   <button className='back_icon' onClick={()=> navigateTo(Product_Page)}>
                        <i className="fa fa-arrow-circle-left" aria-hidden="true" />
                   </button>
                   <h3 >Back To Products</h3>
                </div>

                <div className='cart_items_container'>
                    <div className='cart_items'>
                        {
                            addItem.map((val)=>{
                                return(                                    
                                    <div className='item' key={val.id}>
                                        <img src={val.image} alt="" />
                                        <h6 className='title'>{val.title}</h6>
                                        <button onClick={()=>alert('Hello')}>BuyNow</button>
                                        <i className="fa fa-times cut_icon" title='Remove From Cart' aria-hidden="true" />
                                    </div>                                    
                                )
                            })
                        }                        
                    </div>
                </div>
            </div>
        </>
    )


    return (
        <>
            <div className='header'>
                <h2 className='heading'>Influence Shopping WebSite</h2> 
                <button onClick={()=> navigateTo(Cart_Page)}><i className="fa fa-shopping-cart" aria-hidden="true" />{addItem.length}</button>
            </div>
            {page === Product_Page && renderProducts() }
            {page === Cart_Page && renderCart() }
        </>
    )
}

export default Homepage

    