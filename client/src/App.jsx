import { MainNav } from "./Component/common";
import BlogLayout from "./Layouts/BlogLayout";
import LandingLayout from "./Layouts/LandingLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <section className="max-container dark:bg-darkBgMain">
      <Router>
        <MainNav />

        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/home" element={<LandingLayout />} />
          <Route path="/blog" element={<BlogLayout />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </section>
  );
};

export default App;
