---
to: "<% return path + 'index.ts'%>"
---
import type { Props } from './<%= kebabName %>.types';

import <%= pascalName %> from './<%= kebabName %>';

export { <%= pascalName %> };

export type { Props };
