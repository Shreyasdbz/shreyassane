/** @format */

export const photographyPhoto = {
  name: "photographyPhoto",
  type: "document",
  title: "Photography",
  fields: [
    {
      title: "Image title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
