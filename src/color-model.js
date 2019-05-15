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

const fields_4_colors = {
  main: [0, 15],
  accent: [8, 15],
  text: [7, 7],
  background: [15, 15],
};

const fillPixels = (matrix, fields, theme) => {
  console.debug()
  const filledMatrix = [...matrix];
  const keys = Object.keys(fields);
  keys.forEach(key => {
    const keyFields = fields[key];
    const keyLength = keyFields[1] - keyFields[0] + 1;
		console.log("TCL: fillPixels -> keyLength",key, keyLength)
    const colorRow = theme[key].slice(0, keyLength);
		console.log("TCL: fillPixels -> theme[key]",key, theme[key])
		console.log("TCL: fillPixels -> colorRow", colorRow)
    const colorLength = colorRow.length;
    const [start, end] = keyFields;
    colorRow.forEach((color, ind) => {
      const [i, j] = pixelsOrder[ind + start];
      filledMatrix[i][j] = color;
    });
  });

  return filledMatrix;
};

export const createMatrix = theme => {
  const { main, text, accent, background } = theme;
  const matrix = new Array(4).fill(new Array(4).fill(main[0]));
  const colorsNumber =
    main.length + text.length + accent.length + background.length;

  const filledMatrix = fillPixels(matrix, fields_4_colors, theme);
  return filledMatrix;
};
