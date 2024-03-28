import self from "../img/self.png"
import placeholder from "../img/placeholder.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "V",
    lastName: "Perkins",
    initials: "vp", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Rails Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🐕',
            text: 'friend to dogs everywhere'
        },
        {
            emoji: '🧵',
            text: 'maker of things'
        },

        {
            emoji: "📧",
            text: "vep002@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/vep002",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/victoria-elyse-perkins/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Policy analyst turned welder turned full stack developer with hands-on experience in JavaScript, React, and Ruby on Rails. My unconventional background encapsulates my pursuit of constant learning as well as my skills in problem solving, project management, and design thinking.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'react native', 'git', 'github', 'bootstrap', 'html5', 'css3', 'java', 'vue.js', 'ruby on rails', 'rspec', 'sql', 'circleci'],
            exposedTo: ['nodejs', 'python', 'aws', 'docker']
        }
    ,
    hobbies: [
        {
            label: 'fiber arts',
            emoji: '🧶'
        },
        {
            label: 'singing',
            emoji: '🎤'
        },
        {
            label: 'learning piano',
            emoji: '🎹'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "The Sewcialist Agenda",
            live: 'https://res.cloudinary.com/dz2jdgus7/video/upload/v1633808303/sewcialist_agenda_demo_rjblql.mp4', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: 'https://github.com/vep002/sewcialist-agenda-frontend/tree/main', // this should be a link to the **repository** of the project, where the code is hosted.
            // image: placeholder
        },
        {
            title: "My Garden Center",
            live: 'https://res.cloudinary.com/dz2jdgus7/video/upload/v1633459325/my_garden_center_ghcxay.mp4',
            source: 'https://github.com/vep002/phase3-project/tree/main/phase3-project',
            // image: placeholder
        },
        {
            title: "Rotten Cabbages",
            live: 'https://res.cloudinary.com/dz2jdgus7/video/upload/v1633458292/rotten_cabbages_demo_qatelh.mp4',
            source: 'https://github.com/vep002/phase1-project',
            // image: placeholder
        },
    ]
}