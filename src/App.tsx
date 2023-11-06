import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./page/main";
import Second from "./page/second";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      <Second />
    </QueryClientProvider>
  );
}

export default App;
