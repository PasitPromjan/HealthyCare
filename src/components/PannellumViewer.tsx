"use client";

import React from 'react';
import ReactPannellum from 'react-pannellum';

export default function PannellumViewer({ src }: { src: string }) {
    const config = {
        autoLoad: true,
        showControls: true,
        pitch: 10,
        yaw: 180,
        hfov: 110,
    };

    return (
        <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-inner">
            <ReactPannellum
                id="pannellum_viewer"
                sceneId="firstScene"
                imageSource={src}
                config={config}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
}
