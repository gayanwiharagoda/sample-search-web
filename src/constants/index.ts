import {SearchFilterProps} from "../types"

export const ACTION_TYPE = {
  SET_FETCH_QUERY: "SET_FETCH_QUERY",
  INITIATE_FETCHING: "INITIATE_FETCHING",
  SUCCESS_FETCH: "SUCCESS_FETCH",
  ERROR_FETCH: "ERROR_FETCH"
};


export const searchFilterValue: SearchFilterProps  = {
  dischargesRange: [0, 1],
  avarageCoverChargeRange: [0, 1],
  averageMedicarePaymentRange: [0, 1]
} 