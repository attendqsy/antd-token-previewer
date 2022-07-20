import React from 'react';
import { Slider, theme } from 'antd';
import type { ComponentDemo } from '../../interface';

const Demo = () => {
  const { token } = theme.useToken();
  return (
    <div style={{ padding: 12, background: token.colorBgContent }}>
      <Slider defaultValue={30} />
      <Slider range defaultValue={[20, 50]} />
    </div>
  );
};

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: [
    'colorBgContent',
    'colorBgContentHover',
    'colorBgContainer',
    'colorPrimary',
    'colorPrimaryHover',
    'colorPrimaryBorderHover',
    'colorPrimaryBorder',
  ],
  key: 'default',
};

export default componentDemo;
