import React from 'react';

function Button({ handleclick }) {
    console.log("button component render");

    return (
        <div>
            <button onClick={handleclick}>Counter</button>
        </div>
    );
}

export default React.memo(Button);
