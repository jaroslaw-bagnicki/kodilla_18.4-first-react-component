module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 5
    },
    "rules": {
        "indent": ["error",2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": [
            "error",
            { "max": 1, "maxBOF": 0, "maxEOF": 0 }
        ],
        "no-console": "warn",
        "no-unused-vars": "warn",
    },
    "settings": {
      "react": {
        "createClass": "createReactClass", 
        "pragma": "React",
        "version": "detect", 
        "flowVersion": "0.53"
      },
      "propWrapperFunctions": [
        "forbidExtraProps",
        {"property": "freeze", "object": "Object"},
        {"property": "myFavoriteWrapper"}
      ]
    },
    "globals": {
      "React": true,
      "ReactDOM": true
    }
};