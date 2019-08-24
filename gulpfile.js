const gulp = require('gulp');
const chat = require("./SubProjects/FrontEnd/chat/gulpfile");
const ViewHTML5MediaRecordDataAsStream = require("./SubProjects/FrontEnd/ViewHTML5MediaRecordDataAsStream/gulpfile");

global.BUILD_MODE = 'development';

exports.default = gulp.series(chat.default, ViewHTML5MediaRecordDataAsStream.default);