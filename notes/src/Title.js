import React from 'react';

function Title() {
    console.log('Title componet render');

    return (
        <div>
            Employee Management System
        </div>
    );
}

export default React.memo(Title);
