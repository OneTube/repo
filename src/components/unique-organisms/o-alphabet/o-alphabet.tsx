import type { Props } from './o-alphabet.types';
import type { IEmployee } from '../../../types';
import type { RootState } from '../../../store/root-reducer';

import cx from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { OAlphabetLetter } from '../o-alphabet-letter';

import { sortByKey, transposeByLetter } from "../../../utils";
import { employeesActions } from "../../../store/employees/actions";
import { E_LETTERS } from '../../../types';

import s from './o-alphabet.module.scss';

const OAlphabet: React.FC<Props> = (props) => {
    const { className, letters } = props;
    const dispatch = useDispatch();

    const employees = useSelector((state: RootState) => preparedEmployees(state.employees.list));

    const localLetters = letters || Object.values(E_LETTERS);
    const ctxClass = cx(s['o-alphabet'], className);

    function preparedEmployees(data: any) {
        const key = 'lastName';
        return transposeByLetter(sortByKey(data, key), key);
    }

    function onChangeHandler(employee: IEmployee, value: boolean) {
        if (value) {
            dispatch(employeesActions.selectEmployee(employee.id));
        } else {
            dispatch(employeesActions.unselectEmployee(employee.id));
        }
    }

    useEffect(() => {
        dispatch(employeesActions.fetchEmployeesAsync());
    }, []);

    return (
        <div className={ ctxClass }>
            { localLetters.map(letter => (
                <OAlphabetLetter
                    key={ letter }
                    letter={ letter }
                    data={ employees[letter] }
                    onChange={ onChangeHandler }
                />
            )) }
        </div>
    );
}

export default OAlphabet;
