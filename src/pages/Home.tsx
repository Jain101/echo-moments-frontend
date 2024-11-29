import React, { useState } from "react";
import {
  Button,
  Typography,
  Card,
  Avatar,
  Carousel,
  Menu,
  Drawer,
  Modal,
  Form,
  Input,
} from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  UserOutlined,
  ArrowRightOutlined,
  StarOutlined,
  MenuOutlined,
  BellOutlined,
  SearchOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import SubscriptionCTA from "../components/SubsriptionCTA";
import { useNavigate } from "react-router-dom";
import { VscQuote } from "react-icons/vsc";
import { Footer } from "../components/homepage/Footer";

const { Title, Text, Paragraph } = Typography;

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const [showLoginModal, setShowLoginModal] = useState(false);
  // const [showSignupModal, setShowSignupModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Text className="text-white font-bold">E</Text>
              </div>
              <Text className="text-xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                EchoMoments
              </Text>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Menu mode="horizontal" className="border-0 bg-transparent">
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="explore">Explore</Menu.Item>
                <Menu.Item key="stories">Stories</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
              </Menu>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                type="text"
                icon={<SearchOutlined />}
                className="text-gray-600"
              />
              <Button
                type="text"
                icon={<BellOutlined />}
                className="text-gray-600"
              />
              {/* Get started button with purple backgroung and white text, and purple text, white background on hover */}
              <Button
                type="primary"
                className="bg-gradient-to-r from-violet-500 to-purple-500 border-0 hover:from-violet-600 hover:to-purple-600"
                onClick={() => {
                  // if user is not authenticated, redirect to login page
                  // else redirect to create post page
                  if (localStorage.getItem("authToken")) {
                    navigate("/posts");
                  } else {
                    navigate("/login");
                  }
                }}
              >
                Get Started
              </Button>
              {/* <Button
                onClick={() => setShowLoginModal(true)}
                type="text"
                className="text-gray-600"
              >
                Log in
              </Button>
              <Button
                onClick={() => setShowSignupModal(true)}
                type="primary"
                className="bg-gradient-to-r from-violet-500 to-purple-500 border-0 hover:from-violet-600 hover:to-purple-600"
              >
                Sign up
              </Button> */}
            </div>

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setShowMobileMenu(false)}
        visible={showMobileMenu}
      >
        <div className="space-y-4">
          <Button type="text" block>
            Home
          </Button>
          <Button type="text" block>
            Explore
          </Button>
          <Button type="text" block>
            Stories
          </Button>
          <Button type="text" block>
            About
          </Button>
          {/* <div className="pt-4 border-t">
            <Button
              block
              onClick={() => {
                setShowMobileMenu(false);
                setShowLoginModal(true);
              }}
            >
              Log in
            </Button>
            <Button
              block
              type="primary"
              className="mt-2 bg-gradient-to-r from-violet-500 to-purple-500 border-0"
              onClick={() => {
                setShowMobileMenu(false);
                setShowSignupModal(true);
              }}
            >
              Sign up
            </Button>
          </div> */}
        </div>
      </Drawer>

      {/* Login Modal */}
      {/* <Modal
        title="Welcome Back"
        visible={showLoginModal}
        onCancel={() => setShowLoginModal(false)}
        footer={null}
      >
        <Form layout="vertical" className="py-4">
          <Form.Item label="Email" required>
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              size="large"
              className="bg-gradient-to-r from-violet-500 to-purple-500 border-0"
            >
              Log in
            </Button>
          </Form.Item>
          <div className="text-center">
            <Text className="text-gray-500">
              Don't have an account?{" "}
              <Button
                type="link"
                className="p-0 text-violet-500"
                onClick={() => {
                  setShowLoginModal(false);
                  setShowSignupModal(true);
                }}
              >
                Sign up
              </Button>
            </Text>
          </div>
        </Form>
      </Modal> */}

      {/* Signup Modal */}
      {/* <Modal
        title="Create Account"
        visible={showSignupModal}
        onCancel={() => setShowSignupModal(false)}
        footer={null}
      >
        <Form layout="vertical" className="py-4">
          <Form.Item label="Full Name" required>
            <Input size="large" placeholder="Enter your full name" />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password size="large" placeholder="Create a password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              size="large"
              className="bg-gradient-to-r from-violet-500 to-purple-500 border-0"
            >
              Create Account
            </Button>
          </Form.Item>
          <div className="text-center">
            <Text className="text-gray-500">
              Already have an account?{" "}
              <Button
                type="link"
                className="p-0 text-violet-500"
                onClick={() => {
                  setShowSignupModal(false);
                  setShowLoginModal(true);
                }}
              >
                Log in
              </Button>
            </Text>
          </div>
        </Form>
      </Modal> */}
    </>
  );
};

