import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas.js";
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
if (!projectId)
  throw new Error(
    "Set SANITY_STUDIO_PROJECT_ID to your real Sanity project ID before starting Studio.",
  );
export default defineConfig({
  name: "ojasvi",
  title: "Ojasvi Company Profile",
  projectId,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Ojasvi")
          .items([
            S.listItem()
              .title("Executive summary & company positioning")
              .child(
                S.document()
                  .schemaType("companyProfile")
                  .documentId("ojasvi-company-profile"),
              ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
