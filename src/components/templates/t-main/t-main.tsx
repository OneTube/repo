import React from 'react';

import { OMenu } from '../../unique-organisms/o-menu';

import s from './t-main.module.scss';

export interface Props {
    render?: () => JSX.Element[] | JSX.Element,
    className?: string
}

const TMain: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <>
            <div className={ s['t-main'] }>
                <div className={ s['t-main__header'] }>
                    <OMenu />
                </div>
                { children }
            </div>
            <div className={ s['t-main__footer'] }>
                Test Yalantis React.js School
            </div>
        </>
    );
}

export default TMain;
