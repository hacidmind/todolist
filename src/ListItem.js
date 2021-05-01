
import React from 'react'

export default function ListItems (props){
    const items = props.items
    const listItems = items.map(item => {
        return <div className = 'list' key = {item.key} >
    <p>{item.text} <button className='deleteBtn btn btn-danger' onClick={() =>props.deleteItem(item.key)}>Delete</button></p>
        </div>
    })
        return (
            <div>
                {listItems}
            </div>
        )
}

