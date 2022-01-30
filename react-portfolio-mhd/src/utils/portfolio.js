import imageOne from "../pages/assets/images/image.png"

function Card(about, title, siteURL, imgURL, repository) {
    this.about = about;
    this.title = title;
    this.siteURL = siteURL;
    this.imgURL = imgURL;
    this.repository = repository;

}

const projectOne = new Card(
    "aaskdfhajkdfhgkashdfkadhfkdjhfkjsdhfa",
    "project One",
    "https://siteurl.com",
    imageOne,
    "repourl.com"
)
const projectTwo = new Card(
    "aaskdfhajkdfhgkashdfkadhfkdjhfkjsdhfa",
    "project One",
    "https://siteurl.com",
    imageOne,
    "repourl.com"
)

let portfolio = [projectOne, projectTwo];

export default portfolio;