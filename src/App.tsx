import TablePage from "./components/tables/page"
import { ThemeProvider } from "./components/theme-provider"
import UserTable from "./components/user-table/page"
import Sidebar from "./pages/sidebar"
import {RouterProvider, createBrowserRouter} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />
    },
    {
      path: "/table/v1",
      element: <TablePage />
    },
    {
      path: "/table/v2",
      element: <UserTable />
    },
    {
      path: "*",
      element: <Sidebar />
    }
  ])
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
