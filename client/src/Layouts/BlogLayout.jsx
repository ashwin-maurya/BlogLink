import { useEffect, useState } from "react";
import Blog from "../Pages/Blog";
// import Loader from "../Component/common/Loader";

export default function BlogLayout() {
  const [loading, setloading] = useState(true);

  return (
    <section>
      <Blog></Blog>
    </section>
  );
}
