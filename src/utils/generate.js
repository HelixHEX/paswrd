const generatePassword = (options) => {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=[]{}|;:,./<>?~';
  let password = '';
  for (let i = 0; i < 9; i++) {
    password += str[Math.floor(Math.random() * str.length)];
  }
  return password;
}

module.exports = {
  generatePassword
}