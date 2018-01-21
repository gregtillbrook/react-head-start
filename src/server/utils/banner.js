import colors from './terminalColors';

//NOTE: customise banner with e.g. http://patorjk.com/software/taag/#p=display&f=Calvin%20S&t=react-head-start
export default () => {
  //NOTE: deliberately using console and not logger here so banner doesnt clutter server logs
  //eslint-disable-next-line no-console
  console.log(`${colors.cyan}
  ┬─┐┌─┐┌─┐┌─┐┌┬┐  ┬ ┬┌─┐┌─┐┌┬┐   ┌─┐┌┬┐┌─┐┬─┐┌┬┐
  ├┬┘├┤ ├─┤│   │───├─┤├┤ ├─┤ ││───└─┐ │ ├─┤├┬┘ │ 
  ┴└─└─┘┴ ┴└─┘ ┴   ┴ ┴└─┘┴ ┴─┴┘   └─┘ ┴ ┴ ┴┴└─ ┴ 
  ${colors.reset}`);
};

