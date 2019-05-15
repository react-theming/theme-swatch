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
const UniSwatch = createSwatch(styled);
const unitheme = {
  mainColor: 'red',
  textColor: 'rgba(0,0,0,0.3)',
  backgroundColor: 'white',
};
const preparedTheme = {
  main: ['red'],
  accent: ['pink'],
  // text: ['gray'],
  // background: ['white'],
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

storiesOf('Theme Swatch with Universal Themes', module)
  .add('T1', () => (
    <UniSwatch
      theme={{
        main: ['red'],
        // accent: ['pink'],
        // text: ['gray'],
        // background: ['white'],
      }}
      size={128}
    />
  ))
  .add('T2', () => (
    <UniSwatch
      theme={{
        main: ['red'],
        accent: ['pink'],
        // text: ['gray'],
        // background: ['white'],
      }}
      size={128}
    />
  ))
  .add('T3', () => (
    <UniSwatch
      theme={{
        main: ['red'],
        accent: ['pink'],
        text: ['gray'],
        // background: ['white'],
      }}
      size={128}
    />
  ))
  .add('T4', () => (
    <UniSwatch
      theme={{
        main: ['red'],
        accent: ['pink'],
        text: ['gray'],
        background: ['white'],
      }}
      size={128}
    />
  ));

storiesOf('Theme Swatch with Big Universal Themes', module)
  .add('T1', () => (
    <UniSwatch
      theme={{
        main: ['red', 'brown'],
        // accent: ['pink'],
        // text: ['gray'],
        // background: ['white'],
      }}
      size={128}
    />
  ))
  .add('T2', () => (
    <UniSwatch
      theme={{
        main: ['red', 'brown', 'yellow'],
        accent: ['pink'],
        // text: ['gray'],
        // background: ['white'],
      }}
      size={128}
    />
  ))
  .add('T3', () => (
    <UniSwatch
      theme={{
        main: ['red', 'brown', 'yellow', 'blue'],
        // accent: ['pink'],
        // text: ['gray'],
        // background: ['white'],
      }}
      size={128}
    />
  ))
  .add('T4', () => (
    <UniSwatch
      theme={{
        main: [
          'red',
          'brown',
          'yellow',
          'green',
          '#caf',
          '#f0c',
          '#e0f',
          '#0af',
          '#00c',
          '#0ff',
        ],
        // accent: ['pink'],
        // text: ['gray'],
        // background: ['white'],
      }}
      size={128}
    />
  ));

storiesOf('Material like Themes', module).add('T1', () => (
  <UniSwatch
    theme={{
      main: ['#a0f', '#f8f', '#408'],
      accent: ['#f09', '#fe6', '#c04'],
      text: ['#444'],
      background: ['white'],
    }}
    size={128}
  />
));

// storiesOf('Theme Swatch with Material Themes', module)
//   .add('big', () => <ThemeSwatch theme={{ palette }} size={128} />)
//   .add('small', () => <ThemeSwatch theme={{ palette }} size={32} />);
