import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { PppsProvidersProps } from "../types";

const columns = [
  {
    title: "Defination",
    dataIndex: "DRGDefinition",
    key: "DRGDefinition"
  },
  {
    title: "Provider id",
    dataIndex: "providerId",
    key: "providerId"
  },
  {
    title: "providerName",
    dataIndex: "providerName",
    key: "providerName"
  },
  {
    title: "providerStreetAddress",
    dataIndex: "providerStreetAddress",
    key: "providerproviderStreetAddressId"
  },
  {
    title: "providerCity",
    dataIndex: "providerCity",
    key: "providerCity"
  },
  {
    title: "providerState",
    dataIndex: "providerState",
    key: "providproviderStateerCity"
  },
  {
    title: "providerZipCode",
    dataIndex: "providerZipCode",
    key: "providerZipCode"
  },
  {
    title: "hospitalReferralRegionDescription",
    dataIndex: "hospitalReferralRegionDescription",
    key: "hospitalReferralRegionDescription"
  }
];

const DataTable = ({ data = [] }: { data ?: Array<PppsProvidersProps> }) => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    rowKey={"_id"}
  />
);

export default DataTable;
