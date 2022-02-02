/** @format */

export const experience = {
  name: "experience",
  type: "document",
  title: "Experience",
  fields: [
    {
      title: "Company Name",
      name: "company",
      type: "string",
    },
    {
      title: "Position",
      name: "position",
      type: "string",
    },
    {
      title: "From Date",
      name: "dateFrom",
      type: "string",
    },
    {
      title: "Till Date",
      name: "dateTill",
      type: "string",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Technologies Used",
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
