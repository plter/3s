const gulp = require('gulp');
const chat = require("./SubProjects/FrontEnd/chat/gulpfile");

global.BUILD_MODE = 'development';

exports.default = gulp.series(chat.default);