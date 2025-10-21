import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import TasksPage from './pages/TasksPage';
import ApiDataPage from './pages/ApiDataPage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/api-data" element={<ApiDataPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
