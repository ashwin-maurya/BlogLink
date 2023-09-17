import { MainNav } from "./Component/common";
import BlogLayout from "./Layouts/BlogLayout";
import LandingLayout from "./Layouts/LandingLayout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import SingleBlogLayout from "./Layouts/SingleBlogLayout";
import Editor from "./Helper/Editor";

const App = () => {
  const { handle } = useParams();
  console.log(handle);
  return (
    <section className="max-container dark:bg-darkBgMain">
      <Router>
        <MainNav />

        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/home" element={<LandingLayout />} />
          <Route path="/blog" element={<BlogLayout />} />
          <Route path="/:handle" element={<SingleBlogLayout />} />
          <Route path="/Edit" element={<Editor></Editor>}>
            {" "}
          </Route>
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </section>
  );
};

export default App;
