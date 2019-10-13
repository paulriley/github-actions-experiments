const core = require('@actions/core');
const os = require('os');

try {
  console.log(`The event payload: ${os.hostname}`);
} catch (error) {
  core.setFailed(error.message);
}