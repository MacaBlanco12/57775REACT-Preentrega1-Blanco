import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {
    return (
        <div className='item-list'>


            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        <div key={producto.id}>
                            <Item producto={producto} />


                        </div>

                    )
                })
            }
        </div>
    )
}

export default ItemList