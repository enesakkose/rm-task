import MainContainer from './containers/MainContainer'
import Header from './components/Header'
import Datagrid from './components/Datagrid'

function App() {
  return (
    <div>
        <Header/>
      <MainContainer>
        <Datagrid/>
      </MainContainer>
    </div>
  )
}

export default App
