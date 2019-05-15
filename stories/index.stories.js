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

storiesOf('Theme Swatch with Material Themes', module)
  .add('big', () => <ThemeSwatch theme={{ palette }} size={128} />)
  .add('small', () => <ThemeSwatch theme={{ palette }} size={32} />);
