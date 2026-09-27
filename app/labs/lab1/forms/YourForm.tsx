"use client";

export default function YourForm() {
  return (
    <div id="wd-your-form-wrapper">
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >

        <label htmlFor="wd-your-first-name">First name:</label>
        <input
          type="text"
          id="wd-your-first-name"
          placeholder="Manas"
          defaultValue="Manas"
        />
        <br />
        <label htmlFor="wd-your-last-name">Last name:</label>
        <input
          type="text"
          id="wd-your-last-name"
          placeholder="Salian"
          defaultValue="Salian"
        />
        <br />
        <label htmlFor="wd-your-student-id">Student ID:</label>
        <input
          type="password"
          id="wd-your-student-id"
          defaultValue="002537472"
        />
        <br />

        <label htmlFor="wd-your-bio">Why I am taking this course:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={30}
          rows={5}
          defaultValue="I'm taking this course to learn full-stack web development with Next.js and React."
        />
        <br />

        <label>Class standing:</label>
        <br />
        <input type="radio" name="your-standing" id="wd-standing-freshman" />
        <label htmlFor="wd-standing-freshman">Freshman</label>
        <br />
        <input type="radio" name="your-standing" id="wd-standing-sophomore" />
        <label htmlFor="wd-standing-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="your-standing" id="wd-standing-junior" />
        <label htmlFor="wd-standing-junior">Junior</label>
        <br />
        <input
          type="radio"
          name="your-standing"
          id="wd-standing-senior"
          defaultChecked
        />
        <label htmlFor="wd-standing-senior">Senior</label>
        <br />
        <input type="radio" name="your-standing" id="wd-standing-graduate" />
        <label htmlFor="wd-standing-graduate">Graduate</label>
        <br />

        <label>Enrollment:</label>
        <br />
        <input
          type="radio"
          name="your-enrollment"
          id="wd-enrollment-full"
          defaultChecked
        />
        <label htmlFor="wd-enrollment-full">Full-time</label>
        <br />
        <input type="radio" name="your-enrollment" id="wd-enrollment-part" />
        <label htmlFor="wd-enrollment-part">Part-time</label>
        <br />

        <label>Interests:</label>
        <br />
        <input type="checkbox" id="wd-interest-react" defaultChecked />
        <label htmlFor="wd-interest-react">React</label>
        <br />
        <input type="checkbox" id="wd-interest-nextjs" defaultChecked />
        <label htmlFor="wd-interest-nextjs">Next.js</label>
        <br />
        <input type="checkbox" id="wd-interest-mongodb" />
        <label htmlFor="wd-interest-mongodb">MongoDB</label>
        <br />
        <input type="checkbox" id="wd-interest-typescript" />
        <label htmlFor="wd-interest-typescript">TypeScript</label>
        <br />

        <label htmlFor="wd-your-major">Major: </label>
        <br />
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="IS">Information Systems</option>
          <option value="DS">Data Science</option>
          <option value="EE">Electrical Engineering</option>
        </select>
        <br />

        <label htmlFor="wd-your-topics">
          Topics I want to deepen this term:
        </label>
        <br />
        <select
          multiple
          id="wd-your-topics"
          defaultValue={["FRONTEND", "FULLSTACK"]}
        >
          <option value="FRONTEND">Frontend UI</option>
          <option value="BACKEND">Backend APIs</option>
          <option value="FULLSTACK">Full-stack integration</option>
          <option value="DEVOPS">Deployment / DevOps</option>
        </select>
        <br />

        <label htmlFor="wd-your-email">School email: </label>
        <input
          type="email"
          id="wd-your-email"
          placeholder="salian.m@university.edu"
          defaultValue="salian.m@university.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue="2027"
          min={2024}
          max={2032}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input
          type="date"
          id="wd-your-start-date"
          defaultValue="2024-09-01"
          min="2020-01-01"
          max="2030-12-31"
        />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited are you about this course (0-10)?{" "}
        </label>
        <input
          type="range"
          id="wd-your-excitement"
          defaultValue="9"
          min="0"
          max="10"
        />
        <br />

        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
