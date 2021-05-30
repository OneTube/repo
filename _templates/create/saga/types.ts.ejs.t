---
to: "<% return path + 'types.ts'%>"
---
enum E_<%= upperName %> {
    FILL_<%= upperName %> = 'FILL_<%= upperName %>',
    CLEAR_<%= upperName %> = 'CLEAR_<%= upperName %>',

    FETCH_<%= upperName %>_ASYNC = 'FETCH_<%= upperName %>_ASYNC',
}

export {
    E_<%= upperName %>
}
