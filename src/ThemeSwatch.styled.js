let styled = () => 'Please Provide styled function';

export const setStyled = fn => {
  styled = fn;
};
export const styledComponents = () => {
  const Paper = styled.div(({ size }) => ({
    borderRadius: '10%',
    overflow: 'hidden',
    width: size || '100%',
    height: size || '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }));

  const Row = styled.div({
    display: 'flex',
    width: '100%',
    height: 1,
    flexGrow: 1,
  });

  const Pixel = styled.div({
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    height: '100%',
    borderRight: '1px inset rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  });

  return { Paper, Row, Pixel };
};
