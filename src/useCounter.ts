import { useState } from "react";

export const useCounter = ({step = 1, start = 0}) => {
    const [counter, setCounter] = useState(start);

    return [counter, () => setCounter(state => state + step)];
}