import React, { useEffect } from 'react';

function CreateHook({ count }) {
    useEffect(() => {
        document.title = `count${count} time`
    }, [count])
    return (
        <div>

        </div>
    );
}

export default CreateHook;
