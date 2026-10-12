import Lesson from "./Lesson";
import Module from "./Module";

export default function Modules() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1: Introduction & Setup">
          <Lesson title="Introduction to the course">
            <li className="wd-content-item">Reading: Syllabus</li>
            <li className="wd-content-item">Video: Course overview</li>
          </Lesson>
          <Lesson title="Installing Node.js and an IDE">
            <li className="wd-content-item">Reading: §1.2.1-1.2.2</li>
            <li className="wd-content-item">Task: Verify node -v</li>
          </Lesson>
          <Lesson title="Creating a Next.js application">
            <li className="wd-content-item">Reading: §1.2.4-1.2.5</li>
            <li className="wd-content-item">Task: npx create-next-app</li>
          </Lesson>
        </Module>
        <Module title="Week 2: HTML User Interfaces">
          <Lesson title="Headings, paragraphs, and lists">
            <li className="wd-content-item">Reading: §1.3.1-1.3.3</li>
            <li className="wd-content-item">Lab: HeadingTags, ListTags</li>
          </Lesson>
          <Lesson title="Tables and images">
            <li className="wd-content-item">Reading: §1.3.4-1.3.5</li>
            <li className="wd-content-item">Lab: Tables, Images</li>
          </Lesson>
          <Lesson title="Forms and form fields">
            <li className="wd-content-item">Reading: §1.3.6</li>
            <li className="wd-content-item">Lab: Forms, YourForm</li>
          </Lesson>
        </Module>
        <Module title="Week 3: Styling with CSS and Tailwind">
          <Lesson title="CSS selectors and the box model">
            <li className="wd-content-item">Reading: §2.1.1-2.1.12</li>
            <li className="wd-content-item">Lab: Lab 2 CSS samples</li>
          </Lesson>
          <Lesson title="Layout: position, float, flex">
            <li className="wd-content-item">Reading: §2.1.13-2.1.19</li>
            <li className="wd-content-item">Lab: Positions, Float, Flex</li>
          </Lesson>
          <Lesson title="Tailwind CSS and React Icons">
            <li className="wd-content-item">Reading: §2.2-2.3</li>
            <li className="wd-content-item">Lab: Tailwind lab, ReactIconsSampler</li>
          </Lesson>
        </Module>
        <Module title="Week 4: Deploying to Production">
          <Lesson title="Deploying to Vercel">
            <li className="wd-content-item">Reading: §1.6, §2.5</li>
            <li className="wd-content-item">Task: deploy webdev-client and disable Deployment Protection</li>
          </Lesson>
        </Module>
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)">
            <li className="wd-content-item">Sample content item</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}
