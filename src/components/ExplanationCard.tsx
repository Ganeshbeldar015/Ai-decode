import React, { useState } from 'react';
import { BookOpen, Loader2 } from 'lucide-react';
import type { CodeExplanation } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ExplanationCardProps {
  explanation: CodeExplanation;
}

const ExplanationCard: React.FC<ExplanationCardProps> = ({ explanation }) => {
  const [aiExplanation, setAiExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAIExplain = async () => {
    setLoading(true);

    const prompt = `
You are an AI assistant for debugging and optimizing code.
Your tasks:
- Check for correctness
- Suggest improvements
- Explain line-by-line

Here is the code:
${explanation.code}
    `;

    try {
      const response = await fetch("https://api.together.xyz/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer tgp_v1_Jz0vXWhiO88BzjwjXww2xTdHcBDexzRGXUFSjVOE230`, // 🔴 REMOVE before production add while testing
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1000,
          temperature: 0.7
        })
      });

      const data = await response.json();
      setAiExplanation(data?.choices?.[0]?.message?.content || "No explanation returned.");
    } catch (error) {
      setAiExplanation("Error fetching explanation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-blue-400/20 bg-blue-400/10 rounded-lg p-4">
      <div className="flex items-start space-x-3 mb-3">
        <BookOpen className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium text-white mb-1">Line {explanation.line}</h4>
          <pre className="bg-gray-900 border border-gray-600 rounded p-2 text-sm text-gray-100 overflow-x-auto mb-3">
            <code>{explanation.code}</code>
          </pre>
          <p className="text-sm text-gray-300 leading-relaxed mb-3">
            {explanation.explanation}
          </p>

          {explanation.concepts.length > 0 && (
            <div>
              <h5 className="text-xs font-medium text-gray-400 mb-2">Related Concepts:</h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {explanation.concepts.map((concept, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs rounded-full"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleAIExplain}
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Analyzing...
              </span>
            ) : (
              'Understand with AI'
            )}
          </button>

          {aiExplanation && (
            <div className="mt-4 p-3 bg-gray-900 text-sm text-gray-300 border border-blue-500/20 rounded markdown-body">
              <strong>AI Explanation:</strong>
              <div className="mt-2 codeblock">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {aiExplanation}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplanationCard;
