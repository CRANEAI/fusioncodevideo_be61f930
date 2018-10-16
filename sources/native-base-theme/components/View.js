import variable from "./../variables/platform";

export default (variables = variable) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    ".innerpad": {
      padding: variables.viewPadding
    }
  };

  return viewTheme;
};
