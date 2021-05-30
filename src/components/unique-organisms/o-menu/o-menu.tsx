import React from 'react';
import cx from 'classnames';
import { A, usePath } from 'hookrouter';

import { ROUTERS_MAP } from '../../../hooks/useRouter';

import s from './o-menu.module.scss';

export interface Props {
    render?: () => JSX.Element[] | JSX.Element,
    className?: string,
    onClick?: (event: React.MouseEvent) => void,
}

const OMenu: React.FC<Props> = () => {
    const path = usePath();

    return (
        <ul className={s['o-menu']}>
            {
                ROUTERS_MAP.map(item => {
                    return <li key={item.name}>
                        <A
                            href={item.url}
                            className={cx({
                                [s['--active']]: path === item.url,
                            })}>
                            {item.title}
                        </A>
                    </li>
                })
            }
        </ul>
    );
}

export default OMenu;
