module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    "jest": true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  // 0：off, 1: warning, 2: error
  'rules': {
    "indent": [2, 4],
    "linebreak-style": [2, "unix"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "require-jsdoc": [1, {
        "require": {
            "FunctionDeclaration": true, // declare hooks which require jsdoc
            "FunctionExpression": false,
            "ArrowFunctionExpression": false,
            "MethodDefinition": false,
            "ClassDeclaration": false
        }
    }],
    "valid-jsdoc": [1, {
        "requireParamDescription": true,
        "requireParamType": false, // paramType can be declared with ts
        "requireReturnType": false, // returnType can be declared with ts
        "requireReturnDescription": true

    }],
    "comma-dangle": [2, "never"],
    "max-len": [1, {
        "code": 100,
        "ignoreComments": true

    }],
    "react/prop-types": 0, // prop-types can be valid by ts
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2
  },
};
