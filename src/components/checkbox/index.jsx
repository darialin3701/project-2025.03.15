import styles from './Checkbox.module.css';
import classNames from 'classnames';

const CheckboxIcon = () => {
    return (
        <svg width="14" heights="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3327 1L4.99935 8.33333L1.66601 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Checkbox = ({label, checked, disabled = false, error = false, onChange }) => {
    return (
        <div className={styles.wrapper} onClick={() => onChange(!checked)}>
            <div className={classNames({
                [styles.checkbox]: true,
                [styles.activeBorder]: checked,
                [styles.checked]: checked,
                [styles.disabled]: disabled,
                [styles.error]: error,
            })}>{checked && <CheckboxIcon/>}</div>
            {label && <div>{label}</div>}
        </div>
    )
};