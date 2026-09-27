import ModulesList from "../modules/ModulesList";
import CourseStatus from "./CourseStatus";

export default function Home() {
  return (
    <div id="wd-home">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <h2>Modules</h2>
              <ModulesList />
            </td>
            <td valign="top" width="220px">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
