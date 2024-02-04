const fs = require('node:fs/promises');
const path = require('node:path');

const watchFile = path.join(process.cwd(), 'src', 'index.html');
const inputFile = path.join(process.cwd(), 'src', 'input.css');

let lastChange = 0;

(async () => {
  try {
    const watcher = fs.watch(watchFile);
    for await (const event of watcher) {
      if (event.eventType === 'change') {
        if (Date.now() > lastChange || lastChange === 0) {
          lastChange = Date.now();
          await new Promise((resolve) => {
            return setTimeout(async () => {
              await fs.appendFile(inputFile, ' ');
              return resolve();
            }, 200);
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
})();
