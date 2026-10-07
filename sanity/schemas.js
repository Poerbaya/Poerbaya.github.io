const required = (Rule) => Rule.required();
export const schemaTypes = [
  {
    name: "companyProfile",
    title: "Ojasvi — Executive summary & company positioning",
    type: "document",
    fields: [
      {
        name: "executiveSummary",
        title: "Executive summary",
        type: "text",
        validation: required,
      },
      { name: "positioning", type: "text", validation: required },
      {
        name: "proposition",
        title: "Corporate proposition",
        type: "string",
        validation: required,
      },
      { name: "mission", type: "text", validation: required },
      { name: "vision", type: "text", validation: required },
      {
        name: "audiences",
        type: "array",
        of: [{ type: "string" }],
        validation: (Rule) => Rule.required().min(1),
      },
      {
        name: "principles",
        type: "array",
        of: [{ type: "string" }],
        validation: (Rule) => Rule.required().length(6),
      },
      {
        name: "personality",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "title", type: "string", validation: required },
              { name: "description", type: "text", validation: required },
            ],
          },
        ],
        validation: (Rule) => Rule.required().length(3),
      },
      { name: "owner", type: "string", validation: required },
      { name: "reviewedAt", type: "datetime", validation: required },
      {
        name: "classification",
        type: "string",
        options: { list: ["Public", "Internal"] },
        initialValue: "Public",
        validation: required,
      },
      {
        name: "approvalStatus",
        type: "string",
        options: { list: ["draft", "review", "approved"] },
        initialValue: "draft",
        validation: required,
      },
    ],
    preview: { select: { title: "proposition" } },
  },
];
