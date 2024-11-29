// components/Sidebar.tsx
import React from "react";
import {
  FaTachometerAlt,
  FaExchangeAlt,
  FaCalendarAlt,
  FaUserAlt,
  FaCog,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-6 flex flex-col justify-between h-full">
      <div>
        <div className="font-bold text-2xl mb-8">Board.</div>
        <nav>
          <a href="#" className="flex items-center mb-4">
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </a>
          <a href="#" className="flex items-center mb-4">
            <FaExchangeAlt className="mr-2" />
            Transactions
          </a>
          <a href="#" className="flex items-center mb-4">
            <FaCalendarAlt className="mr-2" />
            Schedules
          </a>
          <a href="#" className="flex items-center mb-4">
            <FaUserAlt className="mr-2" />
            Users
          </a>
          <a href="#" className="flex items-center">
            <FaCog className="mr-2" />
            Settings
          </a>
        </nav>
      </div>
      <div>
        <a href="#" className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8H12.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2">Help</span>
        </a>
        <a href="#" className="flex items-center mt-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2">Contact Us</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
