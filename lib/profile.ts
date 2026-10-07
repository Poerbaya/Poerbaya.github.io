export type CompanyProfile = {
  executiveSummary: string;
  positioning: string;
  proposition: string;
  mission: string;
  vision: string;
  audiences: string[];
  principles: string[];
  personality: { title: string; description: string }[];
};
export const defaultProfile: CompanyProfile = {
  executiveSummary:
    "Ojasvi Energy Group is a new, globally oriented diversified energy company headquartered in Pekajangan, Central Java, Indonesia. We are building our future with responsibility, transparency, and long-term thinking.",
  positioning:
    "A globally oriented diversified energy company developing, connecting, operating, and investing in energy systems across conventional, renewable, infrastructure, market, and emerging technology sectors.",
  proposition: "Powering Progress. Shaping Tomorrow.",
  mission:
    "To deliver reliable and responsible energy while accelerating the development of a more resilient, efficient, and sustainable global energy system.",
  vision:
    "To become a globally trusted integrated energy company shaping the next era of energy through infrastructure, technology, innovation, and responsible investment.",
  audiences: [
    "Customers",
    "Prospective customers",
    "Investors",
    "Institutional stakeholders",
    "Government and regulators",
    "Business partners",
    "Suppliers",
    "Job seekers",
    "Employees",
    "Media",
    "Communities",
    "Researchers",
    "General public",
  ],
  principles: [
    "Safety",
    "Integrity",
    "Reliability",
    "Innovation",
    "Sustainability",
    "Partnership",
  ],
  personality: [
    {
      title: "Premium and corporate",
      description:
        "Institutional, composed, technically credible, mature, and suitable for investors and governments.",
    },
    {
      title: "Bold and futuristic",
      description:
        "Forward-looking technology, advanced energy systems, innovation, data, AI, hydrogen, storage, and future infrastructure.",
    },
    {
      title: "Clean and sustainability-focused",
      description:
        "Responsible development, environmental awareness, transition strategy, transparency, and long-term stewardship.",
    },
  ],
};
export async function companyProfile(): Promise<CompanyProfile> {
  const project = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  if (
    !project ||
    !/^[a-z0-9]+$/.test(project) ||
    !/^[a-z0-9_-]+$/.test(dataset)
  )
    return defaultProfile;
  try {
    const url = new URL(
      `https://${project}.apicdn.sanity.io/v2025-02-19/data/query/${dataset}`,
    );
    url.searchParams.set(
      "query",
      '*[_type == "companyProfile" && _id == "ojasvi-company-profile" && approvalStatus == "approved" && classification == "Public"][0]{executiveSummary,positioning,proposition,mission,vision,audiences,principles,personality[]{title,description}}',
    );
    const response = await fetch(url, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("CMS unavailable");
    const { result } = await response.json();
    if (validProfile(result)) return result;
  } catch {
    console.warn("Company profile unavailable; using PRD content.");
  }
  return defaultProfile;
}
export function validProfile(raw: unknown): raw is CompanyProfile {
  if (!raw || typeof raw !== "object") return false;
  const value = raw as Record<string, unknown>;
  if (
    [
      "executiveSummary",
      "positioning",
      "proposition",
      "mission",
      "vision",
    ].some((k) => typeof value[k] !== "string" || !(value[k] as string).trim())
  )
    return false;
  if (
    ["audiences", "principles"].some(
      (k) =>
        !Array.isArray(value[k]) ||
        !(value[k] as unknown[]).length ||
        !(value[k] as unknown[]).every(
          (v) => typeof v === "string" && v.trim(),
        ),
    )
  )
    return false;
  return (
    Array.isArray(value.personality) &&
    value.personality.length > 0 &&
    value.personality.every(
      (p) =>
        p && typeof p.title === "string" && typeof p.description === "string",
    )
  );
}
