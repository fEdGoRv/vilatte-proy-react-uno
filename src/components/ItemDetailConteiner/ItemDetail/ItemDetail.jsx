import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'

export const ItemDetail = () => {
    return (
        <box>
            <ItemCount inicial="1" stock="10"/>
            <div>ItemDetail</div>
        </box>
    )
}

export { ItemDetail }
