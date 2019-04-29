
const fs = require('fs-extra');
const concat = require('concat');
var { outputPath, projectName } = require('gixng');


(async function build() {
  const files = [
    `./${outputPath}/runtime.js`,
    `./${outputPath}/polyfills.js`,
    `./${outputPath}/es2015-polyfills.js`,
    `./${outputPath}/scripts.js`,
    `./${outputPath}/main.js`
  ];

  await fs.ensureDir('elements');
  await concat(files, `elements/${projectName}-elements.js`);
})();