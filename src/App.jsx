import Header from './components/Header/Header.jsx';
import AboutItems from './components/AboutItems.jsx';
import SubGenres from './components/SubGenres.jsx';
import ClassicsSection from './components/ClassicsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutItems />
        <SubGenres />
        <ClassicsSection />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
