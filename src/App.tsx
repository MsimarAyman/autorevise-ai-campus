
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DomainSelection from "./pages/DomainSelection";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import SessionDetail from "./pages/SessionDetail";
import BaccalaureatCourses from "./pages/BaccalaureatCourses";
import BaccalaureatCourseDetail from "./pages/BaccalaureatCourseDetail";
import BaccalaureatSessionDetail from "./pages/BaccalaureatSessionDetail";
import AIGenerator from "./pages/AIGenerator";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DomainSelection />} />
          <Route path="/informatique" element={<Layout><Courses /></Layout>} />
          <Route path="/informatique/course/:courseId" element={<Layout><CourseDetail /></Layout>} />
          <Route path="/informatique/course/:courseId/session/:sessionId" element={<Layout><SessionDetail /></Layout>} />
          <Route path="/baccalaureat" element={<Layout><BaccalaureatCourses /></Layout>} />
          <Route path="/baccalaureat/course/:courseId" element={<Layout><BaccalaureatCourseDetail /></Layout>} />
          <Route path="/baccalaureat/course/:courseId/session/:sessionId" element={<Layout><BaccalaureatSessionDetail /></Layout>} />
          <Route path="/ai-generator" element={<Layout><AIGenerator /></Layout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
