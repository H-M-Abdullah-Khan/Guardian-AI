import React, { useState } from 'react';
import HeroInput from './components/HeroInput';
import ResultPage from './components/ResultPage';

function App() {
  const [status, setStatus] = useState('idle'); // 'idle', 'scanning', 'result'
  const [data, setData] = useState(null);

  const startScan = async (url) => {
    setStatus('scanning');
    try {
      const response = await fetch('http://127.0.0.1:8001/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url }),
      });
      const result = await response.json();
      
      if (result.error) {
        alert(result.error);
        setStatus('idle');
      } else {
        // Backend se aane wala sara data state mein save ho raha hai
        setData({ ...result, url });
        setStatus('result');
      }
    } catch (err) {
      alert("Backend connection failed! Make sure your Python server is running.");
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="mesh-gradient"></div>

      {status === 'idle' && <HeroInput onScan={startScan} />}

      {status === 'scanning' && (
        <div className="h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
          <div className="w-20 h-20 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="mt-8 text-2xl font-black text-slate-800 animate-pulse uppercase tracking-widest">
            AI Neural Scanning...
          </h2>
        </div>
      )}

      {status === 'result' && <ResultPage data={data} onReset={() => setStatus('idle')} />}
    </div>
  );
}

export default App;