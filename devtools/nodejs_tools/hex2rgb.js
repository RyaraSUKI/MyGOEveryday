// simple hex to rgb tool RyaraSUKI
// RGB LINES ONLY , COVERTED FILE WITH NO HEX VARS
// ensure named file 'input.css' exists
const fs = require('fs');

// hex to rgb only 'r, g, b'
const hexToRgb = (hex) => {
  hex = hex.replace('#', '');
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length >= 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  return `${r}, ${g}, ${b}`;
};

// read and process css
const cssContent = fs.readFileSync('input.css', 'utf8');
const lines = cssContent.split(/\r?\n/);

let output = [];

const varRegex = /^(\s*)(--[\w-]+):\s*(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8}))\s*;/;

// output rgb lines only
for (const line of lines) {
  const match = line.match(varRegex);
  if (match) {
    const rgb = hexToRgb(match[3]);
    output.push(`${match[1]}${match[2]}-rgb: ${rgb};`);
  } else {
    output.push(line);
  }
}

fs.writeFileSync('output.css', output.join('\n'), 'utf8');