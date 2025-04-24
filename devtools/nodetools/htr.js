const fs = require('fs');

const hexToRgba = (hex) => {
  hex = hex.replace('#', '');
  let r, g, b, a = 1;

  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else if (hex.length === 8) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    a = (parseInt(hex.substring(6, 8), 16) / 255).toFixed(2);
  }

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// 读取input.css
const cssContent = fs.readFileSync('input.css', 'utf8');
const lines = cssContent.split(/\r?\n/);

const output = [];

const varRegex = /^\s*(--[\w-]+):\s*(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8}))\s*;/;

for (let line of lines) {
  output.push(line);
  const match = line.match(varRegex);
  if (match) {
    const varName = match[1];
    const hexValue = match[2];
    const rgbaValue = hexToRgba(hexValue);
    output.push(`  ${varName}-rgba: ${rgbaValue};`);
  }
}

// output.css
fs.writeFileSync('output.css', output.join('\n'), 'utf8');