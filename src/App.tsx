import { Header } from "./components/header"
import { MainSection } from "./components/mainSection"
import { GlobalStyles } from "./styles/globalstyles"
import { GlobalReset } from "./styles/reset"

function App() {

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <MainSection/>
    </>
  )
}

export default App
