// Shared types

export type PppsProvidersProps = {
  _id: string;
  DRGDefinition: string;
  providerId: string;
  providerName: string;
  providerStreetAddress: string;
  providerCity: string;
  providerState: string;
  providerZipCode: string;
  hospitalReferralRegionDescription: string;
  totalDischarges: number;
  averageCoveredCharges: string;
  averageTotalPayments: string;
  averageMedicarePayments: string;
};

export type SearchFilterPairProps = number[]

export type SearchFilterProps = {
  dischargesRange: SearchFilterPairProps,
  avarageCoverChargeRange: SearchFilterPairProps,
  averageMedicarePaymentRange: SearchFilterPairProps
}

export type DataFetchReducerProps = {
  isLoading?: boolean,
  isError?: boolean,
  ippsProvidersList?: Array<PppsProvidersProps>,
  searchFilter: SearchFilterProps
}


export type ActionProps = {
  type: string,
  payload?: any
}