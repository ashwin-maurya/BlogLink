import { Navbar } from "../Components/Common";
import Home from "../Pages/Home";

export default function HomeLayout() {
  return (
    <section className=" bg-gray-400">
      <Navbar></Navbar>
      <Home></Home>
    </section>
  );
}
