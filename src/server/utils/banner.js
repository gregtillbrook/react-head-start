const ColReset = '\x1b[0m',
  FgCyan = '\x1b[36m';

//TODO: customise banner with e.g. http://patorjk.com/software/taag/ (Calvin S)
export default () => {
  //note: deliberately using console and not logger here so banner doesnt clutter server logs
  //eslint-disable-next-line no-console
  console.log(`${FgCyan}
  ┬─┐┌─┐┌─┐┌─┐┌┬┐  ┬ ┬┌─┐┌─┐┌┬┐   ┌─┐┌┬┐┌─┐┬─┐┌┬┐
  ├┬┘├┤ ├─┤│   │───├─┤├┤ ├─┤ ││───└─┐ │ ├─┤├┬┘ │ 
  ┴└─└─┘┴ ┴└─┘ ┴   ┴ ┴└─┘┴ ┴─┴┘   └─┘ ┴ ┴ ┴┴└─ ┴ 
${ColReset}`);
};

