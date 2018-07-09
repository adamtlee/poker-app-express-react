const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: 30000
});

const testFiles = [
  './post.js',
  //'./get.js',
  //'./patch.js',
  './delete.js'
];

testFiles.forEach(e => {
  mocha.addFile(e);
});

// Run the tests.
mocha.run().on('end', () => {

  process.stdout.write('Tests complete\n');
  process.exit(0);
});