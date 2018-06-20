const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: 30000
});

const testFiles = [
  './post.js',
//   'tests/api/cell.js',
//   'tests/api/column.js',
//   'tests/api/columnDropdownList.js',
//   'tests/api/csv.js',
//   'tests/api/json.js',
//   'tests/api/rss.js',
//   'tests/api/row',
//   'tests/api/table.js'
];

testFiles.forEach(e => {
  mocha.addFile(e);
});

// Run the tests.
mocha.run().on('end', () => {

  process.stdout.write('Tests complete\n');
  process.exit(0);
});