import React from "react";
 import CounterPage from "./components/CounterPage";
 import { CounterProvider } from "./components/CounterContext";
 export default function App() {
  return (
     
      
      <div>
        <CounterProvider>
        <CounterPage />
        </CounterProvider>
       </div>
    
  );
}
