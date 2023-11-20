export default function AppLayout({ children }) {
  return (
    <>
      <header className="grid py-4  place-content-center w-full h-16 fixed z-10 top-0 right-0 backdrop-blur text-slate-900 bg-slate-200/40">
        <h1 className="text-slate-800 text-2xl sm:text-4xl lg:text-6xl">
          The Movie Database
        </h1>
      </header>
      <main className="container mx-auto py-16 px-2    w-screen h-full shadow-md shadow-slate-700 bg-slate-700">
        {children}
      </main>

      <footer className="flex  place-content-center items-center h-14 fixed bottom-0 left-0 right-0 backdrop-blur text-slate-900 bg-slate-200/40">
        © Copyright 2023
      </footer>
    </>
  );
}
