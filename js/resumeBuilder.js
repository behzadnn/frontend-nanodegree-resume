  bio={
	"name":"Behzad Najafi",
     "role":"Data Scientist, Researcher and Developer",
     "skills": ["Python", "R programming", "business Analytics","Machine Learning", "Exploratory Data Analytics", "Inferential statisticss", "Big Data"],
     "welcomeMsg":"Welcome to my website",
     "bioPic":"https://goo.gl/BmTv6S",
     "contacts":{
      "contactGeneric":"+39 3209081357",
     	"mobile":"+39 3209081357",
     	"email":"Behzad.najafi@polimi.it",
     	"github":"@behzadnn",
     	"twitter":"@italianwithlove",
     	"location":"Milan Italy",
     	"blog":"http://www.energia.polimi.it/english/department/scheda_persona.php?id=529"
     }
  };

job={
"jobs":[ {
         "workTitle":"PostDoctoral Researcher",
         "workEmployer":"Politecnico di Milano",
         "workDates":"Since Jan 2016",
         "workDescription":"Machine learning and statistical analysis for predicting the behaviour of Energy Systems"


          },
          {
          "workTitle":"PostDoctoral Researcher",
          "workEmployer":"Politecnico di Milano",
          "workDates":"Jan 2013-Dec 2015",
          "workDescription":"Machine learning for predicting the behaviour of Fuel cells"

          }
        ]
};


work={};
work.workStart="Jan 2016";
work.workEmployer="Politecnico di Milano";
work.workTitle="PostDoctoral Researcher";
work.workDates="Since Jan 2016";
work.workLocation="Milan, Italy";
work.wworkDescription="Reseach in the area of Energy Data Science";

var projects={
  "projects":[
    {
      "projectTitle":"Application of machine Learning for simulation of fuel cell based systems",
      "projectDates":"Jan 2013-Dec 2015",
     "projectDescription": "Employing neural networks for simulating fuel cell degradation",
     "projectImage":"http://www.extremetech.com/wp-content/uploads/2013/09/340.jpg"
           },
    {
      "projectTitle":"Application of accelerated life test for estimating the durability of boilers",
      "projectDates":"Aug 2015-March 2016",
     "projectDescription": "Implementation of ALT in R programming language",
     "projectImage":"hhttp://www.weibull.com/basics/selectmodel.gif"

    }
  ]
};

var education = {
  "schools":[
  {
  "schoolName":"Politecnico di Milano",
  "schoolDegree":"PhD ",
  "schoolDates": "Jan 2013-Dec 2015",
  "schoolLocation": "Milan, Italy",
  "HTMLschoolMajor": "Energy and Nuclear Science and Technology"},
  {
  "schoolName":"Politecnico di Milano",
  "schoolDegree":"M.Sc. ",
  "schoolDates": "Oct 2010-Dec 2012",
  "schoolLocation": "Piacenza, Italy",
  "HTMLschoolMajor": "Energy Engineering"
  }
  ],
    "OnlineCourses":[
  {
  "onlineTitle":"Data Science",
  "onlineSchool":"John Hopkin UNiversity, Coursera",
  "onlineDates": "Since August 2015",
  "onlineURL": "wwww.coursera.org"
  },
  {
  "onlineTitle":"Machine Learning Engineer",
  "onlineSchool":"Udacity",
  "onlineDates": "Since Jan 2015",
  "onlineURL": "wwww.udacity.com"
  }
  ]

}

var formattedName =HTMLheaderName.replace("%data%",bio.name)
var formattedRole =HTMLheaderRole.replace("%data%",bio.role)
$("#header").append(formattedName)
$("#header").append(formattedRole)
if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart)
  console.log(HTMLskillsStart)
  for(number=0;number<bio.skills.length;number++){
      var formattedSkills =HTMLskills.replace("%data%",bio.skills[number])
      $("#skills").append(formattedSkills)
      console.log(formattedSkills)
  }
}
function displayWork(){
for (jobIndex in job.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedworkEmployer =HTMLworkEmployer.replace("%data%",job.jobs[jobIndex].workEmployer);
  var formattedworkTitle =HTMLworkTitle.replace("%data%",job.jobs[jobIndex].workTitle);
  var formattedEmployerTitle=formattedworkEmployer+formattedworkTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedworkDates =HTMLworkDates.replace("%data%",job.jobs[jobIndex].workDates);
  $(".work-entry:last").append(formattedworkDates);
  var formattedworkDescription =HTMLworkDescription.replace("%data%",job.jobs[jobIndex].workDescription);
  $(".work-entry:last").append(formattedworkDescription);
} ;  
}
displayWork();
/*
$(document).click(function(loc) {
  var x=loc.pageX;
  var y=loc.pageY;
  // your code goes here
  logClicks(x,y)
});
*/


//Name
/*
var formattedName =HTMLheaderName.replace("%data%",bio.name)
var formattedRole =HTMLheaderRole.replace("%data%",bio.role)
//skills

//contact information
var formattedWelcomeMsg =HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg)
var formattedBioPic =HTMLbioPic.replace("%data%",bio.bioPic)
var formattedContactGeneric =HTMLcontactGeneric.replace("%data%",bio.contacts.contactGeneric)
var formattedMobile =HTMLmobile.replace("%data%",bio.contacts.mobile)
var formattedEmail =HTMLemail.replace("%data%",bio.contacts.email)
var formattedGithub =HTMLtwitter.replace("%data%",bio.contacts.github)
var formattedTwitter =HTMLgithub.replace("%data%",bio.contacts.twitter)
var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location)
var formattedBlog=HTMLblog.replace("%data%",bio.contacts.blog)

/*
console.log(work)

//formating
//var formattedworkStart =HTMLworkStart.replace("%data%",work.workStart)
var formattedworkEmployer =HTMLworkEmployer.replace("%data%",work.workEmployer)
var formattedworkTitle =HTMLworkTitle.replace("%data%",work.workTitle)
var formattedworkDates =HTMLworkDates.replace("%data%",work.workDates)
var formattedworkLocation=HTMLworkLocation.replace("%data%",work.workLocation)
var formattedworkDescription =HTMLworkDescription.replace("%data%",work.workDescription)
//apending to the page
$("#workExperience").append(HTMLworkStart)
$("#workExperience").append(formattedworkEmployer)
$("#workExperience").append(formattedworkTitle)
$("#workExperience").append(formattedworkDates)
$("#workExperience").append(formattedworkLocation)
$("#workExperience").append(formattedworkDescription)
*/

/*
$("#header").append(formattedName)
$("#header").append(formattedRole)
$("#header").append(formattedSkills)
$("#header").append(formattedWelcomeMsg)
$("#header").append(formattedBioPic)
//$("#header").append(formattedContactGeneric)
$("#header").append(formattedMobile)
$("#header").append(formattedEmail)
$("#header").append(formattedGithub)
$("#header").append(formattedTwitter)
$("#header").append(formattedLocation)
$("#header").append(formattedBlog)

*/


/*
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

*/





