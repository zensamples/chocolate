import Navbar from "./components/navbar.tsx";

import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";
import NotFound from "./components/not_found.tsx";
import Home from "./home.tsx";
import Products from "./components/products.tsx";
import Social from "./components/social_network.tsx";

export function App() {
  return (
    <>
      <LocationProvider>
        <ErrorBoundary>
          <Navbar />
          <Router>
            <Route path="./chocolatery-showcase" component={Home} />
            <Route
              path="./chocolatery-showcase/products"
              component={Products}
            />
            <Route
              path="./chocolatery-showcase/social_network"
              component={Social}
            />
            <Route component={NotFound} default />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </>
  );
}
