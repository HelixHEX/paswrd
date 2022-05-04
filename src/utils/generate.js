/**
 * It takes a number as an argument, and returns a string of random characters of that length
 * @param length - The length of the password you want to generate.
 * @returns A string of random characters.
 */
const generatePassword = (length) => {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=[]{}|;:,./<>?~';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += str[Math.floor(Math.random() * str.length)];
  }
  return password;
}

module.exports = {
  generatePassword
}