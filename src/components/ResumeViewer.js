import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import required styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ResumeViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '800px', border: '1px solid #ccc', margin: '20px 0' }}>
            <Viewer 
                fileUrl="/Sandesh.H.R_CV.pdf"  // Make sure it's placed in the public folder
                plugins={[defaultLayoutPluginInstance]}
            />
        </div>
    );
};

export default ResumeViewer;
