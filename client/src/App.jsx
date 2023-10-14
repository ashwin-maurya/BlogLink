import { MainNav, Footer, Scroll } from "./Component/common";
import BlogLayout from "./Layouts/BlogLayout";
import LandingLayout from "./Layouts/LandingLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SingleBlogLayout from "./Layouts/SingleBlogLayout";
import BlogState from "./Helper/Context/BlogState";
import WriteBlogLayout from "./Layouts/WriteBlogLayout";
import FilterByAuthor from "./Pages/FilterByPages/FilterByAuthor";
import ProfilePage from "./Pages/ProfilePage";
import AuthState from "./Helper/Context/AuthState";
import CheckLogin from "./Helper/CheckLogin";
import HelperState from "./Helper/Context/HelperState";
import CommentLikeState from "./Helper/Context/CommentLikeState";
import UpdateBlogLayout from "./Layouts/UpdateBlogLayout";
import SettingsLayout from "./Layouts/SettingsLayout";

const App = () => {
  return (
    <CommentLikeState>
      <HelperState>
        {/* <ReplyState> */}
        <BlogState>
          <AuthState>
            <Router>
              <Scroll />
              <CheckLogin />
              <MainNav />

              <Routes>
                <Route path="/" element={<LandingLayout />} />
                <Route path="/home" element={<LandingLayout />} />
                <Route path="/blog" element={<BlogLayout />} />
                <Route path="/settings/*" element={<SettingsLayout />} />

                <Route path="/blogs/:handle" element={<SingleBlogLayout />} />
                <Route
                  path="/write"
                  element={<WriteBlogLayout></WriteBlogLayout>}
                />
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
                <Route
                  path="/updateblog/:handle"
                  element={<UpdateBlogLayout></UpdateBlogLayout>}
                ></Route>
                {/* <Route path="/*" element={<NotFound />} /> */}
              </Routes>
              <Footer />
            </Router>
          </AuthState>
        </BlogState>
        {/* </ReplyState> */}
      </HelperState>
    </CommentLikeState>
  );
};

export default App;
