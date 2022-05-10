import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";
import { Fragment } from "react";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, idx) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) Layout = route.layout;
            if (route.layout === null) Layout = Fragment;
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
