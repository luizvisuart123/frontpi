const initialState = {
    // Defina o estado inicial aqui
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      // Adicione casos para cada tipo de ação que você precisa gerenciar
      default:
        return state;
    }
  }
  
  export default rootReducer;
  