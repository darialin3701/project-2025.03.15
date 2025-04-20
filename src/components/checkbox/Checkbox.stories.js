import { Checkbox } from "./index";
import { fn } from "@storybook/test";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: {type: 'text'}},
        disabled: { control: {type: 'boolean'} },
        error: { control: {type: 'boolean'} },
        checked: { control: {type: 'boolean'} }
    },
    args: { onClick: fn() },
}

export const Checkbox1 = {
    args: {
        checked: true
    }
}

export const Checkbox2 = {
    args: {
        label: 'Вариант 2',
        checked: false
    }
}