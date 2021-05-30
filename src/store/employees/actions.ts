import type { IEmployee } from '../../types';

import {
    sortByKey,
    transposeByLetter
} from  '../../utils';
import { E_EMPLOYEES } from './types';

export const employeesActions = {
    fillEmployees: (payload: Array<IEmployee>) => {
        return {
            type: E_EMPLOYEES.FILL_EMPLOYEES,
            payload: payload
        };
    },
    selectEmployee: (id: string) => {
        return {
            type: E_EMPLOYEES.SELECT_EMPLOYEE,
            payload: id
        };
    },
    unselectEmployee: (id: string) => {
        return {
            type: E_EMPLOYEES.UNSELECT_EMPLOYEE,
            payload: id
        };
    },
    fillSelectEmployees: () => {
        return {
            type: E_EMPLOYEES.FILL_SELECT_EMPLOYEES
        };
    },
    fetchEmployeesAsync: () => {
        return {
            type: E_EMPLOYEES.FETCH_EMPLOYEES_ASYNC,
        };
    },
}
