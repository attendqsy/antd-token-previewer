import React from 'react';

import Default from './date-picker';
import danger from './danger';
import warning from './warning';

import type { PreviewerDemo } from '../../interface';

const previewerDemo: PreviewerDemo = {
  default: <Default />,
  optional: [danger, warning],
};

export default previewerDemo;