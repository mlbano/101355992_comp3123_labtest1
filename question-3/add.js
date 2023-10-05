const fs = require('fs');
const path = require('path');

const logsDirectory = 'Logs';


if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory);

for (let i = 0; i < 10; i++) {
  const filename = 'log' + i + '.txt';
  const content = 'Log file ' + i;

  fs.writeFileSync(filename, content);
  console.log(filename);
}