import { motion } from "framer-motion";
import { Avatar, Button, Tooltip, Tag, Divider } from "antd";
import {
  HeartFilled,
  HeartOutlined,
  MessageOutlined,
  EnvironmentOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { formatDate, truncateText } from "../../utils";
import ShareButtons from "./ShareButtons";
import { FaComment, FaCommentAlt } from "react-icons/fa";
import { VscCommentDiscussion } from "react-icons/vsc";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

type PostCardProps = {
  post: any;
  onPostClick: (post: any) => void;
  onLike: (postId: string) => void;
};

const PostCard = ({ post, onPostClick, onLike }: PostCardProps) => (
  <motion.div
    key={post.id}
    variants={cardVariants}
    whileHover={{ y: -5 }}
    className="transform duration-300"
  >
    <div className="flex w-full backdrop-blur-sm bg-white/90 shadow-md hover:shadow-xl duration-300 rounded-lg p-4">
      <div className="flex-grow pr-4" onClick={() => onPostClick(post)}>
        <div className="flex items-center gap-3 mb-2">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Avatar src={post.user.avatar} size="large" />
          </motion.div>
          <div>
            <div className="text-lg font-semibold text-gray-800">
              {post.title}
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="font-medium">{post.user.name}</span>
              <span>•</span>
              <span>{formatDate(post.created_at)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-2">
          <EnvironmentOutlined className="mr-2" />
          <span>{post.location}</span>
        </div>

        <p className="text-gray-700 text-sm mb-2">
          {truncateText(post.description)}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: any) => (
            <motion.div
              key={tag.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tag className="bg-indigo-100 text-indigo-600 border-indigo-200 text-xs">
                {tag.name}
              </Tag>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 border-l pl-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Tooltip title="Like" placement="right">
            <Button
              type="text"
              icon={
                post.liked ? (
                  <HeartFilled className="text-red-500" />
                ) : (
                  <HeartOutlined />
                )
              }
              onClick={(e) => {
                e.stopPropagation();
                onLike(post.id);
              }}
            >
              <span className="text-xs">{post.likes_count}</span>
            </Button>
          </Tooltip>
        </motion.div>
        {/* <Divider type="horizontal" /> */}
        <hr />

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Tooltip title="Comment" placement="right">
            <Button
              type="text"
              // icon={<VscCommentDiscussion />}
              icon={<CommentOutlined />}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs">{post.comments || 0}</span>
            </Button>
          </Tooltip>
        </motion.div>
        {/* <Divider type="horizontal" /> */}
        <hr />

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="flex justify-center items-center">
            <ShareButtons title={post.title} postId={post.id} />
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default PostCard;
