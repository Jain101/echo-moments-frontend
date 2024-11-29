import React from "react";
import { Modal, Avatar, Button, Tag, Tooltip, Skeleton } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  ShareAltOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  BookOutlined,
  BookFilled,
  LikeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { PostData } from "../../types/auth";
import { formatDate } from "../../utils";
import ShareButtons from "../ui/ShareButtons";

interface ViewPostModalProps {
  visible: boolean;
  post: PostData | null;
  loading?: boolean;
  onClose: () => void;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onShare: (postId: string) => void;
  // onBookmark: (postId: string) => void;
}

const ContentSection: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-6"
  >
    <div className="text-gray-600 text-sm mb-2">{label}</div>
    {children}
  </motion.div>
);

export const ViewPostModal: React.FC<ViewPostModalProps> = ({
  visible,
  post,
  loading = false,
  onClose,
  onLike,
  onComment,
  onShare,
  // onBookmark,
}) => {
  return (
    
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      className="view-post-modal"
      modalRender={(modal) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {modal}
        </motion.div>
      )}
      styles={{
        mask: {
          backdropFilter: 'blur(8px)',
        },
        content: {
          background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98))',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          overflow: 'hidden'
        }
      }}
    >
      <Skeleton loading={loading} active paragraph={{ rows: 8 }}>
        {post && (
          <div className="flex flex-col">
            {/* Header with User Info */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 border-b border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Avatar size={40} src={post.user.avatar} className="ring-2 ring-indigo-50" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">
                    {post.user.name}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm space-x-2">
                    <ClockCircleOutlined className="text-gray-400" />
                    <span>{formatDate(post.created_at)}</span>
                    <span>•</span>
                    <EnvironmentOutlined className="text-gray-400" />
                    <span>{post.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 max-h-[50vh] overflow-y-auto"
            >
              <h2 className="text-xl font-bold mb-3 text-gray-800">
                {post.title}
              </h2>

              <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line mb-4">
                {post.description}
              </div>

              <AnimatePresence>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag:any) => (
                    <motion.div
                      key={tag.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <Tag
                        className="px-2 py-0.5 text-sm bg-indigo-50 text-indigo-600 border-indigo-100 rounded-full"
                      >
                        {tag.name}
                      </Tag>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="text"
                    icon={post.liked ? 
                      <HeartFilled className="text-red-500" /> : 
                      <HeartOutlined />
                    }
                    onClick={() => onLike(post.id)}
                    className="flex items-center space-x-1"
                  >
                    <span>{post.likes_count}</span>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="text"
                    icon={<MessageOutlined />}
                    onClick={() => onComment(post.id)}
                    className="flex items-center space-x-1"
                  >
                    <span>{post.comments}</span>
                  </Button>
                </motion.div>
              </div>

              <div className="flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {/* <Button
                    type="text"
                    icon={<ShareAltOutlined />}
                    onClick={() => onShare(post.id)}
                    className="flex items-center"
                  /> */}
                  <ShareButtons title={post.title} postId={post.id} />
                </motion.div>

                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="text"
                    icon={post.bookmarked ? 
                      <BookFilled className="text-indigo-500" /> : 
                      <BookOutlined />
                    }
                    onClick={() => onBookmark(post.id)}
                    className="flex items-center"
                  />
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        )}
      </Skeleton>
    </Modal>
  );
};

export default ViewPostModal;