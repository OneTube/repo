import type { Props } from './o-calendar.types';
import type { IEmployee } from '../../../types';
import type { RootState } from '../../../store/root-reducer';

import React from 'react';
import cx from 'classnames';
import {useSelector} from "react-redux";

import { sortByKey } from "../../../utils";
import { E_MONTHS } from "../../../types";

import s from './o-calendar.module.scss';

const OCalendar: React.FC<Props> = (props) => {
    const { className } = props;
    const currentMonth = (new Date).getMonth();
    const yearMap = Array(12).fill(null).map((value, key) => {
        const index = key + currentMonth;
        return index <= 11 ? index : index - 12;
    });
    const ctxClass = cx(s['o-calendar'], className);

    const selected = useSelector((state: RootState) => preparedSelected(state.employees.selected));
    const isSelectedExist = Boolean(Object.keys(selected).length);

    function preparedSelected(data: Array<IEmployee>) {
        return sortByKey(data, 'lastName').reduce((acc, item) => {
            const monthKey = new Date(Date.parse(item.dob)).getMonth();

            if (!acc[monthKey]) {
                acc[monthKey] = [item];
            } else {
                acc[monthKey].push(item);
            }

            return acc;
        }, {});
    }

    function getText(employee: IEmployee) {
        const date = new Date(Date.parse(employee.dob));
        const formatDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(date);

        return `${employee.lastName} ${employee.firstName} - ${formatDate}`;
    }

    return (
        <div className={ ctxClass }>
            { !isSelectedExist &&
                <dl className={ s['calendar__item'] }>
                    <dt>
                        <b>Employees List is empty</b>
                    </dt>
                </dl>
            }
            { isSelectedExist && yearMap.map((keyMonth) => {
                const employees = selected[keyMonth] || [];
                const isExist = Boolean(employees.length)

                return isExist && (
                    <dl
                        key={ E_MONTHS[keyMonth] }
                        className={ s['calendar__item'] }
                    >
                        <dt><b>{ E_MONTHS[keyMonth] }</b></dt>
                        { employees.map((employee: IEmployee) => {
                            return (
                                <dd key={ employee.id }>
                                    { getText(employee) }
                                </dd>
                            );
                        }) }
                    </dl>
                );
            }) }
        </div>
    );
}

export default OCalendar;
