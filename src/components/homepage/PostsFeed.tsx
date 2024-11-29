import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PostData, TabTypes } from "../../types/auth";
import PostCard from "../ui/PostCard";
import { Button, Divider, Tabs } from "antd";
import { Divide, ListEndIcon, ShipIcon } from "lucide-react";
import { FaDraft2Digital } from "react-icons/fa";
import { EditOutlined } from "@ant-design/icons";

interface PostsFeedProps {
  posts: PostData[];
  activeTab: TabTypes;
  onCreatePost: () => void;
  onLike: (postId: string) => void;
  onPostClick: (post: PostData) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// const cardVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//     },
//   },
// };

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const PostsFeed: React.FC<PostsFeedProps> = ({
  posts,
  activeTab,
  onCreatePost,
  onLike,
  onPostClick,
}) => {
  console.log("PostsFeed -> posts", posts);

  const tabItems = [
    {
      key: "1",
      label: "All",
      // icon: <ListEndIcon size={12} />,
      // children: "All Posts",
    },
    {
      key: "2",
      label: "Published",
      // icon: <ShipIcon size={12} />,
      // children: "Published Posts",
    },
    {
      key: "3",
      label: "Drafts",
      // icon: <FaDraft2Digital size={12} />,
      // children: "Drafted Posts",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl mx-auto pt-24 px-4 relative z-10"
      >
        {/* Header Section */}
        {activeTab === TabTypes.Feed && (
          <>
            <motion.div
              className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  EchoMoments
                </h1>
                <p className="text-gray-600 text-lg">
                  Where chance encounters become connections
                </p>
              </div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  type="primary"
                  // icon={<PlusOutlined />}
                  // pencil icon instead of plus icon
                  icon={<EditOutlined />}
                  onClick={onCreatePost}
                  size="large"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 border-none hover:from-indigo-700 hover:to-purple-700 shadow-md"
                >
                  Share Your Story
                </Button>
              </motion.div>
            </motion.div>
            <Divider className="m-4 p-4" />
          </>
        )}
        {/* Posts Categories */}
        {activeTab === TabTypes.MyPosts && (
          <Tabs defaultActiveKey="1" centered items={tabItems} />
        )}
        {/* Posts List */}
        <AnimatePresence>
          <motion.div className="space-y-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onPostClick={onPostClick}
                onLike={onLike}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {/* End of Posts Message */}
      {posts.length > 0 && (
        <div className="flex flex-col items-center justify-center py-8 text-gray-600">
          <Divider className="mb-4" />
          <p className="text-lg">You've reached the end! 🎉</p>
          <p className="text-sm text-gray-500">
            No more posts to display. Check back later!
          </p>
        </div>
      )}
    </div>
  );
};
