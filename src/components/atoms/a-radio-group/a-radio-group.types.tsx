import React from "react";

export type TValue = string | number | readonly string[] | undefined;

interface IOptionItem {
    label: string,
    value: TValue
}

export interface Props {
    render?: () => JSX.Element[] | JSX.Element,
    defaultValue: TValue,
    options: Array<IOptionItem>,
    className?: string,
    onChange: (value: TValue) => void,
}
