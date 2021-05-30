import type { E_LETTERS } from '../../../types';

import React from "react";

export interface Props {
    render?: () => JSX.Element[] | JSX.Element,
    className?: string,
    letters?: Array<E_LETTERS>
}

