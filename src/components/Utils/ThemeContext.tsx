import React from 'react';
import { THEMES } from '../../constants';
import type { Theme } from '../../types';

export const ThemeContext = React.createContext({
  theme: THEMES[0],
  setTheme: (_: Theme) => {},
});