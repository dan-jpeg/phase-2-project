

const Item = ( { item } ) => {
    return <li className="cart-item">{item.name} - ${item.price}</li>
}

export default Item;