import React, { useCallback, useState } from 'react';
import Title from './Title';
import DisplayCount from './DisplayCount';
import Button from './Button';

function ParentuseCallback() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    const incrementAge = useCallback(() => {
        setAge(age + 1);

    }, [age]);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary]);
    return (
        <div>
            <Title />
            <DisplayCount age={age} salary={salary} />
            <Button handleclick={incrementAge} />
            <Button handleclick={incrementSalary} />
        </div>
    );
}

export default ParentuseCallback;
