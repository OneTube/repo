---
to: "<% return path + 'actions.ts'%>"
---
<%
    const name = {
        lcFirst: h.changeCase.pascal(storeName),
        upper: h.changeCase.upper(storeName),
        lower: h.changeCase.lower(storeName),
        typesName: h.changeCase.upper(storeName) + '_TYPES',
    }
%>import { E_<%= upperName %> } from './types';

export const <%= lowerName %>Actions = {
    fill<%= pascalName %>: (payload) => {
        return {
            type: E_<%= upperName %>.FILL_<%= upperName %>,
            payload: payload
        };
    },
    clear<%= pascalName %>: () => {
        return {
            type: E_<%= upperName %>.CLEAR_<%= upperName %>
        };
    },

    fetch<%= pascalName %>Async: () => {
        return {
            type: E_<%= upperName %>.FETCH_<%= upperName %>_ASYNC,
        };
    },
}
