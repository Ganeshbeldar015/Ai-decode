import React, { useState } from "react";
import {
  FileText,
  Search,
  Book,
  Code,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const Documentation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("getting-started");

  const sections = [
    { id: "getting-started", name: "Getting Started", icon: Zap },
    { id: "api-reference", name: "API Reference", icon: Code },
    { id: "best-practices", name: "Best Practices", icon: Shield },
    { id: "tutorials", name: "Tutorials", icon: Book },
  ];

  const documentation = {
    "getting-started": {
      title: "Getting Started",
      content: [
        {
          title: "Quick Start Guide",
          content: `Welcome to Decode! This guide will help you get started with our AI-powered code analysis platform.

## What is Decode?

Decode is an intelligent code analysis platform that helps developers:
- Detect bugs and security vulnerabilities
- Get instant fix suggestions
- Understand complex code through explanations
- Learn programming concepts interactively

## How to Use the Debugger

1. **Select Your Language**: Choose from JavaScript, Python, Java, C++, TypeScript, Go, or Rust
2. **Paste Your Code**: Copy and paste your code into the editor
3. **Analyze**: Click the "Analyze Code" button
4. **Review Results**: Examine bugs, fixes, and explanations in the results panel

## Supported Languages

- **JavaScript/TypeScript**: Full ES6+ support with React, Node.js patterns
- **Python**: Python 3.x with common libraries and frameworks
- **Java**: Java 8+ with Spring Boot patterns
- **C++**: Modern C++ standards (C++11/14/17/20)
- **Go**: Go 1.16+ with common patterns
- **Rust**: Rust 2021 edition with cargo patterns`,
        },
        {
          title: "System Requirements",
          content: `## Browser Compatibility

Decode works best with modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Network Requirements

- Stable internet connection for AI analysis
- JavaScript enabled
- Cookies enabled for authentication

## Performance Tips

- Keep code snippets under 1000 lines for optimal performance
- Use specific language selection for better analysis
- Clear browser cache if experiencing issues`,
        },
      ],
    },
    "api-reference": {
      title: "API Reference",
      content: [
        {
          title: "Authentication API",
          content: `## Authentication Endpoints

### POST /api/auth/login
Authenticate user with email and password.

**Request Body:**
\`\`\`json
{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "User Name"
  },
  "token": "jwt_token_here"
}
\`\`\`

### POST /api/auth/logout
Logout current user session.

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "message": "Logged out successfully"
}
\`\`\``,
        },
        {
          title: "Code Analysis API",
          content: `## Analysis Endpoints

### POST /api/analyze
Analyze code for bugs, fixes, and explanations.

**Request Body:**
\`\`\`json
{
  "code": "function example() { var x = 1; }",
  "language": "javascript"
}
\`\`\`

**Response:**
\`\`\`json
{
  "bugs": [
    {
      "id": "bug-1",
      "line": 1,
      "type": "warning",
      "message": "Use of var keyword",
      "severity": "medium"
    }
  ],
  "fixes": [
    {
      "id": "fix-1",
      "bugId": "bug-1",
      "title": "Replace var with const",
      "code": "function example() { const x = 1; }"
    }
  ],
  "explanations": [...],
  "overallQuality": "good"
}
\`\`\`

### GET /api/languages
Get list of supported programming languages.

**Response:**
\`\`\`json
{
  "languages": [
    "javascript",
    "typescript", 
    "python",
    "java",
    "cpp",
    "go",
    "rust"
  ]
}
\`\`\``,
        },
      ],
    },
    "best-practices": {
      title: "Best Practices",
      content: [
        {
          title: "Code Quality Guidelines",
          content: `## Writing Better Code

### JavaScript Best Practices

1. **Use Modern Syntax**
   - Prefer \`const\` and \`let\` over \`var\`
   - Use arrow functions for callbacks
   - Utilize destructuring and template literals

2. **Error Handling**
   - Always handle promises with try/catch
   - Use specific error types
   - Provide meaningful error messages

3. **Performance**
   - Avoid unnecessary re-renders in React
   - Use efficient data structures
   - Minimize DOM manipulations

### Python Best Practices

1. **Code Style**
   - Follow PEP 8 guidelines
   - Use meaningful variable names
   - Keep functions small and focused

2. **Error Handling**
   - Use specific exception types
   - Handle exceptions at appropriate levels
   - Use context managers for resources

3. **Performance**
   - Use list comprehensions appropriately
   - Leverage built-in functions
   - Profile before optimizing`,
        },
        {
          title: "Security Guidelines",
          content: `## Security Best Practices

### Input Validation
- Always validate user input
- Use parameterized queries for databases
- Sanitize data before processing

### Authentication & Authorization
- Use strong password policies
- Implement proper session management
- Apply principle of least privilege

### Data Protection
- Encrypt sensitive data
- Use HTTPS for all communications
- Implement proper logging without exposing secrets

### Common Vulnerabilities to Avoid
- SQL Injection
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Insecure Direct Object References`,
        },
      ],
    },
    tutorials: {
      title: "Tutorials",
      content: [
        {
          title: "Debugging JavaScript Code",
          content: `## Tutorial: Finding and Fixing JavaScript Bugs

### Step 1: Identify Common Issues

Let's analyze this problematic JavaScript code:

\`\`\`javascript
function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].price == "10") {
      total += items[i].price;
    }
  }
  return total;
}
\`\`\`

### Step 2: Issues Found

1. **Use of \`var\`**: Should use \`const\` or \`let\`
2. **Loose equality**: Using \`==\` instead of \`===\`
3. **Type coercion**: Comparing number with string

### Step 3: Fixed Code

\`\`\`javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].price === 10) {
      total += items[i].price;
    }
  }
  return total;
}
\`\`\`

### Step 4: Modern Approach

\`\`\`javascript
const calculateTotal = (items) => {
  return items
    .filter(item => item.price === 10)
    .reduce((total, item) => total + item.price, 0);
};
\`\`\``,
        },
        {
          title: "Python Code Analysis",
          content: `## Tutorial: Improving Python Code Quality

### Step 1: Original Code

\`\`\`python
def process_data(data):
    result = []
    for i in range(len(data)):
        if data[i] > 0:
            result.append(data[i] * 2)
    return result
\`\`\`

### Step 2: Issues Identified

1. **Inefficient iteration**: Using range(len()) instead of direct iteration
2. **Not following PEP 8**: Function could be more descriptive
3. **Missing type hints**: No type annotations

### Step 3: Improved Version

\`\`\`python
from typing import List

def double_positive_numbers(data: List[float]) -> List[float]:
    """Double all positive numbers in the input list.
    
    Args:
        data: List of numbers to process
        
    Returns:
        List of doubled positive numbers
    """
    return [num * 2 for num in data if num > 0]
\`\`\`

### Step 4: Key Improvements

- Added type hints for better code documentation
- Used list comprehension for better performance
- Added docstring for clarity
- More descriptive function name`,
        },
      ],
    },
  };

  const filteredContent = documentation[
    selectedSection as keyof typeof documentation
  ].content.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Documentation</h1>
        <p className="text-gray-400">
          Comprehensive guides, API references, and best practices for Decode.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search documentation..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 sticky top-24">
            <h2 className="text-lg font-semibold text-white mb-4">Sections</h2>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                    selectedSection === section.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{section.name}</span>
                </button>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">
                Quick Links
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Community Forum</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Report Issues</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="space-y-8">
            {filteredContent.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-purple-400" />
                  <span>{item.title}</span>
                </h2>
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {item.content.split("```").map((part, partIndex) => {
                      if (partIndex % 2 === 1) {
                        // This is a code block
                        const lines = part.split("\n");
                        const language = lines[0];
                        const code = lines.slice(1).join("\n");
                        return (
                          <pre
                            key={partIndex}
                            className="bg-gray-900 border border-gray-600 rounded-lg p-4 my-4 overflow-x-auto"
                          >
                            <code className="text-sm text-gray-100">
                              {code}
                            </code>
                          </pre>
                        );
                      } else {
                        // Regular text with markdown-like formatting
                        return (
                          <div key={partIndex} className="space-y-4">
                            {part.split("\n").map((line, lineIndex) => {
                              if (line.startsWith("## ")) {
                                return (
                                  <h3
                                    key={lineIndex}
                                    className="text-xl font-semibold text-white mt-6 mb-3"
                                  >
                                    {line.substring(3)}
                                  </h3>
                                );
                              } else if (line.startsWith("### ")) {
                                return (
                                  <h4
                                    key={lineIndex}
                                    className="text-lg font-semibold text-white mt-4 mb-2"
                                  >
                                    {line.substring(4)}
                                  </h4>
                                );
                              } else if (line.startsWith("- ")) {
                                return (
                                  <li
                                    key={lineIndex}
                                    className="text-gray-300 ml-4"
                                  >
                                    {line.substring(2)}
                                  </li>
                                );
                              } else if (line.match(/^\d+\. /)) {
                                return (
                                  <li
                                    key={lineIndex}
                                    className="text-gray-300 ml-4 list-decimal"
                                  >
                                    {line.substring(line.indexOf(". ") + 2)}
                                  </li>
                                );
                              } else if (
                                line.includes("`") &&
                                !line.includes("```")
                              ) {
                                // Inline code
                                const parts = line.split("`");
                                return (
                                  <p key={lineIndex} className="text-gray-300">
                                    {parts.map((part, i) =>
                                      i % 2 === 1 ? (
                                        <code
                                          key={i}
                                          className="bg-gray-700 px-1 py-0.5 rounded text-sm"
                                        >
                                          {part}
                                        </code>
                                      ) : (
                                        part
                                      )
                                    )}
                                  </p>
                                );
                              } else if (line.trim()) {
                                return (
                                  <p key={lineIndex} className="text-gray-300">
                                    {line}
                                  </p>
                                );
                              }
                              return null;
                            })}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                No results found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search terms or browse the sections.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
