import Blog from "../Pages/Blog";
import { BlogNav } from "../Component/common";

export default function BlogLayout() {
  return (
    <section>
      <BlogNav></BlogNav>
      <Blog></Blog>
    </section>
  );
}
