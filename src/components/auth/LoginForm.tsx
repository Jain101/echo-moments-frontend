import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { AuthProps, LoginFormData } from "../../types/auth.ts";
import { AUTH_ROUTES } from "../../constants.ts";

const LoginForm: React.FC<AuthProps> = ({ onSubmit, isLoading, setIsLoading }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: LoginFormData) => {
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
          // value={form.getFieldValue("email")}
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
          // value={form.getFieldValue("password")}
        />
      </Form.Item>

      <div className="flex justify-end mb-4">
        <a
          href={AUTH_ROUTES.SIGNUP}
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </a>
      </div>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          className="w-full h-10 bg-indigo-600 hover:bg-indigo-500"
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
