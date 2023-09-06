import * as actionType from './AccommodationAction';
export function reducer(state, action) {
  switch (action.type) {
    case actionType.POST_VENUE_ACCOMMODATION:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
        error: null,
      };
    case actionType.EDIT_ACCOMMODATION:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
        error: null,
      };
    case actionType.DELETE_ACCOMMODATION:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
        error: null,
      };
    case actionType.BOOKING_VENUE:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
        error: null,
      };

    default:
      return state;
  }
}
