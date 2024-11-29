import React from "react";
import { Card, Button, Typography, Space, Badge } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

const Pricings = () => {
  const tiers: PricingTier[] = [
    {
      name: "Free Tier",
      // put a ruppee sign here
      price: "₹0/month",
      features: [
        "Read shared moments",
        "Basic search functionality",
        "Create profile",
        "Follow other users",
        "Limited story views",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Creators Tier",
      price: "₹29/month",
      features: [
        "Share unlimited stories",
        "Advanced story formatting",
        "Custom profile themes",
        "Priority support",
        "Analytics dashboard",
        "Ad-free experience",
      ],
      buttonText: "Upgrade Now",
      highlighted: true,
    },
    {
      name: "Upcoming Tier",
      price: "Coming Soon",
      features: [
        "AI-powered story suggestions",
        "Exclusive community events",
        "Early access features",
        "Verified creator badge",
        "Premium story templates",
        // "Direct messaging",
      ],
      buttonText: "Join Waitlist",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Title level={1} className="text-purple-600">
            Choose Your Plan
          </Title>
          <Text className="text-lg text-gray-600">
            Share your moments, connect with others, and create lasting memories
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Badge.Ribbon
              key={tier.name}
              text="Most Popular"
              color="#6366F1"
              className={`${!tier.highlighted && "hidden"}`}
            >
              <Card
                className={`h-full ${
                  tier.highlighted
                    ? "border-2 border-purple-500 shadow-xl"
                    : "border border-gray-200"
                }`}
                bodyStyle={{ padding: "24px" }}
              >
                <div className="text-center mb-6">
                  <Title level={3} className="text-gray-900">
                    {tier.name}
                  </Title>
                  <Title level={2} className="text-purple-600 mt-4">
                    {tier.price}
                  </Title>
                </div>

                <Space
                  direction="vertical"
                  size="middle"
                  className="w-full mb-6"
                >
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckOutlined className="text-purple-500 mr-2" />
                      <Text className="text-gray-600">{feature}</Text>
                    </div>
                  ))}
                </Space>

                <Button
                  type={tier.highlighted ? "primary" : "default"}
                  size="large"
                  block
                  className={`mt-4 ${
                    tier.highlighted
                      ? "bg-purple-600 hover:bg-purple-700 border-purple-600"
                      : "bg-purple-100 text-purple-600 hover:bg-purple-200 border-purple-200"
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </Card>
            </Badge.Ribbon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricings;
