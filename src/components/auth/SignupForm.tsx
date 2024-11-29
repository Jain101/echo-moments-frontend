import { Button, Form, Input } from "antd";
import { AuthProps, SignupFormData } from "../../types/auth";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

export const SignupForm: React.FC<AuthProps> = ({onSubmit, isLoading, setIsLoading}) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: SignupFormData) => {
    setIsLoading(true);
    await onSubmit(values);
    setIsLoading(false);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className="w-full"
      requiredMark={false}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input
          prefix={<UserOutlined className="text-gray-400" />}
          placeholder="Name"
          size="large"
          className="rounded-md"
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input
          prefix={<MailOutlined className="text-gray-400" />}
          placeholder="Email address"
          size="large"
          className="rounded-md"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        className="mb-4"
      >
        <Input.Password
          prefix={<LockOutlined className="text-gray-400" />}
          placeholder="Password"
          size="large"
          className="rounded-md"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          className="w-full h-10 bg-indigo-600 hover:bg-indigo-500"
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};