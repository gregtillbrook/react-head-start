module.exports = {
  //need babel-eslint to allow class static props
  "parser": "babel-eslint",
  "extends": [ "eslint:recommended", "plugin:react/recommended" ],
  "plugins": [ "react", "jest" ],
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jest/globals": true
  },
  "globals":{
    //unit tests
    "expect":true,
    "shallow":true,
    "render":true,
    "mount":true,
    "jest":true,
    "beforeAll":true,
    //e2e tests
    "cy":true,
  },
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "rules": {
      //general
      "indent": [ "error", 2 ],
      "quotes": [ "error", "single" ],
      "semi": [ "error", "always" ],
      "no-console": ["error", { allow: ["warn", "error"] }],
      //react
      "react/react-in-jsx-scope": "off",
      //jest
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error"
  }
};