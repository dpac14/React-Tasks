import React, { useState } from 'react';

function DisplayCount({ age, salary }) {
    console.log('DisplayCount component render');
    return (
        <div>
            {`Age:${age} Salary:${salary}`}
        </div>
    );
}

export default React.memo(DisplayCount);
