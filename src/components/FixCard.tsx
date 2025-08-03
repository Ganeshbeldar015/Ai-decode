import React from 'react';
import { CheckCircle, Copy } from 'lucide-react';
import type { Fix } from '../types';

interface FixCardProps {
  fix: Fix;
}

const FixCard: React.FC<FixCardProps> = ({ fix }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(fix.code);
  };

  return (
    <div className="border border-green-400/20 bg-green-400/10 rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-white">{fix.title}</h4>
            <p className="text-sm text-green-300">{fix.description}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <h5 className="text-sm font-medium text-gray-300">Suggested Fix:</h5>
          <button
            onClick={handleCopyCode}
            className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <Copy className="w-3 h-3" />
            <span>Copy</span>
          </button>
        </div>
        <pre className="bg-gray-900 border border-gray-600 rounded p-3 text-sm text-gray-100 overflow-x-auto">
          <code>{fix.code}</code>
        </pre>
      </div>
      
      <p className="text-sm text-gray-300 mt-3 leading-relaxed">{fix.explanation}</p>
    </div>
  );
};

export default FixCard;