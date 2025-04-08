
// Mock data for the LMS application
export const mockCourses = [
  {
    id: "1",
    title: "Advanced React and Redux Masterclass",
    description: "Master React, Redux, and modern front-end development with practical projects and real-world examples.",
    fullDescription: "This comprehensive course will take you from beginner to professional in React and Redux. You'll learn how to create powerful single-page applications with the most popular front-end library in the world. Through practical exercises and real-world projects, you'll master advanced concepts like Hooks, Context API, Redux, and more.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    instructor: {
      id: "i1",
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      title: "Senior Frontend Developer",
      bio: "With over 10 years of experience in web development, Sarah specializes in React and modern JavaScript. She has worked with Fortune 500 companies and has a passion for teaching complex concepts in an easy-to-understand way.",
      rating: 4.9,
      reviewCount: 1250,
      courses: 12,
      students: 45000
    },
    price: 49.99,
    rating: 4.8,
    reviewCount: 342,
    level: "advanced",
    duration: "24.5 hours",
    students: 1534,
    progress: 75,
    enrolled: true,
    hasDiscount: true,
    category: "development",
    learningPoints: [
      "Master React Hooks, Context API, and advanced patterns",
      "Build complex state management solutions with Redux",
      "Create performant React applications with optimization techniques",
      "Implement authentication and authorization in React apps",
      "Deploy React applications to production",
      "Write testable React code with Jest and React Testing Library"
    ],
    requirements: [
      "Basic knowledge of JavaScript and HTML/CSS",
      "Familiarity with ES6+ features",
      "Understanding of how web applications work",
      "No prior React knowledge required, but helpful"
    ]
  },
  {
    id: "2",
    title: "UX/UI Design: From Wireframe to Prototype",
    description: "Learn the complete UX/UI design process from research to high-fidelity prototypes using Figma and design best practices.",
    thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2072&auto=format&fit=crop",
    instructor: {
      id: "i2",
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=2",
      title: "Lead UX Designer"
    },
    price: 59.99,
    rating: 4.9,
    reviewCount: 217,
    level: "intermediate",
    duration: "18 hours",
    students: 876,
    progress: 45,
    enrolled: true,
    category: "design"
  },
  {
    id: "3",
    title: "Python for Data Science and Machine Learning",
    description: "Comprehensive course covering Python, NumPy, Pandas, Matplotlib, Scikit-Learn, and introduction to deep learning.",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
    instructor: {
      id: "i3",
      name: "Dr. Emily Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=3",
      title: "Data Scientist & AI Researcher"
    },
    price: 79.99,
    rating: 4.7,
    reviewCount: 512,
    level: "beginner",
    duration: "36.5 hours",
    students: 2356,
    hasDiscount: true,
    category: "development"
  },
  {
    id: "4",
    title: "Digital Marketing Strategy Masterclass",
    description: "Learn to create effective digital marketing strategies across social media, SEO, content marketing, and paid advertising.",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop",
    instructor: {
      id: "i4",
      name: "Alex Thompson",
      avatar: "https://i.pravatar.cc/150?img=4",
      title: "Marketing Director"
    },
    price: 49.99,
    rating: 4.6,
    reviewCount: 189,
    level: "intermediate",
    duration: "22 hours",
    students: 1078,
    category: "marketing"
  },
  {
    id: "5",
    title: "Complete Blockchain Development Bootcamp",
    description: "Build decentralized applications and smart contracts using Ethereum, Solidity, and Web3.js from scratch.",
    thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop",
    instructor: {
      id: "i5",
      name: "David Park",
      avatar: "https://i.pravatar.cc/150?img=5",
      title: "Blockchain Developer"
    },
    price: 69.99,
    rating: 4.8,
    reviewCount: 175,
    level: "advanced",
    duration: "28.5 hours",
    students: 742,
    category: "development"
  },
  {
    id: "6",
    title: "Financial Accounting for Beginners",
    description: "Master the fundamentals of accounting, financial statements, and business reporting with practical examples.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop",
    instructor: {
      id: "i6",
      name: "Jennifer Miller",
      avatar: "https://i.pravatar.cc/150?img=6",
      title: "CPA & Financial Consultant"
    },
    price: 39.99,
    rating: 4.5,
    reviewCount: 231,
    level: "beginner",
    duration: "16 hours",
    students: 1287,
    hasDiscount: true,
    category: "business"
  },
  {
    id: "7",
    title: "Adobe Photoshop: From Beginner to Pro",
    description: "Learn to create stunning graphics, photo manipulations, and digital art using Adobe Photoshop with step-by-step tutorials.",
    thumbnail: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop",
    instructor: {
      id: "i7",
      name: "Ryan Wilson",
      avatar: "https://i.pravatar.cc/150?img=7",
      title: "Digital Artist & Designer"
    },
    price: 44.99,
    rating: 4.7,
    reviewCount: 398,
    level: "beginner",
    duration: "20 hours",
    students: 2142,
    category: "design"
  },
  {
    id: "8",
    title: "Full-Stack JavaScript Development",
    description: "Build complete web applications with Node.js, Express, MongoDB, and modern frontend frameworks.",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    instructor: {
      id: "i8",
      name: "Sophia Garcia",
      avatar: "https://i.pravatar.cc/150?img=8",
      title: "Full-Stack Developer"
    },
    price: 59.99,
    rating: 4.8,
    reviewCount: 275,
    level: "intermediate",
    duration: "32 hours",
    students: 965,
    category: "development"
  },
];

