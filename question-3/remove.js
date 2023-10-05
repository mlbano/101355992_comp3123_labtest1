const fs = require('fs');

// Remove all log files in the current directory
fs.readdirSync(__dirname).forEach((file) => {
  if (file.startsWith('log') && file.endsWith('.txt')) {
    console.log('delete files...'+ file);
    fs.unlinkSync(file);
  }
})