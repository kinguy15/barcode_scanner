import './App.css'
import Html5QrcodePlugin from "./componenets/html-barcode-scanner.jsx";

function App() {
    const onNewScanResult = (decodedText, decodedResult) => {
        alert(`Scan result: ${decodedText}`);
    };

    return (
        <div className="App">
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    );
}

export default App
