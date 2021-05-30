---
to: "<% return path + 'reducer.ts'%>"
---
import { E_<%= upperName %> } from './types';

const initialState = {};

export const <%= lowerName %>Reducer = (state = initialState, action) => {
    switch (action.type) {
        case E_<%= upperName %>.FILL_<%= upperName %>:
            return action.payload;

        case E_<%= upperName %>.CLEAR_<%= upperName %>:
            return {};

        default:
            return state;
    }
}
