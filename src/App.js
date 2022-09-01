import Header from "./components/Header";
import Overview from "./components/Overview";
import Followers from "./components/Followers";

function App() {
  return (
    <>
      <section className="p-8 dark:bg-slate-900 h-full lg:h-screen">
        <Header />
        <Followers />
        <Overview />
      </section>
    </>
  );
}

export default App;
