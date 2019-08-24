const gulp = require("gulp");
const webpack = require('webpack-stream');
const path = require('path');

function buildChat() {
    let mode = global.BUILD_MODE || "development";
    return gulp.src(path.join(__dirname, 'src', 'app.js'))
        .pipe(webpack({
            mode: mode,
            output: {
                filename: "chat.js"
            },
            module: {
                rules: [
                    {test: /\.(html)$/, use: ["html-loader"]},
                    {test: /\.css$/, use: ['style-loader', 'css-loader']}
                ]
            }
        }))
        .pipe(gulp.dest(path.join(__dirname, '..', '..', '..', 'public', 'examples', 'chat')));
}


exports.default = gulp.series(buildChat);