var cp = require('child_process');

// 启动一个子进程来执行命令
cp.spawn('node', ['worker.js']);
// 执行已知的命令。
// 与 spawn 不同的是传入参数多接受一个回调，可获知子进程的状况。
cp.exec('node worker.js', function(err, stdout, stderr) {});
// 与 exec 不同的是该方法是执行一个文件。
// 如果用该方法执行 JS 文件，必须在执行的 JS 文件首行添加 #!/usr/bin/env node
cp.execFile('worker.js', function(err, stdout, stderr) {});
// 复制一个进程，也是执行一个文件，但该文件为 JS 文件。
cp.fork('./workder.js');