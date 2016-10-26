/**
 * Created by i7 on 2016/10/26.
 */
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH,'dist');
var APP_PATH = path.resolve(ROOT_PATH,'script');
module.exports = {
    entry:'./script/index.js',
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    }
}