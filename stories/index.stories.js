import React from 'react';
import styled from '@emotion/styled';

import { storiesOf } from '@storybook/react';
import { createSwatch } from '../src';

const ThemeSwatch = createSwatch(styled);
const palette = {
  primary: {
    main: '#446644',
    light: '#668866',
    dark: '#334433',
    contrastText: 'black',
  },
  secondary: {
    main: '#223366',
    light: '#445566',
    dark: '#223344',
    contrastText: 'white',
  },
};

const themePreview = theme => ({
  main: [theme.mainColor],
  text: [theme.textColor],
  accent: [],
  background: [theme.backgroundColor],
});
const UniSwatch = createSwatch(styled, themePreview);
const unitheme = {
  mainColor: 'red',
  textColor: 'rgba(0,0,0,0.3)',
  backgroundColor: 'white',
};


const bigPreview = theme => ({
  main: [theme.mainColor],
  text: [theme.textColor],
  accent: [],
  background: [theme.backgroundColor],
});
const BigSwatch = createSwatch(styled, bigPreview);
const BigTheme = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  grey: 'rgb(248, 248, 248)',
  companyColor: 'rgb(41, 120, 253)',
  border: 'rgb(235, 235, 235)',
  searchLoupe: 'rgb(142, 142, 147)',
  transparent: 'transparent',
  badgeBackgroundColor: 'rgb(255, 59, 48)',
  sidebarBackgroundColor: 'rgb(240, 240, 240)',
  pink: 'rgb(245,95,152)',
  active: 'rgb(51, 51, 51)',
  inactive: 'rgb(190, 190, 190)',
  greyText: 'rgb(235, 235, 235)',
  darkGrey: 'rgb(137,137,137)',
};

storiesOf('Theme Swatch with Big Themes', module)
  .add('big', () => <BigSwatch theme={BigTheme} size={128} />)
  .add('small', () => <BigSwatch theme={BigTheme} size={32} />);

storiesOf('Theme Swatch with Universal Themes', module)
  .add('big', () => <UniSwatch theme={unitheme} size={128} />)
  .add('small', () => <UniSwatch theme={unitheme} size={32} />);

// storiesOf('Theme Swatch with Material Themes', module)
//   .add('big', () => <ThemeSwatch theme={{ palette }} size={128} />)
//   .add('small', () => <ThemeSwatch theme={{ palette }} size={32} />);
