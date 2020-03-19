import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

export default function validateInput(data:any) {
  let errors = {
    username:'',
    password:''
  };

  if (validator.isEmpty(data.username)) {
    errors.username = 'User name is requried';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is requried';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}