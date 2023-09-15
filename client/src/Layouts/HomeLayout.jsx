import Home from "../Pages/Home";
import { Navbar } from "../Component/common";

export default function HomeLayout() {
  return (
    <section>
      <Navbar></Navbar>
      <Home></Home>
    </section>
  );
}
