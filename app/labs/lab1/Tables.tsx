export default function Tables() {
  const grades = [85, 90, 95, 88, 92, 79, 96, 84, 91, 87];
  const average = Math.round(
    grades.reduce((sum, g) => sum + g, 0) / grades.length
  );

  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Next.js Routing</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Forms</td>
            <td align="center">3/10/21</td>
            <td align="right">79</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Props &amp; Children</td>
            <td align="center">3/17/21</td>
            <td align="right">96</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Navigation</td>
            <td align="center">3/24/21</td>
            <td align="right">84</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Layouts</td>
            <td align="center">3/31/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Kambaz Prototype</td>
            <td align="center">4/7/21</td>
            <td align="right">87</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">{average}</td>
          </tr>
        </tfoot>
      </table>

      {/* TODO (On your own): a second personal table, e.g. weekly schedule */}
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Day</th>
            <th align="center">Activity</th>
            <th align="center">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td align="center">Gym</td>
            <td align="center">6:00 AM - 8:00 AM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td align="center">Classes</td>
            <td align="center">9:00 AM - 11:00 AM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td align="center">Work</td>
            <td align="center">2:00 PM - 6:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
