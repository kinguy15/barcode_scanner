import './App.css'
import Html5QrcodePlugin from "./componenets/html-barcode-scanner.jsx";
import {useState} from "react";

function App() {
    const [scanHistory, setScanHistory] = useState([])
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log(`Scan result: ${decodedText}`, decodedResult);
        setScanHistory([...scanHistory, decodedText])
    };

    return (
        <div className="App">
            <Html5QrcodePlugin
                qrCodeSuccessCallback={onNewScanResult}
            />
            <div>
                {
                    scanHistory.map((scan, index) => {
                        return <div key={index}>{scan}</div>
                    })
                }
            </div>
        </div>
    );
}

export default App
