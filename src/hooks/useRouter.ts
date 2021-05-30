import type { PropsWithChildren } from 'react';

import React from 'react';
import { useRoutes } from 'hookrouter';

import { PHome } from '../components/pages/p-home';
import { PEmployees } from '../components/pages/p-employees';

interface IAccMenu {
    [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
    HOME = '/',
    EMPLOYEES = '/employees'
}

const ROUTERS_MAP = [
    {
        name: 'home',
        title: 'Home',
        url: LinkEnum.HOME,
        component: () => React.createElement(PHome),
    },
    {
        name: 'employees',
        title: 'Employees',
        url: LinkEnum.EMPLOYEES,
        component: () => React.createElement(PEmployees),
    },
];

const routes = ROUTERS_MAP.reduce<IAccMenu>((acc, item) => {
    acc[item.url] = item.component;
    return acc;
}, {});

export default function useRouter() {
    const match = useRoutes(routes);

    return { match };
}

export {
    ROUTERS_MAP
};
