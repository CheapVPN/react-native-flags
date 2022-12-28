import React from 'react';
import { Image, ImageStyle } from 'react-native';
import * as flags from './flags';

type Props = {
  size: 16 | 24 | 32 | 48 | 64,
  code: string,
  type?: 'flat' | 'shiny',
  style?: ImageStyle,
};

const Flag: React.FC<Props> = ({ size = 64, code, type = 'shiny', style }) => {
  const flag = flags[type][`icons${size}`][code];
  const unknownFlag = flags[type][`icons${size}`]['unknown'];

  return (
    <Image
      source={flag || unknownFlag}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
