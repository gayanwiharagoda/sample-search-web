import dataFetchReducer from "./dataFetchReducer";
import { ACTION_TYPE } from "../constants";

describe("dataFetchReducer", () => {
  it("set query", () => {
    const state = {};
    const payload = {
      dischargesRange: [0, 1000]
    };
    const response = dataFetchReducer(state, {
      type: ACTION_TYPE.SET_FETCH_QUERY,
      payload
    });

    expect(response).toEqual({ searchFilter: payload });
  });

  it("intiate fetch data", () => {
    const state = {};
    const response = dataFetchReducer(state, {
      type: ACTION_TYPE.INITIATE_FETCHING
    });

    expect(response).toEqual({
      isLoading: true,
      isError: false
    });
  });

  it("fetch data - successfylly", () => {
    const state = {};
    const payload = [
      {
        name: "test"
      }
    ];
    const response = dataFetchReducer(state, {
      type: ACTION_TYPE.SUCCESS_FETCH,
      payload
    });

    expect(response).toEqual({
      isLoading: false,
      isError: true,
      ippsProvidersList: payload
    });
  });

  it("intiate fetch error", () => {
    const state = {};
    const response = dataFetchReducer(state, {
      type: ACTION_TYPE.ERROR_FETCH
    });

    expect(response).toEqual({
      isLoading: false,
      isError: true
    });
  });
});
