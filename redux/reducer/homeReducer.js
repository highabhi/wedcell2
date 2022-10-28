let initialState = {
  errors: {},
  mehndi: [],
  hotel: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MEHNDI":
      return {
        ...state,
        loading: true,
        errors: {},
      };

    case "FETCH_MEHNDI":
      return {
        ...state,
        mehndi: action.payload.data,
      };
    case "MEHNDI_REJECTED":
      state = {
        ...state,
        loading: false,
        errors: action.payload,
      };
      break;

    case "HOTEL":
      return {
        ...state,
        loading: true,
        errors: {},
      };

    case "FETCH_HOTEL":
      return {
        ...state,
        hotel: action.payload.data,
      };
    case "HOTEL_REJECTED":
      return {
        ...state,
        errors: action.payload,
      };
    case "ASSOCIATION":
      return {
        ...state,
        loading: true,
        errors: {},
      };

    case "ASSOCIATION_FULFILLED":
      return {
        ...state,
        loading: false,
        association: action.payload.associations,
      };

    case "ASSOCIATION_REJECTED":
      return {
        ...state,
        loading: false,
        errors: action.payload.data,
      };
    case "SETTING":
      return {
        ...state,
        setting: {},
      };
    case "SETTING_FULFILLED":
      return {
        ...state,
        setting: action.payload,
      };
    case "SETTING_REJECTED":
      return {
        ...state,
        isLoadingProfessionalEpisodes: false,
        isLoadingIndustrialSolutions: false,
        isLoadingSchemes: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
