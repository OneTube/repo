import type { IEmployee } from "../../../types";
import type { RootState } from '../../../store/root-reducer';
import type { Props, PropsDT } from './o-alphabet-letter.types';
import type { TValue } from '../../atoms/a-radio-group/a-radio-group.types';

import cx from 'classnames';
import React, { useState } from 'react';
import {useSelector} from "react-redux";

import { ARadioGroup } from '../../atoms/a-radio-group';

import s from './o-alphabet-letter.module.scss';

enum VALUES {
    ON = 'on',
    OFF = 'off'
}

const DTItem: React.FC<PropsDT> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const value = useSelector((state: RootState) => getValue(state.employees.selected));

    const { onChange, item } = props;
    const { lastName, firstName } = item;
    const text = props.item ? `${lastName} ${firstName}` : '-';
    const iconStatus = isOpen ? '➖' : '➕';

    const options = [
        {
            label: 'active',
            value: VALUES.ON
        },
        {
            label: 'not active',
            value: VALUES.OFF
        }
    ];

    function getValue(data: Array<IEmployee>) {
        return data.some(item => item.id === props.item.id ) ? VALUES.ON : VALUES.OFF;
    }

    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }

    function onChangeHandler(value: TValue) {
        onChange(item, value === 'on');
    }

    return (
        <dd>
            <div
                className={s['alphabet-letter__collapse']}
                onClick={toggleIsOpen}
            >
                <span className={s['alphabet-letter__icon']}>
                    { iconStatus }
                </span>
                <span>{ text }</span>
            </div>
            { isOpen &&
                <div className={s['alphabet-letter__ctx']}>
                    <ARadioGroup
                        defaultValue={ value }
                        options={ options }
                        onChange={ onChangeHandler }
                    />
                </div>
            }
        </dd>
    )
};

const OAlphabetLetter: React.FC<Props> = (props) => {
    const { data = [], className, letter, onChange } = props;
    const isDataExist = Boolean(data.length);
    const isActive = useSelector((state: RootState) => getIsActive(state.employees.selected));

    const ctxClass = cx(s['m-alphabet-letter'], className);
    const letterClass = cx({
        [s['alphabet-letter__icon--active']]: isActive
    });

    function getIsActive(selected: Array<IEmployee>) {
        return selected.some(item => {
            return data.some(dataItem => dataItem.id === item.id)
        })
    }

    return (
        <dl className={ ctxClass }>
            <dt className={ letterClass }>
                { letter }
            </dt>
            { isDataExist ?
                data.map(item => {
                    return (
                        <DTItem
                            key={ item.id }
                            item={ item }
                            onChange={ onChange }
                        />
                    );
                } )
                : <dd>-</dd>
            }
        </dl>
    );
};

export default OAlphabetLetter;
