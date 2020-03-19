import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

export default function validateInput(data) {
  let errors = {};

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