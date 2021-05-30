import { IEmployee } from '../../types';

import { E_EMPLOYEES } from './types';
import { SELECTED_EMPLOYEES_KEY } from '../../constants/app-constants';

const initialState = {
    list: [],
    selected: []
};

export const employeesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case E_EMPLOYEES.FILL_EMPLOYEES:
            state.list = action.payload;
            return state;

        case E_EMPLOYEES.SELECT_EMPLOYEE:
            const employee = state.list.find(({ id }) => id === action.payload);
            const isEmployeeExist = state.selected.find(({ id }) => id === action.payload);

            if (employee && !isEmployeeExist) {
                state.selected = [...state.selected, employee];
            }

            return state;

        case E_EMPLOYEES.UNSELECT_EMPLOYEE:
            state.selected = state.selected.filter(({ id }) => id != action.payload);

            return state;

        case E_EMPLOYEES.FILL_SELECT_EMPLOYEES:
            const mapIds = localStorage.getItem(SELECTED_EMPLOYEES_KEY);

            if(mapIds && mapIds.length) {
                state.selected = state.list.filter((item: IEmployee) => mapIds.includes(item.id));
            }

            return state;

        default:
            return state;
    }
}
