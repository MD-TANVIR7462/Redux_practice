import { RouterProvider } from "react-router/dom";
import router from "./routes/AllRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = () => {
  return (
    <div className="bg-muted">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
