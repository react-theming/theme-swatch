/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from '@emotion/styled';

import { storiesOf } from '@storybook/react';
import { createSwatch } from '../src';

const UniSwatch = createSwatch(styled);

storiesOf('Theme Swatch with Universal Themes', module)
  .add('T1', () => (
    <UniSwatch
      theme={{
        main: ['red'],
      }}
      size={128}
    />
  ))
  .add('T2', () => (
    <UniSwatch
      theme={{
        main: ['red'],
        accent: ['pink'],
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
      }}
      size={128}
    />
  ))
  .add('T2', () => (
    <UniSwatch
      theme={{
        main: ['red', 'brown', 'yellow'],
        accent: ['pink'],
      }}
      size={128}
    />
  ))
  .add('T3', () => (
    <UniSwatch
      theme={{
        main: ['red', 'brown', 'yellow', 'blue'],
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

const materialPreview = ({ palette }) => ({
  main: [palette.primary.main, palette.primary.light, palette.primary.dark],
  text: [palette.primary.contrastText, palette.secondary.contrastText],
  accent: [
    palette.secondary.main,
    palette.secondary.light,
    palette.secondary.dark,
  ],
  background: [],
});

const ThemeSwatch = createSwatch(styled, materialPreview);
const palette = {
  primary: {
    main: '#3f51b5',
    light: 'rgb(101, 115, 195)',
    dark: 'rgb(44, 56, 126)',
    contrastText: '#fff',
  },
  secondary: {
    main: '#f50057',
    light: 'rgb(247, 51, 120)',
    dark: 'rgb(171, 0, 60)',
    contrastText: '#fff',
  },
};

storiesOf('Material UI Themes', module).add('T1', () => (
  <ThemeSwatch
    theme={{
      palette,
    }}
    size={128}
  />
));
