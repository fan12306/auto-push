const http = require("http")
const fs = require("fs")
const path = require("path")
const childProcess = require('child_process');
const {generatorNewOrigin, generatorOrigin} = require('./config')

function execute(cmd, args) {
    childProcess.execFile(cmd, args);
}

const resolvePost = req =>
    new Promise(resolve => {
        let chunk = "";
        req.on("data", data => {
            chunk += data;
        });
        req.on("end", () => {
            resolve(JSON.parse(chunk));
        });
    });

http.createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/') {
        const data = await resolvePost(req);
        const remoteAddress = data.repository.ssh_url;
        const newOriginConfig = generatorNewOrigin(data.repository.name, remoteAddress, 'build');
        const originConfig = generatorOrigin(data.repository.name, 'build')
        // 判断是否有项目文件夹
        const url = path.resolve(__dirname, `../../usr/local/nginx/html/code/${data.repository.name}`)
        console.log('ur', url)
        console.log('newOriginConfig', newOriginConfig)
        fs.access(url, function (err) {
            // 没有文件
            if(err) {
                execute('sh', ['test.sh', newOriginConfig.CODE_PATH, newOriginConfig.WEB_PATH, newOriginConfig.BAK_PATH, newOriginConfig.WEB_NAME,newOriginConfig.REMOTE_ADDRESS, newOriginConfig.DIST_NAME])
            }else {
                fs.access(url+'/.git', function (err) {
                    if(err) {
                        console.log('我没有git文件')
                        execute('sh', ['test.sh', newOriginConfig.CODE_PATH, newOriginConfig.WEB_PATH, newOriginConfig.BAK_PATH, newOriginConfig.WEB_NAME,newOriginConfig.REMOTE_ADDRESS, newOriginConfig.DIST_NAME])
                    }else {
                        console.log('我有git文件')
                        execute('sh', ['fan.sh', originConfig.CODE_PATH, originConfig.WEB_PATH, originConfig.BAK_PATH, originConfig.WEB_NAME, originConfig.DIST_NAME])
                    }
                })
            }
        });
        res.end('ok')
    } else {
        res.end('ok')
    }
}).listen(3001, () => {
    console.log('server is ready')
})
