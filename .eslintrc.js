'use strict';

module.exports = {
  "extends": ["airbnb"],

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },

  "plugins": [ "react", "import" ],

  "env": {
    "browser": true
  },

  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },

};
