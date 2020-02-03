module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:@typescript-eslint/recommended", // Use recommended rules from typescript-eslint plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows parsing of modern Ecmascript features
        sourceType: "module", // Alllows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows parsing of jsx
        },
    },
    plugins: ["prettier", "@typescript-eslint", "react"],
    settings: {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    rules: {
        "prettier/prettier": "error",
        "react/prop-types": 0,
        "react/jsx-uses-vars": [2],
        "no-console": 0,
        "react/react-in-jsx-scope": "off"
    }
};
