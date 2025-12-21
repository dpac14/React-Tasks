import React, { useEffect, useState } from 'react';

function HookClass2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You Cliked ${count} time`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default HookClass2;
