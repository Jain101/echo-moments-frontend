import React, { useState } from "react";
import { Modal, Form, Input, Button, Tag, Tooltip } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusOutlined,
  EnvironmentOutlined,
  TagOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { FormValues } from "../../types/auth";

const { TextArea } = Input;

interface CreatePostModalProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: FormValues) => Promise<void>;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  visible,
  onCancel,
  onSubmit,
}) => {
  const [form] = Form.useForm();
  const [tags, setTags] = useState<string[]>([]);
  const [inputTag, setInputTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);
    try {
      await onSubmit({ ...values, tags });
      form.resetFields();
      setTags([]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddTag = (tag: string) => {
    const trimmedTag = tag.trim().toLowerCase();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
    }
    setInputTag("");
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const modalStyles = {
    mask: {
      backdropFilter: "blur(8px)",
    },
    content: {
      background:
        "linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))",
      borderRadius: "16px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <Modal
      title={
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-center py-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Share Your Story
        </motion.div>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
      className="create-post-modal"
      modalRender={(modal) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {modal}
        </motion.div>
      )}
      styles={modalStyles}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Form.Item
            name="title"
            label={
              <span className="text-lg font-semibold text-gray-700">Title</span>
            }
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input
              placeholder="Give your story a captivating title"
              className="h-12 text-lg rounded-lg border-2 border-gray-200 focus:border-indigo-500 hover:border-indigo-400 transition-colors"
            />
          </Form.Item>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Form.Item
            name="location"
            label={
              <span className="text-lg font-semibold text-gray-700">
                <EnvironmentOutlined className="mr-2 text-indigo-500" />
                Location
              </span>
            }
            rules={[{ required: true, message: "Please enter the location" }]}
          >
            <Input
              placeholder="Where did this magical moment happen?"
              className="h-12 text-lg rounded-lg border-2 border-gray-200 focus:border-indigo-500 hover:border-indigo-400 transition-colors"
            />
          </Form.Item>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Form.Item
            name="description"
            label={
              <span className="text-lg font-semibold text-gray-700">
                Your Story
              </span>
            }
            rules={[{ required: true, message: "Please share your story" }]}
          >
            <TextArea
              placeholder="Paint us a picture with your words..."
              rows={6}
              className="text-lg rounded-lg border-2 border-gray-200 focus:border-indigo-500 hover:border-indigo-400 transition-colors"
            />
          </Form.Item>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-700 flex items-center mb-2">
              <TagOutlined className="mr-2 text-indigo-500" />
              Tags
            </span>
            <div className="flex flex-wrap gap-2 mb-2">
              <AnimatePresence>
                {tags.map((tag) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <Tag
                      className="px-3 py-1 text-base bg-indigo-100 text-indigo-600 border-indigo-200 rounded-full"
                      closable
                      onClose={() => removeTag(tag)}
                    >
                      {tag}
                    </Tag>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <Input
              placeholder="Type a tag and press Enter"
              value={inputTag}
              onChange={(e) => setInputTag(e.target.value)}
              onPressEnter={(e) => {
                e.preventDefault();
                handleAddTag(inputTag);
              }}
              className="h-12 text-lg rounded-lg border-2 border-gray-200 focus:border-indigo-500 hover:border-indigo-400 transition-colors"
              suffix={
                <Tooltip title="Press Enter to add tag">
                  <PlusOutlined className="text-gray-400" />
                </Tooltip>
              }
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pt-4"
        >
          <Form.Item>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                disabled={isSubmitting}
                className="h-12 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 border-none hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 rounded-lg"
                icon={isSubmitting ? <LoadingOutlined /> : <PlusOutlined />}
              >
                {isSubmitting ? "Posting..." : "Share Your Story"}
              </Button>
            </motion.div>
          </Form.Item>
        </motion.div>
      </Form>
    </Modal>
  );
};
