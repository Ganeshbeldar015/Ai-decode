import React, { useState } from 'react';
import { Bug, CheckCircle, BookOpen, Code, Zap, RefreshCw } from 'lucide-react';
import CodeInput from '../components/CodeInput';
import LanguageSelector from '../components/LanguageSelector';
import AnalysisResults from '../components/AnalysisResults';
import { analyzeCode } from '../utils/aiAnalysis';
import type { AnalysisResult, Language } from '../types';

const Debugger: React.FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<Language>('javascript');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!code.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result = analyzeCode(code, language);
    setAnalysisResult(result);
    setIsAnalyzing(false);
  };

  const stats = analysisResult ? [
    { label: 'Bugs Found', value: analysisResult.bugs.length, icon: Bug, color: 'text-red-400' },
    { label: 'Fixes Suggested', value: analysisResult.fixes.length, icon: CheckCircle, color: 'text-green-400' },
    { label: 'Lines Explained', value: analysisResult.explanations.length, icon: BookOpen, color: 'text-blue-400' },
  ] : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">AI Code Debugger</h1>
        <p className="text-gray-400">Paste your code below and let our AI analyze it for bugs, suggest fixes, and explain complex parts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>Code Input</span>
              </h2>
              <LanguageSelector value={language} onChange={setLanguage} />
            </div>
            
            <CodeInput
              value={code}
              onChange={setCode}
              language={language}
              placeholder={`Paste your ${language} code here...`}
            />
            
            <button
              onClick={handleAnalyze}
              disabled={!code.trim() || isAnalyzing}
              className="mt-4 w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analyzing Code...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Analyze Code</span>
                </>
              )}
            </button>
          </div>

          {/* Stats */}
          {analysisResult && (
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center space-x-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {isAnalyzing ? (
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
              <RefreshCw className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Analyzing your code...</h3>
              <p className="text-gray-400">Our AI is examining your code for bugs and preparing explanations.</p>
            </div>
          ) : analysisResult ? (
            <AnalysisResults result={analysisResult} />
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
              <Code className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Ready to analyze</h3>
              <p className="text-gray-400">Paste your code and click "Analyze Code" to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Debugger;