import React, { useState } from 'react';
import { Bell, PenSquare, User, Home } from 'lucide-react';

// Define TypeScript types
type PostStatus = 'review' | 'published' | 'draft';

interface Post {
  id: string;
  title: string;
  content: string;
  location: string;
  date: string;
  author: string;
  status: PostStatus;
  likes: number;
  tags: string[];
}

// Tab options type
type TabOption = 'feed' | 'my-posts';

const EchoMoments = () => {
  const [activeTab, setActiveTab] = useState<TabOption>('feed');
  const [statusFilter, setStatusFilter] = useState<PostStatus | 'all'>('all');

  // Sample data
  const posts: Post[] = [
    {
      id: '1',
      title: 'Missed connection at the coffee shop',
      content: "We exchanged glances but didn't get a chance to talk.",
      location: 'Downtown Cafe',
      date: 'November 10, 2024',
      author: 'Anonymous',
      status: 'published',
      likes: 4,
      tags: ['romantic']
    },
    {
      id: '2',
      title: 'Saw you at the concert',
      content: 'You were wearing a red jacket and dancing to the music.',
      location: 'City Arena',
      date: 'November 10, 2024',
      author: 'Anonymous',
      status: 'published',
      likes: 0,
      tags: []
    }
  ];

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'feed') return post.status === 'published';
    return statusFilter === 'all' ? true : post.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-indigo-600">EchoMoments</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stories..."
                  className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
                <PenSquare className="w-4 h-4" />
                <span>Share Your Story</span>
              </button>
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              <User className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('feed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'feed'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Home className="w-4 h-4 inline-block mr-2" />
              Feed
            </button>
            <button
              onClick={() => setActiveTab('my-posts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'my-posts'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <User className="w-4 h-4 inline-block mr-2" />
              My Posts
            </button>
          </nav>
        </div>

        {/* Status Filter (only shown in My Posts tab) */}
        {activeTab === 'my-posts' && (
          <div className="flex space-x-4 mb-6">
            {(['all', 'published', 'review', 'draft'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  statusFilter === status
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
                {activeTab === 'my-posts' && (
                  <span className={`ml-auto px-2 py-1 text-xs rounded-full ${
                    post.status === 'published' ? 'bg-green-100 text-green-800' :
                    post.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">
                    <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {post.location}
                  </span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <span className="text-gray-500">{post.likes}</span>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EchoMoments;