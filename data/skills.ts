export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "C++", "SQL", "R"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Angular", "React Native", "HTML5 Canvas", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Laravel", "Yii", "REST APIs", "Microservices", "Elasticsearch"],
  },
  {
    label: "Cloud & Infra",
    items: ["AWS", "Terraform", "Docker", "CI/CD", "GitHub Actions", "S3 / CloudFront"],
  },
  {
    label: "Practice",
    items: [
      "System Design",
      "Team Leadership",
      "Mentorship",
      "DevOps",
      "Code Review",
      "Product Thinking",
    ],
  },
];

export const certifications = [
  "SQL Essential Training",
  "React.js Essential Training",
  "Blockchain: Beyond the Basics",
  "HTML5 Game Development with Phaser",
  "React Native Essential Training",
];

export const languagesSpoken = [
  { name: "English", level: "Professional Working" },
  { name: "Hindi", level: "Full Professional" },
  { name: "Gujarati", level: "Full Professional" },
];

export const publications = [
  { title: "Learn YII PHP Framework", year: "" },
];
