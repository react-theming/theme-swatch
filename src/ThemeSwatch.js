import React from 'react';
import { styledComponents } from './ThemeSwatch.styled';
import { createMatrix } from './color-model';

class ThemeSwatch extends React.Component {
  sC = styledComponents();

  matrix = createMatrix(this.props.theme);

  renderRow = (colors, rowInd) => {
    return (
      <this.sC.Row key={rowInd}>
        {colors.map((col, ind) => (
          <this.sC.Pixel
            // eslint-disable-next-line react/no-array-index-key
            key={`${col}${ind}`}
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
      new Array(4).fill('rgba(197, 196, 196, 0.74)'),
    );
    return this.renderMatrix(matrix);
  };

  render() {
    return this.renderMatrix(this.matrix);
  }
}

export default ThemeSwatch;
