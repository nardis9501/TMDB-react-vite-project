export default function AppLayout({ children }) {
  return (
    <>
      <main className="container mx-auto   p-2 mb-11 sm:my-8    w-screen h-full shadow-md shadow-slate-700 bg-slate-700 sm:rounded-lg">
        {children}
      </main>
    </>
  );
}
