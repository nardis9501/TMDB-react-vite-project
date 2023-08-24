import React from "react";

export default function AppLayout({ children }) {
  return (
    <>
      <main className="container mx-auto p-2 lg:p-4 xl:p-6 shadow-md shadow-slate-700 bg-slate-700 w-full h-full rounded-lg">
        {children}
      </main>
    </>
  );
}
