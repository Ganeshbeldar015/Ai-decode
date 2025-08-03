import React, { useState } from "react";
import {
  BookOpen,
  Code,
  Play,
  ArrowRight,
  Star,
  Clock,
  Users,
} from "lucide-react";

const Learn: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("fundamentals");

  const categories = [
    { id: "fundamentals", name: "Programming Fundamentals", icon: BookOpen },
    { id: "javascript", name: "JavaScript", icon: Code },
    { id: "python", name: "Python", icon: Code },
    { id: "algorithms", name: "Algorithms & Data Structures", icon: Star },
  ];

  const courses = {
    fundamentals: [
      {
        title: "Introduction to Programming",
        description:
          "Learn the basic concepts of programming including variables, functions, and control structures.",
        duration: "2 hours",
        level: "Beginner",
        students: "15.2K",
        rating: 4.8,
        topics: ["Variables", "Functions", "Loops", "Conditionals"],
        url :"https://www.geeksforgeeks.org/computer-science-fundamentals/programming-tutorial/",
      },
      {
        title: "Object-Oriented Programming",
        description:
          "Master OOP concepts like classes, inheritance, polymorphism, and encapsulation.",
        duration: "3 hours",
        level: "Intermediate",
        students: "8.7K",
        rating: 4.9,
        topics: ["Classes", "Inheritance", "Polymorphism", "Encapsulation"],
        url :"https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/",
      },
      {
        title: "Debugging Techniques",
        description:
          "Learn effective debugging strategies and tools to identify and fix code issues.",
        duration: "1.5 hours",
        level: "Intermediate",
        students: "5.3K",
        rating: 4.7,
        topics: ["Debugging Tools", "Error Handling", "Testing", "Code Review"],
        url :"https://www.geeksforgeeks.org/software-engineering/software-engineering-debugging/",
      },
    ],
    javascript: [
      {
        title: "JavaScript Fundamentals",
        description:
          "Master JavaScript basics including ES6+ features, async programming, and DOM manipulation.",
        duration: "4 hours",
        level: "Beginner",
        students: "22.1K",
        rating: 4.9,
        topics: ["ES6+", "Async/Await", "DOM", "Event Handling"],
        url :"https://www.geeksforgeeks.org/javascript/javascript-tutorial/",
      },
      {
        title: "React Development",
        description:
          "Build modern web applications with React, hooks, and state management.",
        duration: "6 hours",
        level: "Intermediate",
        students: "18.5K",
        rating: 4.8,
        topics: ["Components", "Hooks", "State Management", "Routing"],
        url :"https://www.youtube.com/watch?v=iKpkVKubvKk",
      },
      {
        title: "Node.js Backend",
        description:
          "Create scalable backend applications with Node.js, Express, and databases.",
        duration: "5 hours",
        level: "Advanced",
        students: "12.3K",
        rating: 4.7,
        topics: ["Express.js", "APIs", "Databases", "Authentication"],
        url :"https://www.geeksforgeeks.org/node-js/creating-a-rest-api-backend-using-node-js-express-and-postgres/",
      },
    ],
    python: [
      {
        title: "Python Basics",
        description:
          "Learn Python syntax, data structures, and fundamental programming concepts.",
        duration: "3 hours",
        level: "Beginner",
        students: "19.8K",
        rating: 4.8,
        topics: ["Syntax", "Data Types", "Functions", "Modules"],
        url :"https://www.geeksforgeeks.org/python/python-programming-language-tutorial/",
      },
      {
        title: "Data Science with Python",
        description:
          "Explore data analysis, visualization, and machine learning with Python libraries.",
        duration: "8 hours",
        level: "Intermediate",
        students: "14.2K",
        rating: 4.9,
        topics: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        url :"https://www.geeksforgeeks.org/data-analysis/exploratory-data-analysis-in-python/",
      },
      {
        title: "Web Development with Django",
        description:
          "Build robust web applications using Django framework and best practices.",
        duration: "7 hours",
        level: "Advanced",
        students: "9.1K",
        rating: 4.6,
        topics: ["Django", "Models", "Views", "Templates"],
        url :"https://www.geeksforgeeks.org/python/django-tutorial/",
      },
    ],
    algorithms: [
      {
        title: "Data Structures Fundamentals",
        description:
          "Master essential data structures: arrays, linked lists, stacks, queues, and trees.",
        duration: "5 hours",
        level: "Intermediate",
        students: "11.7K",
        rating: 4.8,
        topics: ["Arrays", "Linked Lists", "Stacks", "Trees"],
        url :"https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/",
      },
      {
        title: "Algorithm Design Patterns",
        description:
          "Learn common algorithmic patterns and problem-solving techniques.",
        duration: "6 hours",
        level: "Advanced",
        students: "7.9K",
        rating: 4.9,
        topics: [
          "Recursion",
          "Dynamic Programming",
          "Greedy",
          "Divide & Conquer",
        ],
        url :"https://www.geeksforgeeks.org/dsa/algorithms-design-techniques//",
      },
      {
        title: "Big O Notation & Complexity",
        description:
          "Understand time and space complexity analysis for efficient algorithm design.",
        duration: "2 hours",
        level: "Intermediate",
        students: "13.4K",
        rating: 4.7,
        topics: [
          "Time Complexity",
          "Space Complexity",
          "Big O",
          "Optimization",
        ],
        url :"https://www.geeksforgeeks.org/dsa/time-complexity-and-space-complexity/",
      },
    ],
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Learn Programming
        </h1>
        <p className="text-gray-400">
          Master programming concepts with our comprehensive courses and
          interactive tutorials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 sticky top-24">
            <h2 className="text-lg font-semibold text-white mb-4">
              Categories
            </h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses[selectedCategory as keyof typeof courses].map(
              (course, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-colors duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {course.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(
                          course.level
                        )}`}
                      >
                        {course.level}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">
                        Topics covered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a href={course.url}target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Start Learning</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </a>
                    {/* course.url */}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Recommended Learning Path
        </h2>
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Fundamentals",
                description: "Start with programming basics",
                icon: BookOpen,
              },
              {
                step: 2,
                title: "Choose Language",
                description: "Pick JavaScript or Python",
                icon: Code,
              },
              {
                step: 3,
                title: "Build Projects",
                description: "Apply your knowledge",
                icon: Play,
              },
              {
                step: 4,
                title: "Advanced Topics",
                description: "Master algorithms & patterns",
                icon: Star,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  Step {item.step}: {item.title}
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-5 h-5 text-gray-600 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
