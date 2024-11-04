import NavItem from "./components/NavItem/NavItem";

const App = () => {
  return (
    <div className="w-screen h-[calc(100dvh)] flex flex-col justify-center items-center bg-indigo-300">
      <h1 className="text-2xl font-bold">Department ISA</h1>
      <h2 className="text-md font-semibold">
        PT Bank Negara Indonesia (Persero) Tbk
      </h2>
      <nav className="w-full justify-center items-center flex flex-wrap gap-4 mt-4 px-4">
        <NavItem title="Home" />
        <NavItem title="Employee" />
        <NavItem title="Split Bill" />
        <NavItem title="Voucher Grab" />
      </nav>
    </div>
  );
};

export default App;
