/** @format */

export const project = {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Caption",
      name: "caption",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "url",
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "technology" }],
        },
      ],
    },
    {
      title: "Description",
      name: "desc",
      type: "richText",
    },
  ],
};
