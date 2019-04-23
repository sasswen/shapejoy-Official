module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "standard",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "parser": "typescript-eslint-parser",
    "rules": {
        "space-before-function-paren": ["error", "never"],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    plugins: [
      'html',  //插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
    ],
};
