import Module from "./Module";

export const modules = [
  {
    id: "1",
    name: "Week 1: Introduction & Setup",
    lessons: [
      {
        id: "1-1",
        title: "Introduction to the course",
        contentItems: ["Reading: Syllabus", "Video: Course overview"],
      },
      {
        id: "1-2",
        title: "Installing Node.js and an IDE",
        contentItems: ["Reading: §1.2.1-1.2.2", "Task: Verify node -v"],
      },
      {
        id: "1-3",
        title: "Creating a Next.js application",
        contentItems: ["Reading: §1.2.4-1.2.5", "Task: npx create-next-app"],
      },
    ],
  },
  {
    id: "2",
    name: "Week 2: HTML User Interfaces",
    lessons: [
      {
        id: "2-1",
        title: "Headings, paragraphs, and lists",
        contentItems: ["Reading: §1.3.1-1.3.3", "Lab: HeadingTags, ListTags"],
      },
      {
        id: "2-2",
        title: "Tables and images",
        contentItems: ["Reading: §1.3.4-1.3.5", "Lab: Tables, Images"],
      },
      {
        id: "2-3",
        title: "Forms and form fields",
        contentItems: ["Reading: §1.3.6", "Lab: Forms, YourForm"],
      },
    ],
  },
  {
    id: "3",
    name: "Week 3: Components & Navigation",
    lessons: [
      {
        id: "3-1",
        title: "Props and children",
        contentItems: [
          "Reading: §1.3.7-1.3.8",
          "Lab: HighlightedParagraph, HighlightedBox",
        ],
      },
      {
        id: "3-2",
        title: "Anchor tags and routing",
        contentItems: ["Reading: §1.3.9-1.3.10", "Lab: AnchorTag, Labs index"],
      },
      {
        id: "3-3",
        title: "Layouts with the App Router",
        contentItems: ["Reading: §1.3.11", "Lab: TOC, layout.tsx"],
      },
    ],
  },
];

export default function ModulesList() {
  return (
    <div id="wd-modules">
      {modules.map((module) => (
        <Module key={module.id} module={module} />
      ))}
    </div>
  );
}
