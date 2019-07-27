import { ACTION_TYPE } from "../constants";
import { DataFetchReducerProps, ActionProps } from "../types";

const dataFetchReducer = (
  state: DataFetchReducerProps,
  action: ActionProps
): DataFetchReducerProps => {
  switch (action.type) {
    case ACTION_TYPE.SET_FETCH_QUERY:
      return {
        ...state,
        searchFilter: action.payload
      };
    case ACTION_TYPE.INITIATE_FETCHING:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case ACTION_TYPE.SUCCESS_FETCH:
      return {
        ...state,
        isLoading: false,
        isError: true,
        ippsProvidersList: action.payload
      };
    case ACTION_TYPE.ERROR_FETCH:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default :
      return state
  }
};

export default dataFetchReducer;
