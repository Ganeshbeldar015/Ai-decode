import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Bug, BookOpen, FileText, Zap, Shield, Clock, Users } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Bug,
      title: 'AI Bug Detection',
      description: 'Advanced AI algorithms detect bugs, security vulnerabilities, and code smells in real-time.',
      color: 'text-red-400 bg-red-400/10 border-red-400/20'
    },
    {
      icon: Zap,
      title: 'Instant Fixes',
      description: 'Get immediate fix suggestions with detailed explanations and code examples.',
      color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
    },
    {
      icon: BookOpen,
      title: 'Code Explanations',
      description: 'Understand your code better with line-by-line explanations in simple English.',
      color: 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Identify potential security vulnerabilities and get recommendations for secure coding practices.',
      color: 'text-green-400 bg-green-400/10 border-green-400/20'
    }
  ];

  const stats = [
    { label: 'Languages Supported', value: '7+', icon: Code },
    { label: 'Bugs Detected Daily', value: '10K+', icon: Bug },
    { label: 'Active Users', value: '5K+', icon: Users },
    { label: 'Average Response Time', value: '<2s', icon: Clock }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          AI-Powered Code Analysis
          <span className="block text-purple-400">Made Simple</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Detect bugs, get instant fixes, and learn programming concepts with our advanced AI-powered code analysis platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/debugger"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Bug className="w-5 h-5" />
            <span>Start Debugging</span>
          </Link>
          <Link
            to="/learn"
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <BookOpen className="w-5 h-5" />
            <span>Learn Programming</span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className={`border rounded-xl p-6 ${feature.color}`}>
            <div className="flex items-center space-x-3 mb-4">
              <feature.icon className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Platform Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/debugger"
          className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-6 transition-colors duration-200 group"
        >
          <Bug className="w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Code Debugger</h3>
          <p className="text-gray-400">Analyze your code for bugs and get instant fixes.</p>
        </Link>

        <Link
          to="/learn"
          className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-6 transition-colors duration-200 group"
        >
          <BookOpen className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Learn Programming</h3>
          <p className="text-gray-400">Interactive tutorials and programming concepts.</p>
        </Link>

        <Link
          to="/docs"
          className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-6 transition-colors duration-200 group"
        >
          <FileText className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
          <p className="text-gray-400">Comprehensive guides and API references.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;