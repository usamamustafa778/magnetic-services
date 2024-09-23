export default function Container({ children, className, style }) {
  return (
    <div
      style={style}
      className={`w-11/12 max-w-screen-xl flex items-center justify-center flex-col bg-cover bg-center ${className}`}
    >
      {children}
    </div>
  );
}