export const mockLessons = [
  // Course 1 Lessons
  {
    id: "l1",
    courseId: "1",
    section: "Getting Started",
    title: "Course Introduction",
    duration: "5:25",
    type: "video",
    content: "https://example.com/video1.mp4",
    locked: false
  },
  {
    id: "l2",
    courseId: "1",
    section: "Getting Started",
    title: "Setting Up Your Development Environment",
    duration: "12:10",
    type: "video",
    content: "https://example.com/video2.mp4",
    locked: false
  },
  {
    id: "l3",
    courseId: "1",
    section: "Getting Started",
    title: "Overview of React Concepts",
    duration: "15:45",
    type: "video",
    content: "https://example.com/video3.mp4",
    locked: false
  },
  {
    id: "l4",
    courseId: "1",
    section: "React Fundamentals",
    title: "Creating Your First React Component",
    duration: "20:30",
    type: "video",
    content: "https://example.com/video4.mp4",
    locked: false
  },
  {
    id: "l5",
    courseId: "1",
    section: "React Fundamentals",
    title: "Props and State",
    duration: "18:15",
    type: "video",
    content: "https://example.com/video5.mp4",
    locked: false
  },
  {
    id: "l6",
    courseId: "1",
    section: "React Fundamentals",
    title: "Component Lifecycle Methods",
    duration: "22:40",
    type: "reading",
    content: "In this lesson, you'll learn about React component lifecycle methods, which are special methods that allow you to run code at specific points in a component's life. We'll cover componentDidMount, componentDidUpdate, componentWillUnmount, and how they're being replaced by React Hooks in modern applications.",
    locked: false
  },
  {
    id: "l7",
    courseId: "1",
    section: "Advanced React",
    title: "React Hooks Deep Dive",
    duration: "35:20",
    type: "video",
    content: "https://example.com/video6.mp4",
    locked: true
  },
  {
    id: "l8",
    courseId: "1",
    section: "Advanced React",
    title: "Context API and Global State",
    duration: "28:15",
    type: "video",
    content: "https://example.com/video7.mp4",
    locked: true
  },
  {
    id: "l9",
    courseId: "1",
    section: "Redux",
    title: "Introduction to Redux",
    duration: "25:30",
    type: "video",
    content: "https://example.com/video8.mp4",
    locked: true
  },
  {
    id: "l10",
    courseId: "1",
    section: "Redux",
    title: "Actions, Reducers, and the Store",
    duration: "30:45",
    type: "video",
    content: "https://example.com/video9.mp4",
    locked: true
  },
];

export const mockCertificates = [
  {
    id: "c1",
    title: "Advanced React and Redux Masterclass",
    issuer: "LMS Platform",
    issueDate: "April 15, 2023",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "c2",
    title: "UX/UI Design: From Wireframe to Prototype",
    issuer: "LMS Platform",
    issueDate: "January 30, 2023",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "c3",
    title: "Digital Marketing Strategy Masterclass",
    issuer: "LMS Platform",
    issueDate: "August 12, 2022",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2032&auto=format&fit=crop"
  }
];
