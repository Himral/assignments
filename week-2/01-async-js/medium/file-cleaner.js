const fs = require('fs');

const filePath = '/Users/shivamgarg/Himral/100xDevs/Assignments Harkirat/assignments/week-2/01-async-js/medium/himral.txt'; // Replace 'example.txt' with your file path

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Remove extra spaces using regex
  const cleanedContent = data.replace(/\s+/g, ' ').trim();

  fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('File has been cleaned and updated successfully.');
  });
});
