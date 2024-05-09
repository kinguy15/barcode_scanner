// file = Html5QrcodePlugin.jsx
import {Html5QrcodeScanner, Html5QrcodeScanType, Html5QrcodeSupportedFormats} from 'html5-qrcode';
import {useEffect} from 'react';

const qrcodeRegionId = "html5qr-code-full-regionx";

const Html5QrcodePlugin = (props) => {

    useEffect(() => {
        // when component mounts
        const verbose = props.verbose === true;

        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, {
            useBarCodeDetectorIfSupported: true,
            qrbox: 205,
            fps: 10,
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_FILE],
            showTorchButtonIfSupported: true,
            showZoomSliderIfSupported: true,
            defaultZoomValueIfSupported: 1.0,
            experimentalFeatures: {
                useBarCodeDetectorIfSupported: true
            },
            formatsToSupport: [
                Html5QrcodeSupportedFormats.QR_CODE,
                Html5QrcodeSupportedFormats.AZTEC,
                Html5QrcodeSupportedFormats.CODABAR,
                Html5QrcodeSupportedFormats.CODE_39,
                Html5QrcodeSupportedFormats.CODE_93,
                Html5QrcodeSupportedFormats.CODE_128,
                Html5QrcodeSupportedFormats.DATA_MATRIX,
                Html5QrcodeSupportedFormats.MAXICODE,
                Html5QrcodeSupportedFormats.ITF,
                Html5QrcodeSupportedFormats.EAN_13,
                Html5QrcodeSupportedFormats.EAN_8,
                Html5QrcodeSupportedFormats.PDF_417,
                Html5QrcodeSupportedFormats.RSS_14,
                Html5QrcodeSupportedFormats.RSS_EXPANDED,
                Html5QrcodeSupportedFormats.UPC_A,
                Html5QrcodeSupportedFormats.UPC_E,
                Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION]
        }, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div id={qrcodeRegionId}/>
    );
};

export default Html5QrcodePlugin;