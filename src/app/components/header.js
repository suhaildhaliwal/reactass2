import "./header.css"
let Header = () => {

    return <div>
           <div className="navbar">
     <div className="logos">  
        <strong className="logo">EDYODA</strong><br/>
           <i className="logostories">Stories</i>
            </div>
<div className="dropdown">   
  <button className="dropbtn">Explore Categories
 <img className="dropdownicon" alt="Dropdown Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="/>
   </button>
    <div className="dropdown-content">
<a href="https://www.edyoda.com/stories/category/artificial-intelligence">Artificial Intelligence</a>
<a href="https://www.edyoda.com/stories/category/cloud-computing">Cloud Computing</a>
<a href="https://www.edyoda.com/stories/category/devops">DevOps</a>
     <a href="https://www.edyoda.com/stories/category/programming-languages">Programming Languages</a>
<a href="https://www.edyoda.com/stories/category/mobile-application-development">Mobile Application Development</a>
<a href="https://www.edyoda.com/stories/category/technology-and-tools">Technology And Tools</a>
<a href="https://www.edyoda.com/stories/category/get-a-job-in-a-tech-company">Get a job in a Tech Company</a>
<a href="https://www.edyoda.com/stories/category/others">Others</a>
       </div>
      </div>
     </div>
      
    </div>
  
  
  
  
   }

   export default Header