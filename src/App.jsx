import Header from './components/Header/Header.jsx';
import AboutItems from './components/AboutItems.jsx';
import SubGenres from './components/SubGenres.jsx';
import ClassicsSection from './components/ClassicsSection.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutItems />
        <SubGenres />
        <ClassicsSection />
      </main>
    </>
  );
}

export default App;
