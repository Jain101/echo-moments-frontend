// import React from "react";
// import { Button, Popover, message, Tooltip } from "antd";
// import {
//   ShareAltOutlined,
//   TwitterOutlined,
//   FacebookFilled,
//   LinkedinFilled,
//   WhatsAppOutlined,
//   CopyOutlined,
//   RedditCircleFilled,
//   MailFilled,
//   WechatOutlined,
// } from "@ant-design/icons";

// interface ShareButtonsProps {
//   postId: string;
//   title: string;
//   description?: string;
//   className?: string;
// }

// interface ShareOption {
//   platform: string;
//   icon: React.ReactNode;
//   label: string;
//   color: string;
//   hoverColor: string;
//   onClick: () => void;
// }

// export const ShareButtons: React.FC<ShareButtonsProps> = ({
//   postId,
//   title,
//   description = "",
//   className = "",
// }) => {
//   const shareUrl = `${window.location.origin}/post/${postId}`;
//   const encodedUrl = encodeURIComponent(shareUrl);
//   const encodedTitle = encodeURIComponent(title);
//   const encodedDesc = encodeURIComponent(description);

//   const handleShare = async (platform: string) => {
//     const shareUrls: Record<string, string> = {
//       twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
//       linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedDesc}`,
//       whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
//       reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
//       email: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`,
//       wechat: `weixin://dl/posts?url=${encodedUrl}&title=${encodedTitle}`,
//     };

//     if (platform === "copy") {
//       try {
//         await navigator.clipboard.writeText(shareUrl);
//         message.success({
//           content: "Link copied to clipboard!",
//           className: "custom-message",
//           style: {
//             marginTop: "20vh",
//           },
//           icon: <CopyOutlined style={{ color: "#1890ff" }} />,
//         });
//       } catch (err) {
//         message.error({
//           content: "Failed to copy link",
//           className: "custom-message",
//           style: {
//             marginTop: "20vh",
//           },
//         });
//       }
//       return;
//     }

//     // Open share window with proper dimensions
//     const width = 600;
//     const height = 400;
//     const left = window.innerWidth / 2 - width / 2;
//     const top = window.innerHeight / 2 - height / 2;

//     const shareWindow = window.open(
//       shareUrls[platform],
//       "Share",
//       `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
//     );

//     if (shareWindow) shareWindow.opener = null;
//   };

//   const shareOptions: ShareOption[] = [
//     {
//       platform: "twitter",
//       icon: <TwitterOutlined style={{ fontSize: "20px" }} />,
//       label: "Twitter",
//       color: "rgb(29, 155, 240)",
//       hoverColor: "rgb(26, 140, 216)",
//       onClick: () => handleShare("twitter"),
//     },
//     {
//       platform: "facebook",
//       icon: <FacebookFilled style={{ fontSize: "20px" }} />,
//       label: "Facebook",
//       color: "rgb(66, 103, 178)",
//       hoverColor: "rgb(59, 89, 152)",
//       onClick: () => handleShare("facebook"),
//     },
//     {
//       platform: "linkedin",
//       icon: <LinkedinFilled style={{ fontSize: "20px" }} />,
//       label: "LinkedIn",
//       color: "rgb(0, 119, 181)",
//       hoverColor: "rgb(0, 103, 157)",
//       onClick: () => handleShare("linkedin"),
//     },
//     {
//       platform: "whatsapp",
//       icon: <WhatsAppOutlined style={{ fontSize: "20px" }} />,
//       label: "WhatsApp",
//       color: "rgb(37, 211, 102)",
//       hoverColor: "rgb(33, 190, 92)",
//       onClick: () => handleShare("whatsapp"),
//     },
//     {
//       platform: "reddit",
//       icon: <RedditCircleFilled style={{ fontSize: "20px" }} />,
//       label: "Reddit",
//       color: "rgb(255, 69, 0)",
//       hoverColor: "rgb(230, 62, 0)",
//       onClick: () => handleShare("reddit"),
//     },
//     {
//       platform: "email",
//       icon: <MailFilled style={{ fontSize: "20px" }} />,
//       label: "Email",
//       color: "rgb(51, 51, 51)",
//       hoverColor: "rgb(38, 38, 38)",
//       onClick: () => handleShare("email"),
//     },
//     {
//       platform: "wechat",
//       icon: <WechatOutlined style={{ fontSize: "20px" }} />,
//       label: "WeChat",
//       color: "rgb(7, 193, 96)",
//       hoverColor: "rgb(6, 174, 86)",
//       onClick: () => handleShare("wechat"),
//     },
//   ];

