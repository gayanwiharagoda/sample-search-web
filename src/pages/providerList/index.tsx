import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import "antd/dist/antd.css";

import PppsProviderList from "../../components/PppsProviderList";
import SearchFilter from "../../components/SearchFilter";
import { generateQuery } from "../../utils";
import { ACTION_TYPE, searchFilterValue } from "../../constants";
import { dataFetchReducer } from "../../reducers";
import { SearchFilterProps } from "../../types";
import config from "../../config";

import "./style.css";

const initialValue = {
  dischargesRange: [1, 1000],
  avarageCoverChargeRange: [1, 1000],
  averageMedicarePaymentRange: [1, 1000]
}

/**
 * Enhasmenent
 * Loding view and pagination for data loading
 */
const ProviderSeachPage = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    ippsProvidersList: [],
    searchFilter: initialValue
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: ACTION_TYPE.INITIATE_FETCHING });
      try {
        const query = generateQuery(state.searchFilter);
        const result = await axios(`${config.BASE_URL}?${query}`);
        dispatch({ type: ACTION_TYPE.SUCCESS_FETCH, payload: result.data });
      } catch (error) {
        dispatch({ type: ACTION_TYPE.ERROR_FETCH });
      }
    };

    fetchData();
  }, [state.searchFilter]);

  return (
    <>
      <SearchFilter
        onSubmit={(searchFilter: SearchFilterProps) => {
          dispatch({
            type: ACTION_TYPE.SET_FETCH_QUERY,
            payload: searchFilter
          });
        }}
        initialValue = {
          state.searchFilter
        }
      />
      <div className="container result-table-container">
        <PppsProviderList data={state.ippsProvidersList} />
      </div>
    </>
  );
};

export default ProviderSeachPage;
