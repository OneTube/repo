---
to: "<% return path + kebabName + '.tsx'%>"
---
import type { Props } from './<%= kebabName %>.types';

import React from 'react';
import cx from 'classnames';

import s from './<%= kebabName %>.module.scss';

const <%= pascalName %>: React.FC<Props> = (props) => {
    const { children, className } = props;

    const ctxClass = cx(s['<%= kebabName %>'], className);

    return (
        <div className={ ctxClass }>
            { children }
            <%= kebabName %>
        </div>
    );
}

export default <%= pascalName %>;
