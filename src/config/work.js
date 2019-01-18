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
flirt4free.img = "some image";
flirt4free.gif = "gif";
flirt4free.link = "link";
flirt4free.github = "";
flirt4free.professional = true;
flirt4free.technologies = ["HTML", "CSS", "Javascript", "AJAX"];

var netflixClone = Object.create(WorkDataTemplate);
netflixClone.title = "Netflix Clone";
netflixClone.seoTitle = "netflix-clone";
netflixClone.img = "some image";
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
youtubeClone.img = "some image";
youtubeClone.gif = "gif";
youtubeClone.link = "link";
youtubeClone.github = "github";
youtubeClone.profesional = false;
youtubeClone.technologies = ["HTML", "CSS/SASS", "Javascript", "AJAX", "React"];

const workCollection = [flirt4free, netflixClone, youtubeClone];

export default workCollection;
