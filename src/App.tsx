import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useState, useEffect } from 'react';
import  {supabase}  from './lib/supabase'; 

const queryClient = new QueryClient();

function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const { data, error } = await supabase
          .from('todos')
          .select('*');
        
        if (error) throw error;
        
        if (data) {
          setTodos(data);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }

    getTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title || todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/todos" element={<TodosPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;



