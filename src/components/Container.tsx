const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto h-full min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
};
export default Container;
