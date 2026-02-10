"use client";

import { UploadDropzone } from "@/utils/uploadthing";

export default function AudioUploadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white gap-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-purple-600">
          Upload Call Recording
        </h1>
        <p className="text-gray-500">Audio only (Max 64MB)</p>
      </div>

      <UploadDropzone
        endpoint="mediaUpload"
        className="bg-slate-900 ut-label:text-white ut-button:bg-white ut-button:text-black rounded-xl p-10"
        onClientUploadComplete={(res) => {
          console.log("Upload Success:", res);
          alert("Upload Complete!");
        }}
        onUploadError={(error: Error) => {
          alert(`Upload Error: ${error.message}`);
        }}
      />
    </main>
  );
}
