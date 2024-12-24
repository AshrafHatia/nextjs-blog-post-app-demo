export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="max-w-[1100px] mx-auto bg-tarawera-100 min-h-screen flex flex-col border-l border-r border-tarawera-500">
        {children}
      </div>
    );
  }