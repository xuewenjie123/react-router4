module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true, 
        "node": true,
        "commonjs":true
    },
    "extends":[
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": "off"
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
            "jsx": true,
            "experimentalObjectRestSpread": true,
             // 解构赋值  
            "destructuring": true,
            "spread": true,
            "restParams": true,
          }
    }
};