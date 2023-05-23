import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import store from './redux/store'

function App() {
  return (
    <>
      <section className="section">
        <Provider store={store}>
          <Header />
          <List />
          <Footer />
        </Provider>
      </section>
    </>
  )
}

export default App
