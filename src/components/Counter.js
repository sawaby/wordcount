import { useRef, useState } from 'react';

export const Counter = () => {
    const [charLength, setCharlength] = useState(0);
    const [wordLength, setWordLength] = useState(0);

    const textRef = useRef();

    const handleCount = () => {
        const value = textRef.current.value;
        setCharlength(value.length);
        value.length ? setWordLength(value.trim().split(" ").length) : setWordLength(0);
    }

    const handleButton = () => {
        textRef.current.value = "";
        handleCount();
    }

    return(
        <section className='counter'>
            <textarea onChange={handleCount} data-testid="textArea" placeholder='Type or paste your text' ref={textRef}></textarea>
            <button onClick={handleButton} data-testid="clearBtn" disabled={charLength ? "" : "disabled"}>Clear</button>

            <p className='result'>
                <span>Character: {charLength}</span>
                <span>Word: {wordLength}</span>

            </p>
        </section>
    )
}