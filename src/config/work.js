const WorkDataTemplate = {
    title: "",
    seoTitle: "",
    img: "",
    gif: "",
    link: "",
    github: "",
    technologies: [],
    professional: false
};

var flirt4free = Object.create(WorkDataTemplate);
flirt4free.title = "Flirt4Free";
flirt4free.seoTitle = "flirt4free";
flirt4free.img = "f4f.png";
flirt4free.gif = "gif";
flirt4free.link = "link";
flirt4free.github = "";
flirt4free.professional = true;
flirt4free.technologies = ["HTML", "CSS", "Javascript", "AJAX"];

var flirt4freeSchedulingTool = Object.create(WorkDataTemplate);
flirt4freeSchedulingTool.title = "Flirt4Free Model Scheduling Tool";
flirt4freeSchedulingTool.seoTitle = "flirt4free-scheduling-tool";
flirt4freeSchedulingTool.img = "f4f_schedule.png";
flirt4freeSchedulingTool.gif = "gif";
flirt4freeSchedulingTool.link = "link";
flirt4freeSchedulingTool.github = "";
flirt4freeSchedulingTool.professional = true;
flirt4freeSchedulingTool.technologies = ["HTML", "CSS", "Javascript", "jQuery"];

var netflixClone = Object.create(WorkDataTemplate);
netflixClone.title = "Netflix Clone";
netflixClone.seoTitle = "netflix-clone";
netflixClone.img = "netflix.png";
netflixClone.gif = "gif";
netflixClone.link = "link";
netflixClone.github = "github";
netflixClone.profesional = false;
netflixClone.technologies = [
    "HTML",
    "CSS/SASS",
    "Javascript",
    "AJAX",
    "React",
    "Redux",
    "Bootstrap"
];

var youtubeClone = Object.create(WorkDataTemplate);
youtubeClone.title = "Youtube Clone";
youtubeClone.seoTitle = "youtube-clone";
youtubeClone.img = "youtube.png";
youtubeClone.gif = "gif";
youtubeClone.link = "link";
youtubeClone.github = "github";
youtubeClone.profesional = false;
youtubeClone.technologies = ["HTML", "CSS/SASS", "Javascript", "AJAX", "React"];

var weatherApp = Object.create(WorkDataTemplate);
weatherApp.title = "Weather App";
weatherApp.seoTitle = "weather-app";
weatherApp.img = "weather.png";
weatherApp.gif = "gif";
weatherApp.link = "link";
weatherApp.github = "github";
weatherApp.profesional = false;
weatherApp.technologies = [
    "HTML",
    "CSS/SASS",
    "Javascript",
    "AJAX",
    "React",
    "Redux"
];

var markdownPreviewer = Object.create(WorkDataTemplate);
markdownPreviewer.title = "Markdown Previewer";
markdownPreviewer.seoTitle = "markdown-previewer";
markdownPreviewer.img = "markdown.png";
markdownPreviewer.gif = "gif";
markdownPreviewer.link = "link";
markdownPreviewer.github = "github";
markdownPreviewer.profesional = false;
markdownPreviewer.technologies = [
    "HTML",
    "CSS/SASS",
    "Javascript",
    "AJAX",
    "React",
    "Redux"
];

var wikiSearch = Object.create(WorkDataTemplate);
wikiSearch.title = "Wiki Search";
wikiSearch.seoTitle = "wiki-search";
wikiSearch.img = "wiki.png";
wikiSearch.gif = "gif";
wikiSearch.link = "link";
wikiSearch.github = "github";
wikiSearch.profesional = false;
wikiSearch.technologies = ["HTML", "CSS/SASS", "Javascript", "AJAX"];

var randomQuote = Object.create(WorkDataTemplate);
randomQuote.title = "Random Quote Generator";
randomQuote.seoTitle = "random-quote-generator";
randomQuote.img = "random_quote.png";
randomQuote.gif = "gif";
randomQuote.link = "link";
randomQuote.github = "github";
randomQuote.profesional = false;
randomQuote.technologies = ["HTML", "CSS/SASS", "Javascript"];

const workCollection = [
    flirt4free,
    flirt4freeSchedulingTool,
    netflixClone,
    youtubeClone,
    weatherApp,
    markdownPreviewer,
    wikiSearch,
    randomQuote
];

export default workCollection;
