// tailwind.config.ts
import { withUt } from "uploadthing/tw"; 

export default withUt({
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    // Keep your other content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});