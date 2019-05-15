import React from 'react';
import { styledComponents } from './ThemeSwatch.styled';

class ThemeSwatch extends React.Component {
  constructor(...props) {
    super(...props);
  }

  sC = styledComponents();

  renderRow = (colors, rowInd) => {
    return (
      <this.sC.Row key={rowInd}>
        {colors.map((col, ind) => (
          <this.sC.Pixel
            key={ind}
            style={{ backgroundColor: col, height: 40 }}
          />
        ))}
      </this.sC.Row>
    );
  };

  renderMatrix = matrix => (
    <this.sC.Paper size={this.props.size}>
      {matrix.map((row, ind) => this.renderRow(row, ind))}
    </this.sC.Paper>
  );

  renderNull = () => {
    const matrix = new Array(4).fill(
      new Array(4).fill('rgba(197, 196, 196, 0.74)')
    );
    return this.renderMatrix(matrix);
  };

  render() {
    const { theme } = this.props;
    if (!theme) return this.renderNull();
    const { palette } = theme;
    if (!palette) return this.renderNull();
    const matrix = [
      [
        palette.primary.light,
        palette.primary.light,
        palette.primary.contrastText,
        palette.primary.dark,
      ],
      [
        palette.primary.light,
        palette.primary.main,
        palette.primary.main,
        palette.primary.dark,
      ],
      [
        palette.secondary.dark,
        palette.secondary.main,
        palette.secondary.main,
        palette.secondary.light,
      ],
      [
        palette.secondary.dark,
        palette.secondary.contrastText,
        palette.secondary.light,
        palette.secondary.light,
      ],
    ];
    return this.renderMatrix(matrix);
  }
}

export default ThemeSwatch;
