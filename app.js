
//VARIABLE DECLARATIONS
let hasDownloadedResume = false;
let downloadCount = 0;
let userName = "Vance Lambert";

let projectTitles = ["Project 1 Name", "Project 2 Name", "Project 3 Name"];
let projectDeadlines = ["2024-07-11", "2024-10-23", "2024-12-04"];
let projectDescriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper bibendum nibh nec tristique. Fusce quis enim nunc. Aenean ut euismod urna, eget egestas ligula.",
    "Proin mattis enim eget massa interdum ultrices. Nulla in sagittis augue. Quisque purus urna, lacinia sit amet facilisis viverra, iaculis sed tortor. Duis sed erat quis tellus imperdiet posuere.",
    "Maecenas ligula nulla, dignissim ut nibh eu, gravida mattis nulla. Vivamus ultrices dictum nibh at imperdiet. In ut leo consequat lacus ornare cursus. Nullam dolor dui, bibendum vitae eros at."
];
let numOfProjects = 3;


//MAIN CODE
initializeProjects(3, projectTitles, projectDeadlines, projectDescriptions);

showGreeting();

document.getElementById("download-button").addEventListener("click", updateDownload);





//FUNCTIONS
function displayDownload()
{
    if(!hasDownloadedResume)
    {
    alert("Your resume downloaded successfully!");
    }

    hasDownloadedResume = true;
}

function delayedDisplayDownload() 
{
    setTimeout(displayDownload, 2000);
}

function updateDownload()
{
    downloadCount++;
    delayedDisplayDownload();
    document.querySelector(".download-count").textContent = "Download Count: " + downloadCount;
}

function showGreeting()
{
    let greetingMessage = "Hello, my name is " + userName +"! Welcome to my portfolio";
    document.querySelector("#Greeting p").textContent = greetingMessage;
}

function getDaysUntilDeadline(dueDate, projectNumber)
{
    let currentDate = Date.now();
    let targetDate = new Date(dueDate).getTime();
    let difference = targetDate - currentDate;
    let days = Math.round(difference / (1000 * 3600 * 24));
    console.log("There are " + days + " days until Project" + projectNumber + "is due.");
    return days;
}

function setProjectStatus(dueDate, projectNumber)
{
    if(getDaysUntilDeadline(dueDate, projectNumber) > 0)
    {
        return "Ongoing";
    }

    else
    {
        return "Completed";
    }
}

function initializeProjects(numOfProjects, projectTitles, projectDeadlines, projectDescriptions)
{
    
    for(var currentProject = 0; currentProject < numOfProjects; currentProject++)
    {
        document.querySelectorAll("#Projects .card-title")[currentProject].textContent = projectTitles[currentProject] + " (Deadline: " + projectDeadlines[currentProject] + ")";

        projectStatus = setProjectStatus(projectDeadlines[currentProject], currentProject + 1);
        document.querySelectorAll("#Projects .card-status")[currentProject].textContent = "Status: " + projectStatus;

        document.querySelectorAll("#Projects .card-text")[currentProject].textContent = projectDescriptions[currentProject]
    }

}