//   const shareContent = (
//     <div className="p-3 w-[280px]">
//       <div className="text-sm font-medium text-gray-700 mb-3">
//         Share this post
//       </div>
//       <div className="grid grid-cols-4 gap-3">
//         {shareOptions.map((option) => (
//           <Tooltip key={option.platform} title={option.label} placement="top">
//             <button
//               onClick={option.onClick}
//               className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
//               style={{
//                 backgroundColor: option.color,
//                 color: "white",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = option.hoverColor;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = option.color;
//               }}
//             >
//               {option.icon}
//             </button>
//           </Tooltip>
//         ))}
//         <Tooltip title="Copy Link" placement="top">
//           <button
//             onClick={() => handleShare("copy")}
//             className="w-14 h-14 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110"
//           >
//             <CopyOutlined style={{ fontSize: "20px", color: "#666" }} />
//           </button>
//         </Tooltip>
//       </div>
//     </div>
//   );

//   return (
//     <Popover
//       content={shareContent}
//       trigger="hover"
//       placement="topRight"
//       overlayClassName="share-popover"
//       overlayInnerStyle={{
//         padding: 0,
//         borderRadius: "12px",
//       }}
//     >
//       <Button
//         type="text"
//         icon={<ShareAltOutlined />}
//         className={`flex items-center hover:text-blue-500 transition-colors ${className}`}
//       >
//         <span className="ml-1">Share</span>
//       </Button>
//     </Popover>
//   );
// };

// // Optional: Add custom styles to your global CSS
// // const globalStyles = `
// // .share-popover .ant-popover-arrow {
// //   display: none;
// // }

// // .share-popover .ant-popover-inner {
// //   border-radius: 12px;
// //   box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
// // }

// // .custom-message {
// //   border-radius: 8px;
// // }
// // `;

// export default ShareButtons;

import React from "react";
import { Button, Popover, Space, message } from "antd";
import {
  ShareAltOutlined,
  CopyOutlined,
} from "@ant-design/icons";

interface ShareButtonsProps {
  postId: string;
  title: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ postId, title }) => {
  const shareUrl = `${window.location.origin}/post/${postId}`;

  const handleShare = async (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    };

    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(shareUrl);
        message.success("Link copied to clipboard!");
      } catch (err) {
        message.error("Failed to copy link");
      }
      return;
    }

    const shareWindow = window.open(
      shareUrls[platform as keyof typeof shareUrls],
      "_blank",
      "width=600,height=400"
    );

    if (shareWindow) shareWindow.opener = null;
  };

  const shareContent = (
    <div className="p-0">
      <Space direction="horizontal" size="small">
        <Button
          type="text"
          // icon={<TwitterOutlined />}
          icon={<img src="https://img.icons8.com/color/48/000000/twitter--v1.png" width={24} height={24}  />}
          onClick={() => handleShare("twitter")}
          block
          className="text-left hover:bg-gray-50"
        >
          {/* Twitter */}
        </Button>
        <Button
          type="text"
          // icon={<FacebookOutlined />}
          icon={<img src="https://img.icons8.com/color/48/000000/facebook-new.png" width={24} height={24}  />}
          onClick={() => handleShare("facebook")}
          block
          className="text-left hover:bg-gray-50"
        >
          {/* Facebook */}
        </Button>
        <Button
          type="text"
          // icon={<LinkedinOutlined />}
          icon={<img src="https://img.icons8.com/color/48/000000/linkedin.png" width={24} height={24}  />}
          onClick={() => handleShare("linkedin")}
          block
          className="text-left hover:bg-gray-50"
        >
          {/* LinkedIn */}
        </Button>
        <Button
          type="text"
          // icon={<WhatsAppOutlined />}
          icon={<img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" width={24} height={24}  />}
          onClick={() => handleShare("whatsapp")}
          block
          className="text-left hover:bg-gray-50"
        >
          {/* WhatsApp */}
        </Button>
        <div className="border-t my-1" />
        <Button
          type="text"
          icon={<CopyOutlined />}
          onClick={() => handleShare("copy")}
          block
          className="text-left hover:bg-gray-50"
        >
          {/* Copy Link */}
        </Button>
      </Space>
    </div>
  );

  return (
    <Popover
      content={shareContent}
      trigger="hover"
      placement="topLeft"
      overlayClassName="share-popover"
    >
      <Button
        type="text"
        icon={<ShareAltOutlined />}
        style={{ display: "flex", alignItems: "center" }}
      >
        <span style={{ marginLeft: "4px" }}>
          {/* Share */}
          </span>
      </Button>
    </Popover>
  );
};

export default ShareButtons;