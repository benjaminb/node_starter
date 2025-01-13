const path = require('path');

// This is the project root directory's absolute path
module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename); // alternative
