import { MainNav, Footer, Scroll } from "./Component/common";
import BlogLayout from "./Layouts/BlogLayout";
import LandingLayout from "./Layouts/LandingLayout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import SingleBlogLayout from "./Layouts/SingleBlogLayout";
// import Editor from "./Helper/Editor";
import EditBlog from "./Section/EditSection/EditBlog";
import blogContext from "./Helper/Context/blogContext";
import BlogState from "./Helper/Context/BlogState";
import WriteBlogLayout from "./Layouts/WriteBlogLayout";
import clientState from "./Helper/Context/clientState";
import FilterByAuthor from "./Pages/FilterByPages/FilterByAuthor";
import ProfilePage from "./Component/common/ProfilePage";

const App = () => {
  const { handle } = useParams();
  return (
    <BlogState>
      <Router>
        <Scroll />
        <MainNav />

        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/home" element={<LandingLayout />} />
          <Route path="/blog" element={<BlogLayout />} />
          <Route path="/blogs/:handle" element={<SingleBlogLayout />} />
          <Route path="/write" element={<WriteBlogLayout></WriteBlogLayout>} />
          <Route
            path="/profile/:profile"
            element={<ProfilePage></ProfilePage>}
          />
          <Route
            path="/author/:handle"
            element={<FilterByAuthor></FilterByAuthor>}
          >
            {" "}
          </Route>
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </Router>
    </BlogState>
  );
};

export default App;
