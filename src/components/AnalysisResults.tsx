import React, { useState } from 'react';
import { Bug, CheckCircle, BookOpen, AlertTriangle, Info, AlertCircle } from 'lucide-react';
import type { AnalysisResult } from '../types';
import BugCard from './BugCard';
import FixCard from './FixCard';
import ExplanationCard from './ExplanationCard';

interface AnalysisResultsProps {
  result: AnalysisResult;
}

type Tab = 'bugs' | 'fixes' | 'explanations';

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ result }) => {
  const [activeTab, setActiveTab] = useState<Tab>('bugs');

  const tabs = [
    { id: 'bugs' as Tab, label: 'Bugs', count: result.bugs.length, icon: Bug, color: 'text-red-400' },
    { id: 'fixes' as Tab, label: 'Fixes', count: result.fixes.length, icon: CheckCircle, color: 'text-green-400' },
    { id: 'explanations' as Tab, label: 'Explanations', count: result.explanations.length, icon: BookOpen, color: 'text-blue-400' },
  ];

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'fair': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getQualityIcon = (quality: string) => {
    switch (quality) {
      case 'excellent': return CheckCircle;
      case 'good': return Info;
      case 'fair': return AlertTriangle;
      case 'poor': return AlertCircle;
      default: return Info;
    }
  };

  const QualityIcon = getQualityIcon(result.overallQuality);

  return (
    <div className="space-y-6">
      {/* Overall Quality */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <QualityIcon className={`w-6 h-6 ${getQualityColor(result.overallQuality)}`} />
          <div>
            <h3 className="text-lg font-semibold text-white">Code Quality: {result.overallQuality}</h3>
          </div>
        </div>
        {result.suggestions.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-300">Suggestions:</h4>
            <ul className="space-y-1">
              {result.suggestions.map((suggestion, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="flex border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-white' : tab.color}`} />
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-purple-700' : 'bg-gray-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'bugs' && (
            <div className="space-y-4">
              {result.bugs.length === 0 ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-gray-300 font-medium">No bugs detected!</p>
                  <p className="text-gray-500 text-sm">Your code looks clean.</p>
                </div>
              ) : (
                result.bugs.map((bug) => <BugCard key={bug.id} bug={bug} />)
              )}
            </div>
          )}

          {activeTab === 'fixes' && (
            <div className="space-y-4">
              {result.fixes.length === 0 ? (
                <div className="text-center py-8">
                  <Info className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-gray-300 font-medium">No fixes needed!</p>
                  <p className="text-gray-500 text-sm">Your code is working well.</p>
                </div>
              ) : (
                result.fixes.map((fix) => <FixCard key={fix.id} fix={fix} />)
              )}
            </div>
          )}

          {activeTab === 'explanations' && (
            <div className="space-y-4">
              {result.explanations.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-300 font-medium">No explanations available</p>
                  <p className="text-gray-500 text-sm">Try analyzing some code first.</p>
                </div>
              ) : (
                result.explanations.map((explanation) => (
                  <ExplanationCard key={explanation.id} explanation={explanation} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;