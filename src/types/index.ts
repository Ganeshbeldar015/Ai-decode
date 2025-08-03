export type Language = 'javascript' | 'python' | 'java' | 'cpp' | 'typescript' | 'go' | 'rust';

export interface Bug {
  id: string;
  line: number;
  type: 'error' | 'warning' | 'suggestion';
  message: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

export interface Fix {
  id: string;
  bugId: string;
  title: string;
  description: string;
  code: string;
  explanation: string;
}

export interface CodeExplanation {
  id: string;
  line: number;
  code: string;
  explanation: string;
  concepts: string[];
}

export interface AnalysisResult {
  bugs: Bug[];
  fixes: Fix[];
  explanations: CodeExplanation[];
  overallQuality: 'excellent' | 'good' | 'fair' | 'poor';
  suggestions: string[];
}