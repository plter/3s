export default {
    MIME_TYPE: 'video/webm; codecs="opus,vp8"',
    MEDIA_RECORDER_TIME_SLICE: 30,//ms，单位是毫秒
    MAX_SKIP_TIME: 0.5//当播放器当前时间延后超过该值时，则直接跳至最新时间，以保持实时。单位是秒

}