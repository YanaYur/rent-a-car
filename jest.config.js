const path = require("path");

module.exports = {
    roots: [path.resolve(__dirname, './src')],
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    testPathIgnorePatterns: [".src/__tests__/__mocks__"],
    moduleFileExtensions: [
        "js",
        "jsx"
    ],
    moduleDirectories: [
        "node_modules",
    ],
    // important!
    moduleNameMapper: {
        "\\.(css|less|scss)$": "<rootDir>/src/__tests__/__mocks__/styleMock.js"
    }
};