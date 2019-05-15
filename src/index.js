import React from 'react';
import ThemeSwatch from './ThemeSwatch';
import { setStyled } from './ThemeSwatch.styled';

const defaultSwatcher = theme => theme;

export const createSwatch = (styled, swatcherFn = defaultSwatcher) => {
  setStyled(styled);
  const Swatch = ({ theme, ...props }) => (
    <ThemeSwatch theme={swatcherFn(theme)} {...props} />
  );
  return Swatch;
};
