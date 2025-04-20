import styles from './Button.module.css';
import classNames from 'classnames';

export const Button = ({label, variant, onClick, disabled = false}) => {
    return (
        <button
            className={classNames({
                [styles.button]: true,
                [styles.primary]: variant === 'primary',
                [styles.secondary]: variant === 'secondary',
                [styles.tertiary]: variant === 'tertiary',
                [styles.disabled]: disabled,
            })}
            onClick={onClick}>

            {label}
        </button>
    )
}