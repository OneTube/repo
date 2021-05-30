import type {
    E_LETTERS,
    IEmployee
} from '../../../types';

import React from "react";

export interface Props {
    render?: () => JSX.Element[] | JSX.Element,
    className?: string,
    letter?: E_LETTERS,
    data?: Array<IEmployee|never>,
    onChange: (item: IEmployee, value: boolean) => void,
}

export interface PropsDT {
    render?: () => JSX.Element[] | JSX.Element,
    className?: string,
    item: IEmployee,
    onChange: (item: IEmployee, value: boolean) => void,
}
