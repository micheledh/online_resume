/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //var work = {};
 //work.lastPosition = "Customer Service Executive";
 //work.workEmployer = "Booking.com";
 //work.yearsWorked = 1;
 //work.workLocation = "Home-based";

 //var education = {};
 //education[lastSchoolName] = "CNED";
 //education[yearsAttended] = 2012 + "to " + 2014;
 //education[schoolLocation] = "Home-based";

 //var formattedContacts = HTMLcontactGeneric.replace("%data%","Contacts");
 //var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
 //var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

 //$("#main").append(formattedContacts);
 //$("#main").append(formattedEmail);
 //$("#main").append(formattedWelcomeMsg);
 //$("#main").append(work["lastPosition"]);
 //$("#main").append(education.lastSchoolName);

  //$("#main").append(internationalizeButton);
  // var inName = function(){
 	//var finalName = bio.name;
 	//var names = bio.name.split(" ");
 	//names[1] = names[1].toUpperCase();
 	//names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
 	//finalName = names.join(" ");
 	//return finalName;
 //}

 

 var bio = {
 	name: "Michèle Debris-Hue",
 	role: "Web developer",
 	welcomeMessage: "Hi there!",
 	biopic: "images/silhouette.png",
 	contacts: {
 		mobile: "07511760666",
 		email: "debrishue.michele@gmail.com",
 		github: "micheledh",
 		location: "Chesterfield, Derbyshire, UK"
 	},
 	skills: ["French", "English","html","css","javascript"]
 };


 var work = {
 	jobs: [
 	{
 		employer: "Booking.com",
 		title: "Customer Service Executive",
 		location: "Littleport, Cambridgeshire, UK",
 		dates: "January 2016 to April 2017",
 		description: "Reply to customers' requests by phone and email"
 	},
 	{
 		employer: "The Merry Monk",
 		title: "Meal Supervisor",
 		location: "Isleham, Cambridgeshire, UK",
 		dates: "September 2015 to February 2016",
 		description: "Take the orders, clean the tables, train the new staff"
 	}
 	]
 };


 var projects = {
 	projects: [
 	{
 		title: "Become a web developer",
 		dates: "From July 2017",
 		description: "Do trainings to become a web developer",
 		images: ["images/udacity_logo.png", "images/web_developer.jpeg"]
 	},
 	{
 		title: "Improve my English",
 		dates: "From July 2015",
 		description: "Move to England, find a work there, and live there for a while",
 		images:["images/littleport.jpeg", "images/uk_flag.png"]
 	}
 	]
 };


 var education = {
 	schools: [
 	{
 		name: "CNED",
 		location: "Le Havre, France",
 		degree: "Tourism degree",
 		dates: "2012 to 2014",
 		url: "http://www.cned.fr/inscription/33T50DIX",
 		majors: ["English", "Project"]
 	},
 	{
 		name: "Lycée Faidherbe",
 		location: "Lille, France",
 		degree: "Biological degree",
 		dates: "2009 to 2012",
 		url: "http://www.faidherbe.org/classes-preparatoires-filieres/pourquoi-faire-une-cpge",
 		majors: ["Math"]
 	}
    ],
    onlineCourses: [
    {
    	title: "Javascript Basics",
    	school: "Udacity",
    	dates: "August 2017",
    	url: "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
    	title: "How to use Git and Github",
    	school: "Udacity",
    	dates: "August 2017",
    	url: "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    }
    ]
 };
 
 

bio.displayBio = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
 	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 	$("#header").prepend(formattedRole);
 	$("#header").prepend(formattedName);
 	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
 	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
 	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
 	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
 	$("#topContacts").append(formattedMobile);
 	$("#topContacts").append(formattedEmail);
 	$("#topContacts").append(formattedGithub);
 	$("#topContacts").append(formattedLocation);
 	$("#footerContacts").append(formattedMobile);
 	$("#footerContacts").append(formattedEmail);
 	$("#footerContacts").append(formattedGithub);
 	$("#footerContacts").append(formattedLocation);
 	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
 	$("#header").append(formattedBiopic);
 	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
 	$("#header").append(formattedWelcomeMessage);
 	if (bio.skills.length > 0){
 		$("#header").append(HTMLskillsStart);
 	 	for (skill=0;skill<bio.skills.length;skill++){
 	 		$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
 	 	};
 	};
};


 work.displayWork = function(){
	for (index=0;index<this.jobs.length;index++) {
	 	var job = this.jobs[index];
	 	$("#workExperience").append(HTMLworkStart);
	 	var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
	 	var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
	 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	 	$(".work-entry:last").append(formattedEmployerTitle);
	 	var formattedDates = HTMLworkDates.replace("%data%",job.dates);
	 	var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
	 	var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
	 	$(".work-entry:last").append(formattedDates);
	 	$(".work-entry:last").append(formattedLocation);
	 	$(".work-entry:last").append(formattedDescription);
	};
 };


 projects.displayProjects = function() {
 	for (project=0;project<projects.projects.length;project++){
 		$("#projects").append(HTMLprojectStart);
 		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
 		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
 		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
 		$(".project-entry:last").append(formattedProjectTitle);
 		$(".project-entry:last").append(formattedProjectDates);
 		$(".project-entry:last").append(formattedProjectDescription);
 		if (projects.projects[project].images.length>0){
 			for (image=0;image<projects.projects[project].images.length;image++){
 				var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
 				$(".project-entry:last").append(formattedProjectImage);
 			}
 		}
 	}
 };


education.displayEducation = function() {
	for (index=0;index<education.schools.length;index++){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[index].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[index].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[index].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[index].dates);
		var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDates);
		if (education.schools[index].majors.length>0){
			for (major=0;major<education.schools[index].majors.length;major++){
				var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",education.schools[index].majors[major]);
				$(".education-entry:last").append(formattedSchoolMajors);
			};
		};
	};
	if (education.onlineCourses.length>0){
		$("#education").append(HTMLonlineClasses);
		for (course=0;course<education.onlineCourses.length;course++){
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
			var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineUrl);
		};
	};
};



 bio.displayBio();
 work.displayWork();
 projects.displayProjects();
 education.displayEducation();

 $("#mapDiv").append(googleMap);