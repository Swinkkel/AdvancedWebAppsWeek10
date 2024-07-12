import React from 'react';
import PropTypes from 'prop-types';

function MyList({ header, items}) {
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map(item => (
                    <li>{item.text}</li>
                ))}
                <li></li>
            </ol>
        </div>
    );
}

MyList.propTypes = {
    header: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
};

export default MyList;