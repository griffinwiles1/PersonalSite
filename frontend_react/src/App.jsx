import { Navbar, Footer, Hero } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  /*
    path - path that we want to register;
    Element - React component we want to assign to the path;
    loader - function responsible for fetching the data (optional);
    action - function responsible for submit the form data (optional);
    ErrorBoundary - React component responsible for catching JavaScript errors at the route level (optional).
  */
  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

const App = () => {
  return (
    <section className="bodyFlex">
      <Navbar />
      <Hero />
      <div className="pageContent">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </section>
  );
};

export default App;
