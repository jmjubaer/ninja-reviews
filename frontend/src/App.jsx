import { Link, Outlet } from "react-router-dom";
import CategoriesNav from "./components/CategoriesNav";

const App = () => {
  return (
    <div className='w-[1080px] mx-auto '>
      <div className='py-2 text-xl font-medium border-b-2 text-blue-500'>
        <Link to={"/"}>Home</Link>
      </div>
      <div className=''>
        <CategoriesNav></CategoriesNav>
      </div>
      <div className='mt-5'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
