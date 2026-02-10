"use client";

import { UploadDropzone } from "@/utils/uploadthing";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Upload Call Recording</h1>

        <div className="border-2 border-dashed border-gray-400 rounded-lg p-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l-3.75 3.75m3.75-3.75l3.75 3.75M12 4.5v15m-7.5-7.5h15"
                />
              </svg>
            </div>

            <h2 className="text-lg font-semibold mb-1">
              Upload Call Recordings
            </h2>
            <p className="text-gray-600 mb-4">
              Drag and drop your files here, or click to browse
            </p>

            <UploadDropzone
              endpoint="audioUploader"
              onClientUploadComplete={(res) => {
                console.log("Upload completed:", res);
                alert("Upload completed successfully!");
              }}
              onUploadError={(error: Error) => {
                console.error("Upload error:", error);
                alert(`Upload failed: ${error.message}`);
              }}
              className="ut-button:bg-white ut-button:border ut-button:border-gray-300 
                        ut-button:text-gray-700 ut-button:hover:bg-gray-50
                        ut-button:px-4 ut-button:py-2 ut-button:rounded-md
                        ut-button:font-medium ut-button:shadow-sm"
            />
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Supported formats: WAV, MP3, M4A, AAC, FLAC</p>
          <p className="mt-1">Maximum file size: 64 MB per file</p>
        </div>
      </div>
    </div>
  );
}
