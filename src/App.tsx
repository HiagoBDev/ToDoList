import Header from "./layouts/Header/Header";
import ToDoWrapper from "./layouts/ToDoWrapper/ToDoWrapper";

function App() {
  return (
    <div className=" w-screen h-screen bg-[#111011] ">
      <Header />
      <div className=" flex items-center justify-center bg-[#111011]">
        <ToDoWrapper />
      </div>
    </div>
  );
}

export default App;
