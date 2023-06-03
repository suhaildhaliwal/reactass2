import "./header.css"

let Main = () => {
   
  return <div className="main">
    
   <h1 className="heading">Trending Posts</h1><br/>
    {/* <i className="fa fa-filter" style="font-size:18px; color:#4072bd" ></i> */}
     <strong className="filtertext">Filter By Category</strong><br/>
      <div className="myDIV">      
        <button className="btn active">All</button>

                <button className="btn" type="submit">Artificial Intelligence</button>


<button className="btn">Cloud Computing</button>

 
 <button className="btn">DevOps</button>


<button className="btn">Programming Languages</button>


<button className="btn">Mobile Application Development</button>


<button className="btn">Technology And Tools</button>
    

<button className="btn">Get a job in a Tech Company</button>


<button className="btn">Others</button>
       
</div>
<br/>
<article className="card-container">
       <a href="#">
         <div className="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt="Machine Learning"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">Introduction to a Machine Learning Online Course</p>
             <p className="auth-wrapper"><span className="card-author">Edyoda </span>| <span className="card-date">23 Aug 2019</span></p>
             <p className="card-desc">
               We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help...
             </p>
           </div>
         </div>
       </a>
     </article>
     <article className="card-container">
       <a href="#">
         <div className="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt="Machine Learning"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">LAMP Stack Vs. MEAN<br/> Stack</p>
             <p className="auth-wrapper"><span className="card-author">Edyoda </span>| <span className="card-date">23 Aug 2019</span></p>
             <p className="card-desc">
               We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help...
             </p>
           </div>
         </div>
       </a>
     </article>
     <article className="card-container">
       <a href="#">
         <div className="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt="Machine Learning"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">Impact of Cloud Computing in various industries</p>
             <p className="auth-wrapper"><span className="card-author">Edyoda </span>| <span className="card-date">23 Aug 2019</span></p>
             <p className="card-desc">
               We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help...
             </p>
           </div>
         </div>
       </a>
     </article>
     <article className="card-container">
       <a href="#">
         <div className="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt="Machine Learning"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">Challenges of Machine Learning in Big Data Analytics</p>
             <p className="auth-wrapper"><span className="card-author">Edyoda </span>| <span className="card-date">23 Aug 2019</span></p>
             <p className="card-desc">
               We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help...
             </p>
           </div>
         </div>
       </a>
     </article>
     <article className="card-container">
       <a href="#">
         <div class="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt="Machine Learning"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">Breaking the Myths around Cybersecurity</p>
             <p className="auth-wrapper"><span className="card-author">Edyoda </span>| <span className="card-date">23 Aug 2019</span></p>
             <p className="card-desc">
               We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help...
             </p>
           </div>
         </div>
       </a>
     </article>
     <article className="card-container">
       <a href="#">
         <div className="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" alt="Machine Learning"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">Importance of Data Backup and Recovery in the IT industry</p>
             <p className="auth-wrapper"><span className="card-author">Edyoda </span>| <span className="card-date">23 Aug 2019</span></p>
             <p className="card-desc">
               We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help...
             </p>
           </div>
         </div>
       </a>
     </article>
      <article className="card-container">
       <a href="#">
         <div className="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" alt="Web Scrapping"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">What is Web Scrapping?</p>
             <p className="auth-wrapper"><span className="card-author">Zac Clancy </span>| <span className="card-date">25 Sept 2019</span></p>
             <p className="card-desc">Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet.Some websites and platforms offer application programming interfaces 
             </p>
           </div>
         </div>
       </a>
     </article>
   <article className="card-container">
       <a href="#">
         <div className="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt="Income Share"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">What is Income Share Agreement?</p>
             <p className="auth-wrapper"><span className="card-author">Edyoda </span>| <span className="card-date">14 Oct 2019</span></p>
             <p className="card-desc">The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist...
             </p>
           </div>
         </div>
       </a>
     </article>
     <article className="card-container">
       <a href="#">
         <div className="card-header">
           <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt="Practical_machine_learning"/>
         </div>
         <div className="card-body">
           <div className="card-content">
             <p className="card-title">Practical Machine Learning with Python and Keras</p>
             <p className="auth-wrapper"><span className="card-author">Daniel Pyrathon </span>| <span className="card-date">16 Oct 2019</span></p>
             <p className="card-desc">Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively..
             </p>
           </div>
         </div>
       </a>
     </article>
   
   <div className="footer">
     <p>all rights are reserved</p>
     
     </div>
  </div>
  



}

export default Main