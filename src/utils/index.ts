import queryString from "query-string";

import { SearchFilterProps, SearchFilterPairProps } from "../types";
import { searchFilterValue } from "../constants";

const getSingleLimitMap = (
  [min, max]: SearchFilterPairProps,
  baseKey: string
) => {
  let limitMap: any = {};
  limitMap[`min_${baseKey}`] = min;
  limitMap[`max_${baseKey}`] = max;
  return limitMap;
};

export const generateQuery = (
  values: SearchFilterProps = searchFilterValue
) => {
  const dischargesRange = getSingleLimitMap(
    values.dischargesRange,
    "discharges"
  );
  const avarageCoverChargeRange = getSingleLimitMap(
    values.avarageCoverChargeRange,
    "average_covered_charges"
  );
  const averageMedicarePaymentRange = getSingleLimitMap(
    values.averageMedicarePaymentRange,
    "average_medicare_payments"
  );

  return queryString.stringify({
    ...dischargesRange,
    ...avarageCoverChargeRange,
    ...averageMedicarePaymentRange
  });
};
