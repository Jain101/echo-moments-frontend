import React, { useEffect, useState } from "react";
import { Alert, Typography } from "antd";
import { SignupForm } from "../components/auth/SignupForm";
import SocialLogin from "../components/auth/SocialLogin";
import AuthLayout from "../components/auth/AuthLayout";
import { LoginFormData, SignupFormData } from "../types/auth.ts";
import { useNavigate } from "react-router-dom";
import { signupURL } from "../constants.ts";

const { Title, Text } = Typography;

type Props = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

export const SignupPage:React.FC<Props> = ({setIsAuthenticated}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = React.useState<{
    is: boolean;
    type: "success" | "info" | "warning" | "error" | undefined;
    message: string;
    icon: boolean;
  }>({
    is: false,
    type: undefined,
    message: "",
    icon: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
      navigate("/posts");
    }
  }, []);

  const showNotification = (
    type: "success" | "info" | "warning" | "error" | undefined,
    message: string
  ) => {
    setNotification({
      is: true,
      type: type,
      message: message,
      icon: true,
    });
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ is: false, type: undefined, message: "", icon: false });
    }, 3000);
  };

  const handleSignup = async (values: SignupFormData) => {
    try {
      const { email, password, name } = values;
      // Implement signup
      const response = await fetch(signupURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: any = await response.json();
      if (data.user) {
        if (!data.session)
          throw new Error("User already exists. Please login.");
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        // showNotification("success", "Successfully signed up!");
        navigate("/login");
      } else {
        throw new Error(data || "Signup failed");
      }
    } catch (error: any) {
      console.log(error);
      showNotification("error", error.message || "Signup failed");
    }
  };

  const handleGoogleLogin = async () => {
    // Implement Google login
    console.log("Google login");
  };

  // const handleGithubLogin = async () => {
  //   // Implement Github login
  //   console.log("Github login");
  // };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {notification.is && (
          <Alert
            className="fixed top-4 right-8 p-4 rounded-sm shadow-lg text-green transform transition-transform duration-300 ease-in-out w-80 h-12"
            message={notification.message}
            type={notification.type}
            showIcon={notification.icon}
          />
        )}
        <AuthLayout>
          {/* show signin or signup  */}
          <div className="w-full max-w-md mx-auto px-6">
            <div className="text-center mb-8">
              <Title level={2} className="!mb-2">
                Sign Up
              </Title>
              <Text className="text-gray-600">Create your account</Text>
            </div>

            <SocialLogin
              onGoogleLogin={handleGoogleLogin}
              // onGithubLogin={handleGithubLogin}
              isLoading={false}
              isLogin={false}
            />

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <SignupForm
              onSubmit={handleSignup}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />

            <div className="mt-6 text-center">
              <Text className="text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Sign in here
                </a>
              </Text>
            </div>
          </div>
        </AuthLayout>
      </div>
    </>
  );
};
