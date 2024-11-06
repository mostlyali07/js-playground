"use client";
import { useRouter } from "next/navigation";
import { Form, Input, Select, DatePicker, Checkbox, Button } from "antd";
const { Option } = Select;

const Page = () => {
  const [form] = Form.useForm();
  let router = useRouter();

  const onFinish = (values) => {
    let json = JSON.stringify(values);
    let parse = JSON.parse(json);
    localStorage.setItem("Expenses", parse);
    console.log("Form values:", json);
    form.resetFields();
    setTimeout(() => {
      router.push("/view-expenses");
    }, 2000);
  };

  return (
    <>
      <div className="h-[100vh] w-auto flex items-center justify-center">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="w-[600px] bg-white p-7 rounded-2xl"
        >
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker
              placeholder="Select Date"
              style={{ width: "100%" }}
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Please enter an amount" }]}
          >
            <Input placeholder="Amount" type="number" size="large" min={0} />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select a category" }]}
          >
            <Select placeholder="Select Category" size="large">
              <Option value="food">Food</Option>
              <Option value="transportation">Transportation</Option>
              <Option value="housing">Housing</Option>
              <Option value="entertainment">Entertainment</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Payment Method"
            name="paymentMethod"
            rules={[
              { required: true, message: "Please select a payment method" },
            ]}
          >
            <Select placeholder="Select Payment Method" size="large">
              <Option value="cash">Cash</Option>
              <Option value="creditCard">Credit Card</Option>
              <Option value="debitCard">Debit Card</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Tags" name="tags">
            <Checkbox.Group>
              <Checkbox value="work-related">Work-Related</Checkbox>
              <Checkbox value="personal">Personal</Checkbox>
              <Checkbox value="emergency">Emergency</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Page;
