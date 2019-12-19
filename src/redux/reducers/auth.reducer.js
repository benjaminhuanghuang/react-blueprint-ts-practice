
let asf_auth = JSON.parse(localStorage.getItem('asf_auth'));
const initialState = {
  token: asf_auth?.token,
  isAuthed: false,
  isLoading: false,
  user: null
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...state,
        isAuthed: false,
        isLoading: true
      };
    case 'USER_LOADED':
      return {
        ...state,
        isAuthed: true,
        isLoading: false,
        user: action.payload
      };
    case 'LOGIN_LOADING':
      return {
        ...state,
        isAuthed: false,
        isLoading: true
      };
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      localStorage.setItem('asf_auth', action.payload);
      return {
        ...state,
        isAuthed: true,
        user: action.payload,
        isLoading: false
      };
    case 'LOGOUT':
    case 'AUTH_ERROR':
    case 'LOGIN_FAILED':
      localStorage.removeItem("asf_auth");
      return {
        ...state,
        isAuthed: false,
        user: null,
        isLoading: false,
        token: null
      };
    default:
      return state
  }
}