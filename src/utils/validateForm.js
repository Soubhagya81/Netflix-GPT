export const validationForm =(name, email, password) =>{
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValid = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name); //

    if(!isNameValid)  return 'Name is not valid'
     
    if(!isEmailValid) return 'Email is not valid'
  
    if(!isPasswordValid) return 'Password is not valid'
  }
  