import React, { useState } from 'react';

const AdvancedCounter = () => {
    const [count, setCount] = useState(0);

    function counterIncrement(c) {
        if (count + c <= 100) {
            setCount((prev) => prev + c);
        } else {
            alert('Max Value is Achieved by Counter');
        }
    }

    function counterDecrement(c) {
        if (count - c >= 0) {
            setCount((prev) => prev - c);
        } else {
            alert('Min Value is Achieved by Counter');
        }
    }

    return (
        <div>
            <section>
                <h2>{count}</h2>
            </section>
            <button onClick={() => counterIncrement(1)}>+1</button>
            <button onClick={() => counterIncrement(5)}>+5</button>
            <button onClick={() => counterIncrement(10)}>+10</button>
            <br />
            <button onClick={() => counterDecrement(1)}>-1</button>
            <button onClick={() => counterDecrement(5)}>-5</button>
            <button onClick={() => counterDecrement(10)}>-10</button>
        </div>
    );
}

export default AdvancedCounter;
