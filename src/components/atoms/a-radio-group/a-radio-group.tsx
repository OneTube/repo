import type { Props } from './a-radio-group.types';

import cx from 'classnames';
import React, { useState, useEffect } from 'react';

import { generateUnique } from '../../../utils';

import s from './a-radio-group.module.scss';

const ARadioGroup: React.FC<Props> = (props) => {
    const { defaultValue, options, className, onChange } = props;
    const [current, setCurrent] = useState(defaultValue);

    const ctxClass = cx(s['a-radio-group'], className);
    const uniqName = generateUnique();

    useEffect(() => {
        setCurrent(defaultValue);
    }, [defaultValue]);

    return (
        <div className={ ctxClass }>
            { options.map((option, index) => {
                const id = uniqName + index;
                const isChecked = option.value === current;
                const handler = () => {
                    setCurrent(option.value);
                    onChange(option.value);
                };

                return (
                    <div key={id}>
                        <input
                            type="radio"
                            id={ id }
                            name={ uniqName }
                            defaultChecked={ isChecked }
                            value={ option.value }
                            onChange={ handler }
                        />
                        <label htmlFor={ id }>{ option.label }</label>
                    </div>
                )
            }) }
        </div>
    );
}

export default ARadioGroup;
