const fs = require('fs');
const path = require('path');

// Parse CSV with multiline fields (quoted fields can contain newlines)
function parseCSV(text) {
  const rows = [];
  let current = '';
  let inQuotes = false;
  const lines = text.split('\n');
  
  for (const line of lines) {
    if (inQuotes) {
      current += '\n' + line;
      if (line.includes('"')) {
        // Count quotes to determine if we're still in a quoted field
        const quoteCount = (current.match(/"/g) || []).length;
        if (quoteCount % 2 === 0) {
          inQuotes = false;
          rows.push(current);
          current = '';
        }
      }
    } else {
      if ((line.match(/"/g) || []).length % 2 !== 0) {
        inQuotes = true;
        current = line;
      } else {
        if (line.trim()) rows.push(line);
      }
    }
  }
  if (current) rows.push(current);
  
  return rows.map(row => {
    const fields = [];
    let field = '';
    let inQ = false;
    for (let i = 0; i < row.length; i++) {
      const ch = row[i];
      if (ch === '"') {
        inQ = !inQ;
      } else if (ch === ',' && !inQ) {
        fields.push(field.trim().replace(/\r/g, ''));
        field = '';
      } else {
        field += ch;
      }
    }
    fields.push(field.trim().replace(/\r/g, ''));
    return fields;
  });
}

const csvText = fs.readFileSync(path.join(__dirname, 'data.csv'), 'utf-8');
const parsed = parseCSV(csvText);
const headers = parsed[0];
const data = parsed.slice(1).map(row => {
  const obj = {};
  headers.forEach((h, i) => {
    obj[h] = row[i] || '';
  });
  return obj;
});

console.log(`Parsed ${data.length} cards`);
console.log('Headers:', headers);
console.log('Sample:', JSON.stringify(data[0], null, 2));

fs.writeFileSync(
  path.join(__dirname, 'frontend', 'src', 'data.json'),
  JSON.stringify(data, null, 2),
  'utf-8'
);
console.log('Written to frontend/src/data.json');
