import './App.css';
import Desktop  from './components/Desktop';
import Menu from './components/Menu';
import Taskbar from './components/Taskbar';

function App() {
  return (
    <section className='container__windownsXp'>
      <Desktop />
      <Menu />
      <Taskbar />
    </section>
  );
}

export default App;
