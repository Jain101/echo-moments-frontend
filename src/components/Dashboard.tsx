// components/Dashboard.tsx
import React from "react";
import { FaEye, FaCartPlus, FaThumbsUp } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface DashboardProps {
  totalRevenue: number;
  totalTransactions: number;
  totalLikes: number;
  totalUsers: number;
  activityData: { guest: number; user: number }[];
  topProducts: { name: string; percentage: number }[];
}

const Dashboard: React.FC<DashboardProps> = ({
  totalRevenue,
  totalTransactions,
  totalLikes,
  totalUsers,
  activityData,
  topProducts,
}) => {
  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <FaEye className="text-2xl" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {totalRevenue.toLocaleString()}
            </div>
            <div className="text-gray-500">Total Revenues</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <FaCartPlus className="text-2xl" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {totalTransactions.toLocaleString()}
            </div>
            <div className="text-gray-500">Total Transactions</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <FaThumbsUp className="text-2xl" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {totalLikes.toLocaleString()}
            </div>
            <div className="text-gray-500">Total Likes</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="text-4xl font-bold">
              {totalUsers.toLocaleString()}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-500">Total Users</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={activityData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="guest" stroke="#FF6B6B" />
                <Line type="monotone" dataKey="user" stroke="#4EAD6D" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Top products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              {topProducts.map((product) => (
                <div key={product.name} className="text-center">
                  <div className="text-4xl font-bold">
                    {product.percentage}%
                  </div>
                  <div className="text-gray-500">{product.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
