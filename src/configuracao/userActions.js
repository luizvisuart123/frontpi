export const login = (username, password) => {
    return {
      type: 'LOGIN',
      payload: { username, password },
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  