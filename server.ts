import express from "express";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Supabase Setup
  const supabaseUrl = process.env.SUPABASE_URL || "https://mvouugwcssvnzvetmyoe.supabase.co";
  const supabaseKey = process.env.SUPABASE_ANON_KEY || "sb_publishable_KW93yI_FcfH0brg8S15CcA_GgFLr063";
  const supabase = createClient(supabaseUrl, supabaseKey);

  // API Route for Enquiry Form
  app.post("/api/enquiry", async (req, res) => {
    try {
      const { name, course, board, mobile, message, source = "Admission Form" } = req.body;
      
      // Save to Supabase
      const { error } = await supabase
        .from('enquiries')
        .insert([
          { 
            name, 
            course, 
            board, 
            mobile, 
            message, 
            source,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      console.log(`Successfully added ${source} to Supabase:`, name);
      res.status(200).json({ success: true, message: "Submitted successfully" });
    } catch (error: any) {
      console.error("Supabase Error:", error.message);
      res.status(500).json({ success: false, message: `Supabase Error: ${error.message}` });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
