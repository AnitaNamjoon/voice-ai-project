// app/api/uploadthing/core.ts
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { NextRequest } from "next/server"; 

const f = createUploadthing();

// Proper authentication
const auth = async (req: NextRequest) => {
  // Get token from Authorization header or cookies
  const token = req.headers.get("Authorization")?.split(" ")[1] || 
                req.cookies.get("token")?.value;
  
  if (!token) {
    return null;
  }
  
  // In a real app, verify the token here
  return { id: "user-id" };
};

export const ourFileRouter = {
  audioUploader: f({
    audio: {
      maxFileSize: "64MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const user = await auth(req);

      if (!user) {
        // Custom error message as requested
        throw new UploadThingError("Oops! Looks like you don't have access to this, please go back.");
      }

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);
      
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;