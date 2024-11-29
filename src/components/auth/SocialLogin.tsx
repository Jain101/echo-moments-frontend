import React from "react";
import { Button, Space } from "antd";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { SocialLoginProps } from "../../types/auth.ts";

const SocialLogin: React.FC<SocialLoginProps> = ({
  onGoogleLogin,
  // onGithubLogin,
  isLoading,
  isLogin
}) => {
  const logic = isLogin ? "Sign in" : "Sign up";
  return (
    <Space direction="vertical" className="w-full">
      <Button
        onClick={onGoogleLogin}
        disabled={isLoading}
        // icon={<GoogleOutlined />}
        icon={<img src="https://img.icons8.com/color/48/000000/google-logo.png" width={16} height={16}/>}
        className="w-full h-10 flex items-center justify-center border-gray-200 hover:bg-gray-50"
      >
        {logic} with Google
      </Button>
      {/* <Button
        onClick={onGithubLogin}
        disabled={isLoading}
        icon={<GithubOutlined />}
        className="w-full h-10 flex items-center justify-center border-gray-200 hover:bg-gray-50"
      >
        {logic} with Github
      </Button> */}
    </Space>
  );
};

export default SocialLogin;
