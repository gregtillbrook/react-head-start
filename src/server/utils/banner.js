const ColReset = '\x1b[0m',
  FgCyan = '\x1b[36m';

//NOTE: customise banner with e.g. http://patorjk.com/software/taag/#p=display&f=Calvin%20S&t=react-head-start
export default () => {
  //NOTE: deliberately using console and not logger here so banner doesnt clutter server logs
  //eslint-disable-next-line no-console
  console.log(`${FgCyan}
  ┬─┐┌─┐┌─┐┌─┐┌┬┐  ┬ ┬┌─┐┌─┐┌┬┐   ┌─┐┌┬┐┌─┐┬─┐┌┬┐
  ├┬┘├┤ ├─┤│   │───├─┤├┤ ├─┤ ││───└─┐ │ ├─┤├┬┘ │ 
  ┴└─└─┘┴ ┴└─┘ ┴   ┴ ┴└─┘┴ ┴─┴┘   └─┘ ┴ ┴ ┴┴└─ ┴ 
  ${ColReset}`);
};

