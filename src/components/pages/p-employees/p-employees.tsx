import React from 'react';
import cx from 'classnames';

import { OAlphabet } from '../../unique-organisms/o-alphabet';
import { OCalendar } from '../../unique-organisms/o-calendar';

import s from './p-employees.module.scss';

export interface Props {
    render?: () => JSX.Element[] | JSX.Element,
    className?: string
}

const PEmployees: React.FC<Props> = (props) => {
    const { className } = props;

    const ctxClass = cx(s['p-employees'], className);

    return (
        <div className={ ctxClass }>
            <div className={ s['employees__left'] }>
                <h2 className={ s['employees__title'] }>
                    Employees
                </h2>
                <OAlphabet />
            </div>
            <div className={ s['employees__right'] }>
                <h2 className={ s['employees__title'] }>
                    Employees birthday
                </h2>
                <OCalendar />
            </div>
        </div>
    );
}

export default PEmployees;
