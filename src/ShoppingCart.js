import Item from "./Item"

const ShoppingCart = ( { } ) => {
    // console.log(cartContents)
    // const itemComponents = cartContents.map(item => {
    //     return <Item key={item.name} item={item}/>
    // })

    return (
        <div className="cart"> 
        shopping cart
        <ul>
            {/* {itemComponents} */}
            <li>font 1</li>
            <li>font 2</li>
        </ul>
        </div>
    )
}

export default ShoppingCart;