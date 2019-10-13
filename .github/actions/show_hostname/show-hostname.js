const core = require('@actions/core');

try {
  console.log(`The event payload: ${process.env}`);
} catch (error) {
  core.setFailed(error.message);
}