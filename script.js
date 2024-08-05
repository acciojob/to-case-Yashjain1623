function toCase(str) {
  // Check if the input string is empty
  if (str.length === 0) {
    return '-';
  }
  
  // Convert the string to lowercase and uppercase
  const lowerCaseStr = str.toLowerCase();
  const upperCaseStr = str.toUpperCase();
  
  // Return the formatted string with '-' as the delimiter
  return `${lowerCaseStr}-${upperCaseStr}`;
}

const text = prompt("Enter text:");
alert(toCase(text));
