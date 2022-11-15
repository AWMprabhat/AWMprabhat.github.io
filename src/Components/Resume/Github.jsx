
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <>
    
    <Row  style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <GitHubCalendar
        username="AWMprabhat"
        blockSize={15}
        blockMargin={5}
        color="green"
        fontSize={12}
      />
      
    </Row>
    <div >
    <div>
      <img  src="https://github-readme-stats.vercel.app/api/top-langs?username=AWMprabhat&show_icons=true&locale=en&layout=compact&theme=flag-india" alt="AWMprabhat" />
      <img  src="https://github-readme-streak-stats.herokuapp.com/?user=AWMprabhat&theme=flag-india" alt="AWMprabhat" />
      </div>
    </div>
    </>
  );
}

export default Github;
