import TablePage from "./components/tables/page"
import { ThemeProvider } from "./components/theme-provider"
import UserTable from "./components/user-table/page"
import Sidebar from "./pages/sidebar"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Toaster } from "./components/ui/toaster"
import { Combobox } from "./components/combo-box/combo-box"

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
      path: "/combo-box",
      element: <Combobox />
    },
    {
      path: "*",
      element: <Sidebar />
    }
  ])
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </>
  )
}

export default App
