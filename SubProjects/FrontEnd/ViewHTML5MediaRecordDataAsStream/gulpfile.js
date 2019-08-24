const gulp = require("gulp");
const webpack = require('webpack-stream');
const path = require('path');


function buildViewHTML5MediaRecordDataAsStream() {
    let mode = global.BUILD_MODE || "development";
    return gulp.src(path.join(__dirname, 'src', 'index.js'))
        .pipe(webpack({
            mode: mode,
            output: {
                filename: "app.js"
            },
            module: {
                rules: [
                    {test: /\.(html)$/, use: ["html-loader"]},
                    {test: /\.css$/, use: ['style-loader', 'css-loader']}
                ]
            }
        }))
        .pipe(gulp.dest(path.join(__dirname, '..', '..', '..', 'public', 'examples', 'ViewHTML5MediaRecordDataAsStream')));
}


exports.default = gulp.series(buildViewHTML5MediaRecordDataAsStream);