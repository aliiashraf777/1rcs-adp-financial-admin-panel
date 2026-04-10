import './App.css'
import Sidebar from './Layout/Sidebar/Sidebar'
import { SidebarProvider } from './context/sidebarContext'
import Content from './Layout/Content/Content'
 
function App() {

  return (
    // <SidebarProvider>
    <div className="app-wrapper">
      <Sidebar />

      <Content />
    </div>
  )
}

export default App
