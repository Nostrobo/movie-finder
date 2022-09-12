import './App.css';
import MFHeader from './components/MFHeader/MFHeader';
import MFBody from './components/MFBody/MFBody';
import MFFooter from './components/MFFooter/MFFooter';


function App() {
  return (
    <div className="mf-app-background">
      <div className="mf-app-container">
        <MFHeader className="mf-header" />
        <MFBody className="mf-body" />
        <MFFooter className="mf-footer" />
      </div>
    </div>
  );
}

export default App;
