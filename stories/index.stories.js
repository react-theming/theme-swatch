/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from '@emotion/styled';

import { storiesOf } from '@storybook/react';
import { createSwatch } from '../src';
import { palette as colorList } from '../src/test-utils/palette';

const UniSwatch = createSwatch(styled);

const colorArray = colorList.map(({ original }) => original);

const StyledHolder = styled.div`
  margin: 10px;
  text-align: center;
  span {
    text-align: center;
    font-size: 14px;
  }
  & > div {
    margin-top: 6px;
    box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.42);
  }
`;

const Holder = ({ title, children }) => (
  <StyledHolder>
    <span>{title}</span>
    {children}
  </StyledHolder>
);

storiesOf('Theme Swatch with theme list', module).add('T1 1 colors', () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <Holder title="1">
      <UniSwatch theme={colorArray.slice(0, 1)} size={128} />
    </Holder>
    <Holder title="2">
      <UniSwatch theme={colorArray.slice(0, 2)} size={128} />
    </Holder>
    <Holder title="3">
      <UniSwatch theme={colorArray.slice(0, 3)} size={128} />
    </Holder>
    <Holder title="4">
      <UniSwatch theme={colorArray.slice(0, 4)} size={128} />
    </Holder>
    <Holder title="5">
      <UniSwatch theme={colorArray.slice(0, 5)} size={128} />
    </Holder>
    <Holder title="6">
      <UniSwatch theme={colorArray.slice(0, 6)} size={128} />
    </Holder>
    <Holder title="7">
      <UniSwatch theme={colorArray.slice(0, 7)} size={128} />
    </Holder>
    <Holder title="8">
      <UniSwatch theme={colorArray.slice(0, 8)} size={128} />
    </Holder>
    <Holder title="9">
      <UniSwatch theme={colorArray.slice(0, 9)} size={128} />
    </Holder>
    <Holder title="10">
      <UniSwatch theme={colorArray.slice(0, 10)} size={128} />
    </Holder>
    <Holder title="11">
      <UniSwatch theme={colorArray.slice(0, 11)} size={128} />
    </Holder>
    <Holder title="12">
      <UniSwatch theme={colorArray.slice(0, 12)} size={128} />
    </Holder>
  </div>
));

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
