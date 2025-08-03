import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';
import type { Bug } from '../types';

interface BugCardProps {
  bug: Bug;
}

const BugCard: React.FC<BugCardProps> = ({ bug }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'error': return AlertCircle;
      case 'warning': return AlertTriangle;
      case 'suggestion': return Info;
      default: return Info;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'error': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'suggestion': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getSeverityBadge = (severity: string) => {
    const colors = {
      high: 'bg-red-500 text-white',
      medium: 'bg-yellow-500 text-white',
      low: 'bg-green-500 text-white',
    };
    return colors[severity as keyof typeof colors] || colors.low;
  };

  const TypeIcon = getTypeIcon(bug.type);

  return (
    <div className={`border rounded-lg p-4 ${getTypeColor(bug.type)}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <TypeIcon className="w-5 h-5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-white">Line {bug.line}</h4>
            <p className="text-sm opacity-80">{bug.message}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityBadge(bug.severity)}`}>
            {bug.severity.toUpperCase()}
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{bug.description}</p>
    </div>
  );
};

export default BugCard;