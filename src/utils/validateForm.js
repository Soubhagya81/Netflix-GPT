export function validationForm(email, password) {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  //const isNameValid = /^([a-zA-Z]+)\s([a-zA-Z]+)$/.test(name); // Uncommented and simplified the regex for names

  //if (!isNameValid) return 'Name is not valid';
  if (!isEmailValid) return 'Email is not valid';
  if (!isPasswordValid) return 'Password is not valid';

  return null;
}
  