const Home = () => {
  const featuredStories = [
    {
      title: "A Chance Meeting in Paris",
      location: "Eiffel Tower",
      preview:
        "Our eyes met as we both tried to capture the perfect sunset shot...",
      likes: 234,
      comments: 45,
      tag: "Featured",
    },
    {
      title: "Coffee Shop Serendipity",
      location: "Downtown Cafe",
      preview:
        "She was reading my favorite book, and I couldn't help but smile...",
      likes: 189,
      comments: 32,
      tag: "Popular",
    },
    {
      title: "Concert Connection",
      location: "Central Arena",
      preview: "We were both singing the same lyrics, lost in the music...",
      likes: 302,
      comments: 67,
      tag: "Trending",
    },
  ];

  const testimonials = [
    {
      text: "Thanks to EchoMoments, I finally reconnected with someone I met briefly at a conference. Our story continues!",
      author: "Sarah J.",
      role: "Writer",
      image: "/api/placeholder/64/64",
    },
    {
      text: "This platform gave me hope that meaningful connections aren't lost forever. I love reading and sharing stories here.",
      author: "Michael R.",
      role: "Artist",
      image: "/api/placeholder/64/64",
    },
    {
      text: "What an amazing community! I've shared several moments and even made new friends through the comments.",
      author: "Emma L.",
      role: "Teacher",
      image: "/api/placeholder/64/64",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJNMCAyMEwyMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-30" />
        <div className="max-w-6xl mx-auto px-4 py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Title
                  level={1}
                  className="text-white text-5xl font-bold mb-4"
                  //                 style={
                  //   "font-family": 'Poppins", "sans-serif";
                  //   font-size: 3rem; /* Adjust as per design */
                  //   font-weight: 800;
                  //   color: #ffffff; /* Or #D1C4F9 for a lavender tone */
                  //   text-align: center;
                  //   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Optional for depth */
                  // }
                  style={{
                    fontFamily: '"Poppins", "sans-serif"',
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    textAlign: "left",
                    // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Where Chance Encounters <br />
                  Become Lasting Connections
                </Title>
                <Paragraph className="text-white/90 text-lg">
                  Share your serendipitous moments, reconnect with people you've
                  met briefly, and discover stories that prove the world is
                  smaller than we think.
                </Paragraph>
              </div>
              <div className="space-x-4">
                <Button
                  size="large"
                  className="bg-white text-violet-600 hover:bg-gray-100 border-0"
                >
                  Share Your Story
                </Button>
                <Button
                  size="large"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Stories
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-white/80">
                <span className="flex items-center">
                  <UserOutlined className="mr-2" />
                  10K+ Users
                </span>
                <span className="flex items-center">
                  <HeartOutlined className="mr-2" />
                  50K+ Stories
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                {featuredStories.map((story, index) => (
                  <Card
                    key={index}
                    className={`transform transition-all duration-300 hover:scale-105 absolute w-80
                      ${index === 0 ? "rotate-3 -right-4 top-4 z-10" : ""}
                      ${index === 1 ? "-rotate-2 relative z-20" : ""}
                      ${index === 2 ? "rotate-1 -left-4 top-4 z-10" : ""}
                    `}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <Text className="text-violet-500 font-medium">
                          {story.tag}
                        </Text>
                        <StarOutlined className="text-yellow-400" />
                      </div>
                      <Paragraph className="font-medium text-lg mb-1">
                        {story.preview}
                      </Paragraph>
                      <div className="flex items-center justify-between text-gray-500 text-sm">
                        <Text>{story.location}</Text>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <HeartOutlined className="mr-1" /> {story.likes}
                          </span>
                          <span className="flex items-center">
                            <MessageOutlined className="mr-1" />{" "}
                            {story.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stories Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Title level={2} className="text-gray-900">
              Featured Moments
            </Title>
            <Text className="text-gray-600 text-lg">
              Discover heartwarming stories of serendipitous encounters
            </Text>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card
                key={index}
                hoverable
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <Title level={4} className="mb-1">
                        {story.title}
                      </Title>
                      <Text className="text-gray-500">{story.location}</Text>
                    </div>
                    <StarOutlined className="text-yellow-400 text-xl" />
                  </div>
                  <Paragraph className="text-gray-600" ellipsis={{ rows: 3 }}>
                    {story.preview}
                  </Paragraph>
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <HeartOutlined className="mr-1" /> {story.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageOutlined className="mr-1" /> {story.comments}
                      </span>
                    </div>
                    <Button
                      type="link"
                      className="text-purple-600 flex items-center"
                    >
                      Read More <ArrowRightOutlined className="ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription CTA */}
      <SubscriptionCTA />

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Title level={2}>Stories from Our Community</Title>
            <Text className="text-gray-600 text-lg">
              See how EchoMoments has helped people reconnect
            </Text>
          </div>
          <Carousel
            autoplay
            autoplaySpeed={2000}
            // infinite={false}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <Card className="bg-purple-50 border-0">
                  <div className="text-center space-y-6 max-w-2xl mx-auto">
                    {/* <div className="text-purple-600 text-6xl">"</div> */}
                    {/* <div className="text-6xl text-purple-600">“</div> */}
                    <div className="flex align-middle justify-center">
                      <VscQuote className="text-4xl text-purple-600" />
                      <Paragraph className="text-lg text-gray-700 italic">
                        {testimonial.text}
                      </Paragraph>
                    </div>
                    <div className="space-y-2">
                      <Avatar
                        size={64}
                        icon={<UserOutlined />}
                        className="bg-purple-600"
                      />
                      <div>
                        <Text className="block font-medium">
                          {testimonial.author}
                        </Text>
                        <Text className="text-gray-500">
                          {testimonial.role}
                        </Text>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-purple-600 text-white text-center py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Title
            level={2}
            className="text-white mb-6"
            style={{
              fontFamily: '"Poppins", "sans-serif"',
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Ready to Share Your Story?
          </Title>
          <Text className="text-white/90 text-lg block mb-8">
            Join thousands of others who have found meaningful connections
            through shared moments.
          </Text>
          <Button
            size="large"
            type="primary"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Get Started Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
