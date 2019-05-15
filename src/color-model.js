// const themePreview = theme => ({
//   main: [theme.mainColor],
//   text: [theme.textColor],
//   accent: [],
//   background: [theme.backgroundColor],
// });

const pixelsOrder = [
  [1, 1],
  [1, 2],
  [1, 0],
  [0, 0],

  [0, 1],
  [1, 3],
  [0, 3],
  [0, 2],

  [2, 1],
  [2, 2],
  [2, 3],
  [3, 3],

  [3, 2],
  [2, 0],
  [3, 0],
  [3, 1],
];

export const fields_4_colors = {
  main: [0, 15],
  accent: [8, 15],
  text: [7, 7],
  background: [15, 15],
};

export const pickColorFromRow = (colorRow, pixelsRow, ind) => {
  if (colorRow.length === 0) return null;
  if (colorRow.length === 1 || pixelsRow.length === 1) return colorRow[0];
  if (colorRow.length === 2) {
    if (ind < 2) return colorRow[0];
    return colorRow[1];
  }
  if (colorRow.length === 3) {
    if (ind < 2) return colorRow[0];
    if (ind < 5) return colorRow[1];
    return colorRow[2];
  }
  if (colorRow.length > ind) return colorRow[ind];
  return colorRow[0];
};

export const fillPixels = (fields, theme) => {
  const filledMatrix = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
  const keys = Object.keys(theme);
  keys.forEach(key => {
    const keyFields = fields[key];
    const keyLength = keyFields[1] - keyFields[0] + 1;
    const colorRow = theme[key].slice(0, keyLength);
    const colorLength = colorRow.length;
    const [start, end] = keyFields;
    const pixelsRow = pixelsOrder.slice(start, end + 1);
    console.log('pixelsRow', key, colorRow[0], pixelsRow);
    pixelsRow.forEach(([i, j], ind) => {
      const color = pickColorFromRow(colorRow, pixelsRow, ind);
      if (color) {
        filledMatrix[i][j] = color;
      }
    });
    console.log('filledMatrix', filledMatrix);
  });

  return filledMatrix;
};

export const createMatrix = theme => {
  const { main, text, accent, background } = theme;
  const matrix = new Array(4).fill(new Array(4).fill(main[0]));
  // const colorsNumber =
  //   main.length + text.length + accent.length + background.length;

  const filledMatrix = fillPixels(fields_4_colors, theme);
  return filledMatrix;
};
