"use strict";

  const parse = require('csv-parse');
  const fs = require('fs');
  (async () => {

    const filePath = process.argv[2],
          fieldIndex = Number(process.argv[3]),
          fieldMatch = process.argv[4],
          stream = fs.createReadStream('home/testuser/input.csv');

    for await (const record of stream.pipe(parse())) {
      if (record[fieldIndex] === fieldMatch) {
        console.log(record);
      }
    }

  })().catch(console.error);
