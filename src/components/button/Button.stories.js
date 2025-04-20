import { Button } from "./index";
import { fn } from "@storybook/test";

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'radio' },
          },
          disabled: { control: {type: 'boolean'} }
    },
    args: { onClick: fn() },
}

export const Button1 = {
    args: {
        label: 'Вариант 1',
        variant: 'primary'
    }
}

export const Button2 = {
    args: {
        label: 'Вариант 2',
        variant: 'secondary'
    }
}

export const Button3 = {
    args: {
        label: 'Вариант 3',
        variant: 'tertiary'
    }
}

export const Button4 = {
    args: {
        label: 'Вариант 4',
        variant: 'primary',
        disabled: true
    }
}