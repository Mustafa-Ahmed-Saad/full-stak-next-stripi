import navType from './nav.type';

const initialState = {
  // color of nav
  isDark: true,
};

const NavReducer = (state = initialState, action) => {
  switch (action.type) {
    case navType.CHANGE_NAVBAR_COLOR:
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
};

export default NavReducer;
