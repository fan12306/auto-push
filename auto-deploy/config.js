// 项目并不存在
function generatorNewOrigin(NAME, REMOTE_ADDRESS, DIST_NAME = 'build') {
    const newOrigin = {
        CODE_PATH: `/usr/local/nginx/html/code/${NAME}`, // 代码存放的位置；
        WEB_PATH: '/usr/local/nginx/html/v1', // 项目发布的位置；
        BAK_PATH: `/usr/local/nginx/html/bak/${NAME}`, // 代码备份的位置；
        WEB_NAME:NAME, // 项目名称；
        REMOTE_ADDRESS, // 远程仓库的地址；
        DIST_NAME, //打包后的名称（vue项目和react中的项目默认打包名称不一致）；
    }
    return newOrigin
}

// 项目已经存在
function generatorOrigin(NAME, DIST_NAME = 'build') {
    const hasOrigin = {
        CODE_PATH: `/usr/local/nginx/html/code/${NAME}`, // 代码存放的位置；
        WEB_PATH: '/usr/local/nginx/html/v1', // 项目发布的位置；
        BAK_PATH: `/usr/local/nginx/html/bak/${NAME}`, // 代码备份的位置；
        WEB_NAME: NAME, // 项目名称；
        DIST_NAME, //打包后的名称（vue项目和react中的项目默认打包名称不一致）；
    }
    return hasOrigin
}

module.exports = {
    generatorNewOrigin,
    generatorOrigin
}