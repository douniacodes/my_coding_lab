import { BackgroundCanvas } from './home/BackgroundCanvas';
import { HeaderTitle } from './home/HeaderTitle';
import { ScrollText } from './home/ScrollText';
import { DynamicTweens } from './home/DynamicTweens';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#fcfbe2] overflow-x-hidden">

      <BackgroundCanvas />
      <HeaderTitle />
      <ScrollText />
      <DynamicTweens />


      <main className="relative z-10">
 
      </main>

      <footer className="relative z-10 text-center py-10 opacity-30 text-xs">
        © 2026 DOUNIACODES | FRONTEND ENGINEER LAB
      </footer>
    </div>
  );
}

export default App;