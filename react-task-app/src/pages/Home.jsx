import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to TaskApp
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A modern task management application built with React and Tailwind CSS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Task Manager
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Organize your tasks efficiently with our intuitive task management system
            </p>
            <Link to="/tasks">
              <Button variant="primary" className="w-full">
                Go to Tasks
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              API Data
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Explore data fetched from external APIs with search and pagination
            </p>
            <Link to="/api-data">
              <Button variant="primary" className="w-full">
                View API Data
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      <Card title="Features">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
              Beautiful Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Modern UI with Tailwind CSS and dark mode support
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
              Fast Performance
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with React and Vite for optimal performance
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💾</div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
              Local Storage
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your data persists across browser sessions
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;