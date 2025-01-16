export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3>Assignment Name</h3>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        <textarea id="wd-description" cols={40} rows={10}>
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
          Your full name and section
          Links to each of the lab assignments
          Link to the Kanbas application
          Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
  
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>
          <tr>
    <td colSpan={2} style={{ height: '15px' }}></td>
         </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>PROJECTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ height: '15px' }}></td>
         </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
                <option>Complete/Incomplete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ height: '15px' }}></td>
         </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ height: '15px' }}></td>
         </tr>
         <tr>
          <td align="right" valign="top"></td>
            <td>
            <td align="right" valign="top">
              Online Entry Options
            </td>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
         <td colSpan={2} style={{ height: '15px' }}></td>
         </tr>
          <tr>
          <td align="right" valign="top"></td>
            <td align="left" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ height: '15px' }}></td>
         </tr>
          <tr>
          <td align="right" valign="top"></td>
            <td align="left" valign="top">
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ height: '15px' }}></td>
         </tr>
          <tr>
          <td align="right" valign="top"></td>
            <td align="left" valign="top">
              <label htmlFor="wd-available-from" style={{ marginRight: '27px' }}>Available from</label>
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input id="wd-available-from" type="date" value="2024-05-06" style={{ marginRight: '3px' }}/>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        </table>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '3px', marginTop: '15px' }}>
    <button>Cancel</button>
    <button>Save</button>
  </div>
      </div>
    );
  }