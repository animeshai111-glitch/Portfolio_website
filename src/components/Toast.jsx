import React, { createContext, useContext, useState, useCallback } from "react";
const ToastCtx = createContext({ toast: () => {} });
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const toast = useCallback((message, variant = "default") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, variant }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  }, []);
  return (
    <ToastCtx.Provider value={{ toast }}>
      {children}
      <div className="toast-stack">
        {toasts.map((t) => (<div key={t.id} className={`toast ${t.variant}`}>{t.message}</div>))}
      </div>
    </ToastCtx.Provider>
  );
}
export function useToast() { return useContext(ToastCtx); }
