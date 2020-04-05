import React from 'react';
import ThemeSwatch from './ThemeSwatch';
import { setStyled } from './ThemeSwatch.styled';

const defaultSwatcher = theme => {
  if (Array.isArray(theme)) {
    if (theme.length <= 1) {
      const themeShape = {
        main: [theme[0], theme[0], undefined],
        accent: [theme[0], theme[0], undefined],
        text: [],
        background: [],
      };

      return themeShape;
    }
    if (theme.length <= 3) {
      const themeShape = {
        main: [theme[0], theme[1], theme[2]],
        accent: [theme[0], theme[1], theme[2]],
        text: [theme[3], theme[4]],
        background: [theme[5]],
      };

      return themeShape;
    }
    if (theme.length === 5) {
      const baseInd = theme.length - 3;
      const themeShape = {
        main: [theme[1], theme[0], theme[2]],
        accent: [theme[baseInd + 0], theme[baseInd + 1], theme[baseInd + 2]],
        text: [theme[baseInd + 3], theme[baseInd + 4]],
        background: [theme[baseInd + 5]],
      };

      return themeShape;
    }
    if (theme.length <= 6) {
      const baseInd = theme.length - 3;
      const themeShape = {
        main: [theme[1], theme[0], theme[2]],
        accent: [theme[baseInd + 1], theme[baseInd + 0], theme[baseInd + 2]],
        text: [theme[baseInd + 3], theme[baseInd + 4]],
        background: [theme[baseInd + 5]],
      };

      return themeShape;
    }
    // if (theme.length <= 8) {
    //   const baseInd = theme.length - 3;
    //   const themeShape = {
    //     main: [theme[1], theme[0], theme[2]],
    //     accent: [theme[baseInd + 1], theme[baseInd + 0], theme[baseInd + 2]],
    //     text: [theme[baseInd + 3], theme[baseInd + 4]],
    //     background: [theme[baseInd + 5]],
    //   };

    //   return themeShape;
    // }
    const themeShape = {
      main: [theme[1], theme[0], theme[2]],
      accent: [theme[4], theme[3], theme[5]],
      text: [theme[6], theme[8]],
      background: [theme[7]],
    };

    return themeShape;
  }
  return theme;
};

export const createSwatch = (styled, swatcherFn = defaultSwatcher) => {
  setStyled(styled);
  const Swatch = ({ theme, ...props }) => (
    <ThemeSwatch theme={swatcherFn(theme)} {...props} />
  );
  return Swatch;
};
