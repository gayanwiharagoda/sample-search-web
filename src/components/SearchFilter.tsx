import React from "react";
import {
  Slider,
  Switch,
  Card,
  Typography,
  Row,
  Col,
  Table,
  Form,
  Button
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import { SearchFilterProps } from "../types"

interface UserFormProps extends FormComponentProps {
  onSubmit: (values: SearchFilterProps) => void;
}

type FiledViewProps = {
  form: any;
  filedName: string;
  initialValue?: any;
  max?: number;
  fieldLabel?: string;
}

const { Text } = Typography;

const FiledView = ({
  form,
  filedName,
  initialValue,
  max,
  fieldLabel
}: FiledViewProps) => (
  <>
    <Col xs={24} lg={4}>
      <Text strong>{fieldLabel}</Text>
    </Col>
    <Col xs={24} lg={8}>
      {form.getFieldDecorator(filedName, {
        initialValue
      })(<Slider range max={max} />)}
    </Col>
  </>
);

//TODO restric any to valid type
const handleSearch = (form: any, onSubmit: (searchDetails: SearchFilterProps) => any) => (
  e: any
) => {
  e.preventDefault();
  form.validateFields((err: any, values: SearchFilterProps) => {
    onSubmit(values);
  });
};

/**
 * Enhasment
 * get the max limit from backend by openning up a services
 */
const SearcFilter = ({ form, onSubmit }: { form: any; onSubmit: any }) => (
  <Form onSubmit={handleSearch(form, onSubmit)}>
    <div className="container search-filter">
      <Row type="flex" align="middle" gutter={12}>
        <FiledView
          form={form}
          filedName={"dischargesRange"}
          fieldLabel={"Discharges"}
          initialValue={[1, 1000]}
          max={10000}
        />
        <FiledView
          form={form}
          filedName={"avarageCoverChargeRange"}
          fieldLabel={"Coverage charges"}
          initialValue={[1, 1000]}
          max={10000}
        />
        <FiledView
          form={form}
          filedName={"averageMedicarePaymentRange"}
          fieldLabel={"Avarage medicare payments"}
          initialValue={[1, 1000]}
          max={10000}
        />
        <Col xs={24}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Col>
      </Row>
    </div>
  </Form>
);

const SearcFilterForm = Form.create<UserFormProps>({ name: "searchFilters" })(
  SearcFilter
);

export default SearcFilterForm;
