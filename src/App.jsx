import { Button } from "./components/button"
import { Checkbox } from "./components/checkbox";
import styles from './styles.module.css';
import { useState } from "react";
import { useApp } from "./store";
import { useCounter } from "./useCounter";

const ErrorWrapper = ({children, errorMessage}) => {
    return (
        <div style={{background: 'red'}}>
            <div>{children}</div>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}

export const App = () => {
    
    const [showContent, setShowContent] = useState(true);

    return (
        <div>
            <Counter1/>
            <Counter2/>
            <Counter3/>
            <ErrorWrapper errorMessage="Ошибка в первом импуте">
                <input/>
            </ErrorWrapper>
            <br/>
            <input/>
            <br/>
            <ErrorWrapper errorMessage="Ошибка в третьем импуте">
                <input/>
            </ErrorWrapper>
            <br/>
            <input/>
            <br/>
            <input/>
            <Checkbox checked={showContent} onChange={setShowContent} label={"Показывать контент"}/>
            {showContent && <Content1/>}
            {showContent && <Content2/>}
        </div>
    )
}

const Counter1 = () => {

    const [counter, setCounter] = useCounter({step: 1, start: 100});

    return (
        <div>
            <Button onClick={setCounter} label={`Количество нажатий: ${counter}`}/>
        </div>
    )
}

const Counter2 = () => {

    const [counter, setCounter] = useCounter({step: -1});

    return (
        <div>
            <Button onClick={setCounter} label={`Количество нажатий: ${counter}`}/>
        </div>
    )
}

const Counter3 = () => {

    const [counter, setCounter] = useCounter({step: 10});

    return (
        <div>
            <Button onClick={setCounter} label={`Количество нажатий: ${counter}`}/>
        </div>
    )
}

export const Content1 = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <div className={styles[isDarkTheme ? 'darkTheme' : 'lightTheme']}>
            <div className={styles.main}>
                <p>Работа с состоянием</p>
                <Checkbox checked={isDarkTheme} onChange={setIsDarkTheme} label={"Темная тема"}/>
                <Button label="Первая кнопка" variant="primary"/>
            </div>
        </div>
    )
}

export const Content2 = () => {
    
    const {isDarkTheme, setIsDarkTheme} = useApp();
 
    return (
        <div className={styles[isDarkTheme ? 'darkTheme' : 'lightTheme']}>
            <div className={styles.main}>
                <p>Работа с zustand</p>
                <Checkbox checked={isDarkTheme} onChange={setIsDarkTheme} label={"Темная тема"}/>
                <Button label="Первая кнопка" variant="primary"/>
            </div>
        </div>
    )
}