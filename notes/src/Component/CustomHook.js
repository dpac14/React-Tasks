import React, { useState } from 'react';
import CreateHook from './CreateHook';

function CustomHook() {
    const [count, setCount] = useState(0)
    CreateHook({ count })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default CustomHook;
