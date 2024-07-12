import React, { useState } from 'react';
import MyList from './MyList'

function MyContainer() {
    const [items, setItems] = useState([
    ])

    const [newItemText, setNewItemText] = useState('');

    const addItem = () => {
        const newItem = {
            id: (items.length + 1).toString(),
            text: newItemText
        };
        setItems([...items, newItem]);
        setNewItemText('');
    }

    
    return (
        <div>
            <h1>My Container</h1>
            <textarea value = {newItemText} onChange={(e) => setNewItemText(e.target.value)} placeholder='Enter new item text ' />
            <button onClick={addItem}>Add Item</button>
            <MyList header = "My List" items={items} />
        </div>
    );
}

export default MyContainer;