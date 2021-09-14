export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6140f67c091fa0241384eea7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-qwvom4a9",
                  apiId: "413aa805-2c06-4c10-a8c8-836aba62d8db",
                },
                {
                  buildHookId: "6140f67cc9cc3324c11d8fb5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-eg6thx5a",
                  apiId: "d245bec0-dce1-4ebf-a117-ef4728b0c393",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Greatroot/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-eg6thx5a.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
