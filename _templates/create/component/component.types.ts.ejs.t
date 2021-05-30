---
to: "<% return path + kebabName + '.types.tsx'%>"
---
import React from "react";

export interface Props {
    render?: () => JSX.Element[] | JSX.Element,
    className?: string,
    onClick?: (event: React.MouseEvent) => void,
}
