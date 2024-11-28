import { Theme } from "@radix-ui/themes";
import "./App.css";
import Layout from "./pages/layout";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <Theme appearance="dark" >
      <ThemeProvider defaultTheme="dark">
        <Layout />
      </ThemeProvider>
    </Theme>
  )
}

export default App;
