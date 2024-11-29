import React, { useEffect, useState } from "react";
import { FloatButton, Form } from "antd";
import Header from "../components/homepage/Header";
import { getPostsURL } from "../constants";
import { CreatePostData, FormValues, PostData, TabType, TabTypes } from "../types/auth";
import { PostsFeed } from "../components/homepage/PostsFeed";
import { CreatePostModal } from "../components/homepage/CreatePost";
import ViewPostModal from "../components/homepage/ViewPostModal";
import { Footer } from "../components/homepage/Footer";
import { Navbar } from "../components/homepage/Navbar";

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCreateModalVisible, setIsCreateModalVisible] =
    useState<boolean>(false);
  const [isDetailModalVisible, setIsDetailModalVisible] =
    useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);

  // NavBar states
  const [activeTab, setActiveTab] = useState<TabType>(TabTypes.Feed);

  const [form] = Form.useForm<FormValues>();

  // get posts from API
  const getPosts = async () => {
    try {
      const response = await fetch(getPostsURL, {
        method: "GET",
        headers: {
          "description-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  };

  const createPost = async (newPost: CreatePostData) => {
    try {
      const response = await fetch(getPostsURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      console.log("Post created:", data);
      return data;
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((data) => {
        console.log("Posts fetched:", data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes_count: post.liked
              ? post.likes_count - 1
              : post.likes_count + 1,
            liked: !post.liked,
          };
        }
        return post;
      })
    );
  };

  const handlePostClick = (post: PostData) => {
    setSelectedPost(post);
    setIsDetailModalVisible(true);
  };

  const handleCreateModalCancel = () => {
    setIsCreateModalVisible(false);
    form.resetFields();
  };

  const handleDetailModalCancel = () => {
    setIsDetailModalVisible(false);
    setSelectedPost(null);
  };

  const handleSubmit = async (values: FormValues) => {
    // const newPost: PostData = {
    //   id: Date.now().toString(),
    //   title: values.title,
    //   description: values.description,
    //   location: values.location,
    //   created_at: new Date().toISOString().split("T")[0],
    //   likes_count: 0,
    //   liked: false,
    //   comments: 0,
    //   user: {
    //     first_name: "John",
    //     last_name: "Doe",
    //     name: "John Doe",
    //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    //     email: "john@gmail.com",
    //   },
    //   tags: values.tags || [],
    // };
    // const
    // const newPost = await createPost(values);
    // setPosts([newPost, ...posts]);
    // setIsCreateModalVisible(false);
    // form.resetFields();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header setIsCreateModalVisible={setIsCreateModalVisible} /> {/* Home */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* <div className="p-6"> */}
        <div className="min-h-screen bg-gray-50">
          {/* Posts Feed */}
          <PostsFeed
            posts={posts}
            onCreatePost={() => setIsCreateModalVisible(true)}
            onPostClick={handlePostClick}
            onLike={handleLike}
            activeTab={activeTab}
          />

          {/* Create Post Modal */}
          <CreatePostModal
            visible={isCreateModalVisible}
            onCancel={handleCreateModalCancel}
            onSubmit={handleSubmit}
          />

          {/* Post Detail Modal */}
          <ViewPostModal
            loading={loading}
            visible={isDetailModalVisible}
            onClose={handleDetailModalCancel}
            post={selectedPost}
            onLike={handleLike}
            onComment={() => {}}
            onShare={() => {}}
          />
        </div>
      {/* </div> */}
      {/* <FloatButton
        shape="square"
        type="primary"
        style={{ insetInlineEnd: 32 }}
        icon={<EditOutlined />}
        onClick={() => setIsCreateModalVisible(true)}
      /> */}
      <FloatButton.BackTop />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
