import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "N30 Digital Solutions",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      {
        name: "post",
        type: "document",
        title: "Blog Post",
        fields: [
          {
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
              source: "title",
            },
          },
          {
            name: "content",
            type: "blockContent",
            title: "Content",
          },
          {
            name: "publishedAt",
            type: "datetime",
            title: "Published at",
          },
        ],
      },
      {
        name: "blockContent",
        type: "array",
        title: "Block Content",
        of: [
          {
            type: "block",
            title: "Block",
          },
          {
            type: "image",
            title: "Image",
          },
        ],
      },
    ],
  },
});
