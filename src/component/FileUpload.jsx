
import React, { useState } from "react";
import { extractFromPDF } from "../utils/extractPdf";

const FileUpload = ({ onExtracted }) => {
    const [fileName, setFileName] = useState("");

    const handleFile = async (e) => {
        const file = e.target.files[0];
        if (!file || file.type !== "application/pdf") return;

        setFileName(file.name);

        const text = await extractFromPDF(file);
        const data = parseHealthData(text);
        onExtracted(data);
    };

    const parseHealthData = (text) => {
        const Params = ["hemoglobin", "glucose", "cholesterol", "rbc", "wbc", "platelets"];
        const lines = text.toLowerCase().split("\n");

        const result = [];

        for (let line of lines) {
            for (let param of Params) {
                if (line.includes(param)) {
                    const parts = line.split(/:|\s+/).filter(Boolean);
                    const index = parts.findIndex(p => p.includes(param));
                    if (index !== -1 && parts[index + 1]) {
                        result.push({
                            parameter: param,
                            value: parts[index + 1],
                            unit: parts[index + 2] || "",
                        });
                    }
                }
            }
        }

        return result;
    };


    return (
        <div className="p-4 border rounded shadow-sm">
            <input type="file" accept="application/pdf" onChange={handleFile} />
            {fileName && <p className="mt-2 text-sm text-blue-400">Loaded: {fileName}</p>}
        </div>
    );
};

export default FileUpload;
