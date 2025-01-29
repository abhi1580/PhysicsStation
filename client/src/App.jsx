import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import CheckAuth from "./components/common/check-auth";
import { useSelector } from "react-redux";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminStudentsPage from "./pages/admin-view/students";
import StudentHome from "./pages/student-view/home";
import PageNotFound from "./pages/not-found/index.jsx";
import Home from "./pages/common/Home";
import CommonLayout from "./components/commonLayout/layout";
import AdminClassesPage from "./pages/admin-view/classes";

function App() {
  const { isAuthenticated, user, isPending } = useSelector(
    (state) => state.auth
  );
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} /> {/* Default route ("/") */}
          <Route path="home" element={<Home />} />{" "}
          {/* Explicit "/home" route */}
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        {/* Authentication Routes */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          {/* <Route path="login" element={<AuthLogin />} /> */}
        </Route>
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminStudentsPage />} />
          <Route path="allclasses" element={<AdminClassesPage />} />
        </Route>
        {/* Student Routes */}
        <Route
          path="/student"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<StudentHome />} />
          {/* <Route path="students" element={<AdminStudentsPage />} /> */}
        </Route>
        {/* Page not found route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
