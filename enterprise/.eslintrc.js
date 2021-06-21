module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    'airbnb',
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    __DEV__: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "react-hooks",
    "prettier"
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "linebreak-style": 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [
      1,
      {
      "extensions": [
        ".tsx"
      ]
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "react/react-in-jsx-scope": "off",
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
   settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
};
