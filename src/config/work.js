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
flirt4free.img = "f4f_mobile.png";
flirt4free.gif = "https://media.giphy.com/media/zHCn98qvW2TTBshjht/giphy.gif";
flirt4free.link = "https://www.flirt4free.com/";
flirt4free.github = "";
flirt4free.professional = true;
flirt4free.technologies = ["HTML", "CSS", "Javascript", "Websockets", "HLS.js"];
flirt4free.description =
    "An adult entertainment site which specializes in video chat with webcam models. My contributions include connecting to a chat server via Websockets to relay chat messages, setting up video streams, sending AJAX requests from the client to the server for sending tips to models, and much more. I contributed to refactoring and re-imaging the mobile experience for Flirt4Free in order to deliver a smoother and responsive experience for users.";

var flirt4freeSchedulingTool = Object.create(WorkDataTemplate);
flirt4freeSchedulingTool.title = "F4F Scheduling Tool";
flirt4freeSchedulingTool.seoTitle = "flirt4free-scheduling-tool";
flirt4freeSchedulingTool.img = "f4f_schedule.png";
flirt4freeSchedulingTool.gif =
    "https://media.giphy.com/media/lojrySnohfWm3lK4Sa/giphy.gif";
flirt4freeSchedulingTool.link = "https://studios.flirt4free.com/";
flirt4freeSchedulingTool.github = "";
flirt4freeSchedulingTool.professional = true;
flirt4freeSchedulingTool.technologies = ["HTML", "CSS", "Javascript", "jQuery"];
flirt4freeSchedulingTool.description =
    "A tool which allows qualified Flirt4Free models to schedule their webcam shows. Users can change the timezone they view the calendar and schedule/edit/delete shows.";

var netflixClone = Object.create(WorkDataTemplate);
netflixClone.title = "Netflix Clone";
netflixClone.seoTitle = "netflix-clone";
netflixClone.img = "netflix.png";
netflixClone.gif = "https://media.giphy.com/media/14mcdRwHEgEG3u/giphy.gif";
netflixClone.link = "https://netflix-clone-daca7.firebaseapp.com/";
netflixClone.github = "https://github.com/bd2187/netflix-clone";
netflixClone.profesional = false;
netflixClone.technologies = [
    "HTML",
    "CSS/SASS",
    "Javascript",
    "React",
    "Redux",
    "Bootstrap"
];
netflixClone.description =
    "A lightweight clone of Netflix. This application categorizes movies based on genre and allows users to search for movies they would like to watch while the app requests data from the TMDB API.";

var youtubeClone = Object.create(WorkDataTemplate);
youtubeClone.title = "Youtube Clone";
youtubeClone.seoTitle = "youtube-clone";
youtubeClone.img = "youtube.png";
youtubeClone.gif = "https://media.giphy.com/media/73Y9WaqxRRwTC/giphy.gif";
youtubeClone.link = "https://react-tube-3e7aa.firebaseapp.com/";
youtubeClone.github = "https://github.com/bd2187/react-tube";
youtubeClone.profesional = false;
youtubeClone.technologies = ["HTML", "CSS/SASS", "Javascript", "React"];
youtubeClone.description =
    "A lightweight clone of Youtube. Users can search and view Youtube videos.";

var weatherApp = Object.create(WorkDataTemplate);
weatherApp.title = "Weather App";
weatherApp.seoTitle = "weather-app";
weatherApp.img = "weather.png";
weatherApp.gif = "https://media.giphy.com/media/ESm4JPOzn8y2I/giphy.gif";
weatherApp.link = "https://weather-forecast-978fe.firebaseapp.com/";
weatherApp.github = "https://github.com/bd2187/weather-forecast";
weatherApp.profesional = false;
weatherApp.technologies = ["HTML", "CSS/SASS", "Javascript", "React", "Redux"];
weatherApp.description =
    "Users can view the current and daily forecast of their city along with searching the forecast for other cities. Users can also choose to see the temperature in either fahrenheit or celsius.";

var markdownPreviewer = Object.create(WorkDataTemplate);
markdownPreviewer.title = "Markdown Previewer";
markdownPreviewer.seoTitle = "markdown-previewer";
markdownPreviewer.img = "markdown.png";
markdownPreviewer.gif = "https://media.giphy.com/media/4RMayobRdJWzm/giphy.gif";
markdownPreviewer.link = "https://markdown-previewer-436ba.firebaseapp.com/";
markdownPreviewer.github =
    "https://github.com/bd2187/github-markdown-previewer";
markdownPreviewer.profesional = false;
markdownPreviewer.technologies = [
    "HTML",
    "CSS/SASS",
    "Javascript",
    "React",
    "Redux"
];
markdownPreviewer.description =
    "A tool that allows users to type GitHub-flavored Markdown into the text area and see a preview of the output of their markdown that is updated as they type.";

var wikiSearch = Object.create(WorkDataTemplate);
wikiSearch.title = "Wiki Search";
wikiSearch.seoTitle = "wiki-search";
wikiSearch.img = "wiki.png";
wikiSearch.gif = "https://media.giphy.com/media/jzEOcg2mN0O1G/giphy.gif";
wikiSearch.link = "https://bd2187.github.io/Wiki-Search/";
wikiSearch.github = "https://github.com/bd2187/Wiki-Search";
wikiSearch.profesional = false;
wikiSearch.technologies = ["HTML", "CSS/SASS", "Javascript"];
wikiSearch.description =
    "Users can search Wikipedia entries in a search box and see the resulting entries. They can also click a button to see a random Wikipedia entry.";

var randomQuote = Object.create(WorkDataTemplate);
randomQuote.title = "Random Quote Generator";
randomQuote.seoTitle = "random-quote-generator";
randomQuote.img = "random_quote.png";
randomQuote.gif = "https://media.giphy.com/media/sJ3QAegTCD3b2/giphy.gif";
randomQuote.link = "https://bd2187.github.io/Random-Quote-Generator/";
randomQuote.github = "https://github.com/bd2187/Random-Quote-Generator";
randomQuote.profesional = false;
randomQuote.technologies = ["HTML", "CSS/SASS", "Javascript"];
randomQuote.description =
    "Users can click a button to show a new random quote from one of the Star Wars films. They can also click the tweet button to post the quote on Twitter.";

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
