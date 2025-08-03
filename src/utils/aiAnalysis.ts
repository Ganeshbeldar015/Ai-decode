import type {
  AnalysisResult,
  Language,
  Bug,
  Fix,
  CodeExplanation,
} from "../types";

// Enhanced AI analysis function with more accurate detection patterns
export function analyzeCode(code: string, language: Language): AnalysisResult {
  const lines = code.split("\n");
  const bugs: Bug[] = [];
  const fixes: Fix[] = [];
  const explanations: CodeExplanation[] = [];

  // Enhanced pattern-based analysis with more comprehensive detection
  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const trimmedLine = line.trim();

    // JavaScript/TypeScript specific analysis
    if (language === "javascript" || language === "typescript") {
      // Variable declaration issues
      if (trimmedLine.includes("var ")) {
        const bugId = `bug-${lineNumber}-var`;
        bugs.push({
          id: bugId,
          line: lineNumber,
          type: "warning",
          message: 'Use of "var" keyword',
          description:
            'The "var" keyword has function scope and can lead to hoisting issues, temporal dead zones, and unexpected behavior. Modern JavaScript prefers "let" for variables that need reassignment and "const" for constants.',
          severity: "medium",
        });

        fixes.push({
          id: `fix-${bugId}`,
          bugId,
          title: "Replace var with let/const",
          description:
            'Use "const" for values that won\'t be reassigned, or "let" for variables that will be modified. This provides better scoping and prevents common errors.',
          code: trimmedLine.replace("var ", "const "),
          explanation:
            "Block-scoped declarations (let/const) are safer than function-scoped var declarations and help prevent bugs related to variable hoisting and scope confusion.",
        });
      }

      // Equality comparison issues
      if (trimmedLine.includes("==") && !trimmedLine.includes("===")) {
        const bugId = `bug-${lineNumber}-equality`;
        bugs.push({
          id: bugId,
          line: lineNumber,
          type: "warning",
          message: "Use of loose equality (==)",
          description:
            'Loose equality (==) performs type coercion which can lead to unexpected results. For example, "0" == 0 is true, but "0" === 0 is false. Always use strict equality (===) unless you specifically need type coercion.',
          severity: "medium",
        });

        fixes.push({
          id: `fix-${bugId}`,
          bugId,
          title: "Use strict equality",
          description:
            "Strict equality (===) compares both value and type, preventing unexpected type conversions.",
          code: trimmedLine.replace(/==/g, "==="),
          explanation:
            "This ensures that comparisons are predictable and don't rely on JavaScript's sometimes confusing type coercion rules.",
        });
      }

      // Console statements
      if (trimmedLine.includes("console.log")) {
        const bugId = `bug-${lineNumber}-console`;
        bugs.push({
          id: bugId,
          line: lineNumber,
          type: "suggestion",
          message: "Console statement in code",
          description:
            "Console statements should be removed before production deployment as they can expose sensitive information and impact performance.",
          severity: "low",
        });

        fixes.push({
          id: `fix-${bugId}`,
          bugId,
          title: "Remove console statement",
          description: "Remove or replace with proper logging mechanism.",
          code: "// " + trimmedLine + " // TODO: Remove debug statement",
          explanation:
            "Use a proper logging library in production or remove debug statements entirely.",
        });
      }

      // Missing semicolons
      if (
        trimmedLine &&
        !trimmedLine.endsWith(";") &&
        !trimmedLine.endsWith("{") &&
        !trimmedLine.endsWith("}") &&
        !trimmedLine.startsWith("//") &&
        !trimmedLine.includes("if") &&
        !trimmedLine.includes("for") &&
        !trimmedLine.includes("while") &&
        !trimmedLine.includes("function")
      ) {
        const bugId = `bug-${lineNumber}-semicolon`;
        bugs.push({
          id: bugId,
          line: lineNumber,
          type: "suggestion",
          message: "Missing semicolon",
          description:
            "While JavaScript has automatic semicolon insertion, it's better to be explicit to avoid potential issues.",
          severity: "low",
        });

        fixes.push({
          id: `fix-${bugId}`,
          bugId,
          title: "Add semicolon",
          description: "Add explicit semicolon for better code clarity.",
          code: trimmedLine + ";",
          explanation:
            "Explicit semicolons make your code more predictable and prevent issues with automatic semicolon insertion.",
        });
      }

      // Potential null/undefined issues
      if (
        trimmedLine.includes(".") &&
        !trimmedLine.includes("?.") &&
        (trimmedLine.includes("getElementById") ||
          trimmedLine.includes("querySelector"))
      ) {
        const bugId = `bug-${lineNumber}-null-check`;
        bugs.push({
          id: bugId,
          line: lineNumber,
          type: "warning",
          message: "Potential null reference",
          description:
            "DOM queries can return null. Consider adding null checks or using optional chaining.",
          severity: "medium",
        });

        fixes.push({
          id: `fix-${bugId}`,
          bugId,
          title: "Add null check",
          description: "Use optional chaining or explicit null checking.",
          code: trimmedLine.replace(/(\w+)\./, "$1?."),
          explanation:
            "Optional chaining (?.) safely accesses nested properties even if the reference is null or undefined.",
        });
      }
    }

    // Python specific analysis
    if (language === "python") {
      // Print statements
      if (trimmedLine.includes("print(") && !trimmedLine.includes("#")) {
        const bugId = `bug-${lineNumber}-print`;
        bugs.push({
          id: bugId,
          line: lineNumber,
          type: "suggestion",
          message: "Print statement in code",
          description:
            "Print statements should be replaced with proper logging for production code. The logging module provides better control over output levels and destinations.",
          severity: "low",
        });

        fixes.push({
          id: `fix-${bugId}`,
          bugId,
          title: "Use logging instead of print",
          description:
            "Replace print with logging for better production readiness.",
          code: trimmedLine.replace("print(", "logging.info("),
          explanation:
            "The logging module allows you to control log levels and output destinations, making it more suitable for production applications.",
        });
      }

      // Missing type hints
      if (
        trimmedLine.startsWith("def ") &&
        !trimmedLine.includes("->") &&
        !trimmedLine.includes(":")
      ) {
        const bugId = `bug-${lineNumber}-type-hints`;
        bugs.push({
          id: bugId,
          line: lineNumber,
          type: "suggestion",
          message: "Missing type hints",
          description:
            "Type hints improve code readability and help catch errors early. Consider adding parameter and return type annotations.",
          severity: "low",
        });
      }

      // Inefficient iteration
      if (trimmedLine.includes("range(len(") && trimmedLine.includes("))")) {
        const bugId = `bug-${lineNumber}-inefficient-iteration`;
        bugs.push({
          id: bugId,
          line: lineNumber,
          type: "warning",
          message: "Inefficient iteration pattern",
          description:
            "Using range(len()) is less Pythonic and less efficient than direct iteration.",
          severity: "medium",
        });

        fixes.push({
          id: `fix-${bugId}`,
          bugId,
          title: "Use direct iteration",
          description:
            "Iterate directly over the collection instead of using indices.",
          code: "# Use: for item in collection: instead of for i in range(len(collection)):",
          explanation:
            "Direct iteration is more readable, less error-prone, and often more efficient in Python.",
        });
      }
    }

    // General language patterns

    // TODO comments
    if (
      trimmedLine.includes("TODO") ||
      trimmedLine.includes("FIXME") ||
      trimmedLine.includes("HACK")
    ) {
      bugs.push({
        id: `bug-${lineNumber}-todo`,
        line: lineNumber,
        type: "suggestion",
        message: "TODO/FIXME comment found",
        description:
          "This line contains a TODO, FIXME, or HACK comment indicating incomplete or problematic code.",
        severity: "low",
      });
    }

    // Long lines
    if (trimmedLine.length > 120) {
      bugs.push({
        id: `bug-${lineNumber}-long-line`,
        line: lineNumber,
        type: "suggestion",
        message: "Line too long",
        description:
          "This line exceeds 120 characters. Consider breaking it into multiple lines for better readability.",
        severity: "low",
      });
    }

    // Generate explanations for significant lines
    if (
      trimmedLine &&
      !trimmedLine.startsWith("//") &&
      !trimmedLine.startsWith("#")
    ) {
      if (trimmedLine.includes("function") || trimmedLine.includes("def ")) {
        explanations.push({
          id: `explanation-${lineNumber}`,
          line: lineNumber,
          code: trimmedLine,
          explanation:
            "This line defines a function, which is a reusable block of code that performs a specific task. Functions help organize code, reduce repetition, and make programs more modular and maintainable.",
          concepts: [
            "Functions",
            "Code Organization",
            "Reusability",
            "Modularity",
          ],
        });
      }

      if (trimmedLine.includes("if ") || trimmedLine.includes("if(")) {
        explanations.push({
          id: `explanation-${lineNumber}`,
          line: lineNumber,
          code: trimmedLine,
          explanation:
            "This is a conditional statement that executes different code paths based on whether a condition evaluates to true or false. It's fundamental for creating decision-making logic in programs.",
          concepts: [
            "Conditional Logic",
            "Control Flow",
            "Boolean Logic",
            "Decision Making",
          ],
        });
      }

      if (trimmedLine.includes("for ") || trimmedLine.includes("while ")) {
        explanations.push({
          id: `explanation-${lineNumber}`,
          line: lineNumber,
          code: trimmedLine,
          explanation:
            "This is a loop statement that repeats a block of code multiple times. Loops are essential for processing collections of data, performing repetitive tasks, and implementing algorithms efficiently.",
          concepts: ["Loops", "Iteration", "Control Flow", "Repetition"],
        });
      }

      if (
        trimmedLine.includes("const ") ||
        trimmedLine.includes("let ") ||
        trimmedLine.includes("var ")
      ) {
        explanations.push({
          id: `explanation-${lineNumber}`,
          line: lineNumber,
          code: trimmedLine,
          explanation:
            "This line declares a variable, which is a named storage location that holds a value. Variables are fundamental building blocks that allow programs to store, retrieve, and manipulate data.",
          concepts: ["Variables", "Data Storage", "Memory Management", "Scope"],
        });
      }

      if (trimmedLine.includes("class ")) {
        explanations.push({
          id: `explanation-${lineNumber}`,
          line: lineNumber,
          code: trimmedLine,
          explanation:
            "This line defines a class, which is a blueprint for creating objects. Classes encapsulate data and behavior, enabling object-oriented programming principles like inheritance and polymorphism.",
          concepts: [
            "Classes",
            "Object-Oriented Programming",
            "Encapsulation",
            "Objects",
          ],
        });
      }

      if (
        trimmedLine.includes("import ") ||
        trimmedLine.includes("from ") ||
        trimmedLine.includes("require(")
      ) {
        explanations.push({
          id: `explanation-${lineNumber}`,
          line: lineNumber,
          code: trimmedLine,
          explanation:
            "This line imports external modules or libraries, allowing you to use pre-written code and functionality. This promotes code reuse and helps organize large applications.",
          concepts: ["Modules", "Imports", "Code Reuse", "Dependencies"],
        });
      }
    }
  });

  // Determine overall quality
  const errorCount = bugs.filter((b) => b.type === "error").length;
  const warningCount = bugs.filter((b) => b.type === "warning").length;
  const suggestionCount = bugs.filter((b) => b.type === "suggestion").length;

  let overallQuality: "excellent" | "good" | "fair" | "poor";
  if (errorCount === 0 && warningCount === 0 && suggestionCount <= 1) {
    overallQuality = "excellent";
  } else if (errorCount === 0 && warningCount <= 2 && suggestionCount <= 3) {
    overallQuality = "good";
  } else if (errorCount <= 1 && warningCount <= 4) {
    overallQuality = "fair";
  } else {
    overallQuality = "poor";
  }

  // Generate suggestions
  const suggestions: string[] = [];
  if (bugs.some((b) => b.message.includes("var"))) {
    suggestions.push(
      "Modernize variable declarations by using let and const instead of var"
    );
  }
  if (bugs.some((b) => b.message.includes("console"))) {
    suggestions.push(
      "Remove console statements and implement proper logging for production"
    );
  }
  if (bugs.some((b) => b.message.includes("equality"))) {
    suggestions.push("Use strict equality (===) to avoid type coercion issues");
  }
  if (bugs.some((b) => b.message.includes("semicolon"))) {
    suggestions.push(
      "Add explicit semicolons for better code clarity and consistency"
    );
  }
  if (bugs.some((b) => b.message.includes("null"))) {
    suggestions.push(
      "Add null checks or use optional chaining to prevent runtime errors"
    );
  }
  if (explanations.length > 0) {
    suggestions.push(
      "Good code structure detected with proper use of functions and control flow"
    );
  }
  if (bugs.length === 0) {
    suggestions.push(
      "Excellent code quality! No issues detected - keep up the good work"
    );
  }
  if (
    language === "python" &&
    bugs.some((b) => b.message.includes("range(len"))
  ) {
    suggestions.push(
      "Use more Pythonic iteration patterns for better performance and readability"
    );
  }
  if (bugs.some((b) => b.message.includes("TODO"))) {
    suggestions.push("Address TODO comments and incomplete code sections");
  }

  return {
    bugs,
    fixes,
    explanations: explanations.slice(0, 15), // Show more explanations
    overallQuality,
    suggestions,
  };
}
