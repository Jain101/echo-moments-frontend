import React, { useState, useEffect } from "react";
import { Card, Button, Typography, Badge, Tooltip } from "antd";
import {
  CrownOutlined,
  RightOutlined,
  StarOutlined,
  HeartOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SubscriptionCTA: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("subscription-cta");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features: Feature[] = [
    {
      icon: <StarOutlined className="text-yellow-400" />,
      title: "Ad-free Experience",
      description: "Enjoy seamless storytelling without interruptions",
    },
    {
      icon: <CrownOutlined className="text-yellow-400" />,
      title: "Advanced Formatting",
      description: "Create rich, engaging stories with premium tools",
    },
    {
      icon: <HeartOutlined className="text-yellow-400" />,
      title: "Analytics Dashboard",
      description: "Track your story's performance and reach",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20" id="subscription-cta">
      <Card
        className={`bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-600 overflow-hidden relative transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 animate-pulse">
            <StarOutlined className="text-9xl text-white transform rotate-12" />
          </div>
          <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 animate-pulse delay-150">
            <HeartOutlined className="text-9xl text-white transform -rotate-12" />
          </div>
        </div>

        {/* Content wrapper */}
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <div className="text-white space-y-4">
              <div className="space-y-4">
                <Badge.Ribbon
                  text="Premium Features"
                  color="gold"
                  className="animate-bounce"
                >
                  <Title
                    level={1}
                    className="text-white mb-4 leading-tight"
                    style={{
                      fontFamily: '"Poppins", "sans-serif"',
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      textAlign: "left",
                      // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Transform Your Stories into
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                      Unforgettable Moments
                    </span>
                  </Title>
                </Badge.Ribbon>
                <Paragraph className="text-white/90 text-lg leading-relaxed">
                  Join our Creators Tier to unlock premium features and connect
                  with a wider audience. Share your stories in ways you never
                  imagined possible.
                </Paragraph>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transform transition-all duration-500 delay-${
                      index * 200
                    } ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="mt-1 bg-white/10 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <div className="space-y-1">
                      <Text className="text-white font-medium block">
                        {feature.title}
                      </Text>
                      <Text className="text-white/80 text-sm block">
                        {feature.description}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Pricing card */}
            <div className="relative">
              <Card
                className={`bg-white/10 backdrop-blur-lg border-0 transform transition-all duration-700 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center space-y-4">
                  <div>
                    <Badge
                      count={
                        <span className="px-3 py-1 bg-yellow-400 text-purple-700 text-xs font-medium rounded-full">
                          Limited Time Offer
                        </span>
                      }
                      // className="mb-4"
                    >
                      <Title
                        level={2}
                        className="text-white"
                        style={{
                          fontFamily: '"Poppins", "sans-serif"',
                          fontSize: "2.5rem",
                          fontWeight: 800,
                          color: "#ffffff",
                          textAlign: "left",
                          // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        Creator's Tier
                      </Title>
                    </Badge>
                  </div>

                  <div className="">
                    <Text className="text-white/60 block">Starting from</Text>
                    <div className="flex items-center justify-center">
                      <Text className="text-white text-5xl font-bold">
                        <span className="text-3xl font-medium">₹</span>29
                      </Text>
                      <Text className="text-white/60 ml-2">/month</Text>
                      <Tooltip title="Billed annually. Monthly billing also available.">
                        <QuestionCircleOutlined className="ml-2 text-white/60 cursor-pointer hover:text-white transition-colors" />
                      </Tooltip>
                    </div>
                  </div>

                  <Button
                    type="primary"
                    size="large"
                    className="w-full h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 border-none hover:opacity-90 transform hover:scale-105 transition-all duration-300 font-medium text-lg flex items-center justify-center group"
                    onClick={() => navigate("/pricings")}
                  >
                    <span className="group-hover:mr-4 transition-all duration-300">
                      Get Started Today
                    </span>
                    {/* <RightOutlined className="opacity-0 group-hover:opacity-100 absolute ml-2 transition-all duration-300" /> */}
                  </Button>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-white/80 space-x-2">
                      <CheckCircleOutlined className="text-green-400" />
                      <Text className="text-white/80">
                        30-day money-back guarantee
                      </Text>
                    </div>
                    <Text className="text-white/60 block text-sm">
                      No credit card required • Cancel anytime
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SubscriptionCTA;
