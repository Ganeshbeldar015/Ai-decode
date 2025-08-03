import React from 'react';
import type { Language } from '../types';

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
  language: Language;
  placeholder?: string;
}

const CodeInput: React.FC<CodeInputProps> = ({ value, onChange, language, placeholder }) => {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-80 bg-gray-900 text-gray-100 font-mono text-sm border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        spellCheck={false}
        style={{
          lineHeight: '1.5',
          tabSize: 2,
        }}
      />
      <div className="absolute top-2 right-2 bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium">
        {language.toUpperCase()}
      </div>
    </div>
  );
};

export default CodeInput;