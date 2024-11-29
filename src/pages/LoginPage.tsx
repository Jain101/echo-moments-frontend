import React, { useEffect } from "react";
import { Alert, Typography } from "antd";
import LoginForm from "../components/auth/LoginForm";
import SocialLogin from "../components/auth/SocialLogin";
import AuthLayout from "../components/auth/AuthLayout";
import { LoginFormData, SignupFormData } from "../types/auth.ts";
import { AUTH_ROUTES, BASE_URL, loginURL } from "../constants.ts";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

type Props = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const LoginPage: React.FC<Props> = ({setIsAuthenticated}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
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

  // if user is already authenticated and goes to login page, redirect to home page
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

  const handleLogin = async (values: LoginFormData) => {
    try {
      const { email, password } = values;
      const response = await fetch(loginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: any = await response.json();
      if (data.session && data.user) {
        // Store token if provided
        if (data.session.access_token) {
          localStorage.setItem("authToken", data.session.access_token);
        }
        console.log("Successfully logged in!");
        setIsAuthenticated(true);
        navigate("/posts");
        // showNotification("success", "Successfully logged in!");
      } else {
        throw new Error(data || "Login failed");
      }
    } catch (error: any) {
      showNotification("error", error.message || "Login failed");
      console.error("Login error:", error);
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
                Sign In
              </Title>
              <Text className="text-gray-600">Sign in to your account</Text>
            </div>

            <SocialLogin
              onGoogleLogin={handleGoogleLogin}
              // onGithubLogin={handleGithubLogin}
              isLoading={false}
              isLogin={true}
            />

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <LoginForm
              onSubmit={handleLogin}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />

            <div className="mt-6 text-center">
              <Text className="text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Register here
                </a>
              </Text>
            </div>
          </div>
        </AuthLayout>
      </div>
    </>
  );
};

export default LoginPage;
