import React from 'react';

import AlertDemo from './alert';
import error from './error';
import info from './info';
import success from './success';
import warning from './warning';

import type { PreviewerDemo } from '../../interface';

const previewerDemo: PreviewerDemo = {
  default: <AlertDemo />,
  optional: [error, info, success, warning],
};

export default previewerDemo;