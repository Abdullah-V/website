<template>
  <div id="index-root">

    <div class="section1">
      <div class="container1">
        <div class="image-container">
          <img src="https://pbs.twimg.com/profile_images/1362314692962746369/Fd6wHhPx_400x400.jpg" alt="photo">
        </div>
        <h1>Abdullah Veliyev</h1>
        <p>Fullstack web developer</p>
        <span><i style="margin-right: 3px" class="fas fa-map-marker-alt"></i> Azerbaijan - Baku</span>
        <span><i style="margin-right: 3px" class="far fa-calendar-alt"></i> 26.01.2005</span>
        <span><i style="margin-right: 3px" class="fas fa-building"></i>I am currently not working for any company.</span>
        <span> <i class="fas fa-info-circle"></i> I am currently eligible to work as a fullstack, frontend or backend developer for office, remote or freelance jobs. </span>
        <button class="primary-button resume-button">See resume</button>
      </div>

      <div class="container2">
        <h1>Little about me</h1>
        <p>
          My name is Abdullah. I was born in Baku,
          Azerbaijan in 2005. I started my school life
          in 2011. I am studying in 10th grade. I
          started to be interested in programming in
          March 2020.My motivation to start
          programming was to be beneficial to people
          by doing my dream projects, which is the
          motivation for me to continue programming.
        </p>
        <div class="social-buttons-container">
          <a target="_blank" href="https://github.com/Abdullah-V"><button class="social-button"><i class="fab fa-github"></i></button></a>
          <a target="_blank" href="https://twitter.com/Abdullah_V_2005"><button class="social-button"><i class="fab fa-twitter"></i></button></a>
          <a target="_blank" href="https://t.me/Abdullah_V_2005"><button class="social-button"><i class="fab fa-telegram-plane"></i></button></a>
          <a target="_blank" href="mailto:abdullahveliyev2005@gmail.com"><button class="social-button"><i class="fas fa-envelope"></i></button></a>
          <a target="_blank" href="https://discord.com/users/715280927575507034"><button class="social-button"><i class="fab fa-discord"></i></button></a>
        </div>
      </div>
    </div>

      <!--  TODO: Add scroll down animation -->

    <div class="projects-section">
      <h1 class="section-title">Projects</h1>

      <div class="projects-container">
          <Project v-for="project in projects" :key="project.name" :project-data="project"></Project>
      </div>

    </div>

    <div class="skills-section">
      <h1 class="section-title">Languages & frameworks & tools</h1>

      <div class="skills-container">
        <Skill v-for="skill in skills" :key="skill.name" :skill-data="skill" />
      </div>


    </div>


  </div>
</template>

<script>
import Project from "~/components/Project";
import Skill from "~/components/Skill";

export default {
  created() {
    this.$colorMode.preference = 'dark'


    // this.$axios.$get('https://api.github.com/users/Abdullah-V/repos')
    //   .then(async (result) => {
    //     result = await result.sort(function(a, b){
    //       return b.stargazers_count - a.stargazers_count;
    //     })
    //     // console.log(result[0].stargazers_count)
    //     this.projects = await result
    //     console.log(this.projects[0].name)
    //   })


  },
  components: {
    Project,
    Skill
  },
  data() {
    return {
      skills: [
        {
          name: "HTML",
          percent: "80%",
          iconFileName: "html.svg"
        },
        {
          name: "CSS",
          percent: "70%",
          iconFileName: "css.svg"
        },

        {
          name: "Javascript",
          percent: "90%",
          iconFileName: "javascript.svg"
        },
        {
          name: "Vue.js",
          percent: "95%",
          iconFileName: "vuejs.svg"
        },
        {
          name: "Nuxt.js",
          percent: "90%",
          iconFileName: "nuxtjs.svg"
        },
        {
          name: "Node.js",
          percent: "90%",
          iconFileName: "nodejs.svg"
        },
        {
          name: "Express.js",
          percent: "80%",
          iconFileName: "expressjs.svg"
        },
        {
          name: "Electron.js",
          percent: "80%",
          iconFileName: "electronjs.svg"
        },
        {
          name: "MongoDB",
          percent: "70%",
          iconFileName: "mongodb.svg"
        },
        {
          name: "Figma",
          percent: "90%",
          iconFileName: "figma.svg"
        },
        {
          name: "Git",
          percent: "70%",
          iconFileName: "git.svg"
        },
        {
          name: "BASH",
          percent: "70%",
          iconFileName: "bash.svg"
        },
      ],
      projects: [
        // Add this website to projects
        {
          name: 'Cargoglobal',
          description: 'Cargoglobal is a sitefor share logistic adversiments',
          sourceCodeLink: 'https://github.com/Abdullah-V/cargoglobal-frontend',
          liveDemoLink: 'https://cargoglobal.herokuapp.com',
          imageFileName: 'cargoglobal.png',
          techStack: [
            {
              name: 'html',
              iconFileName: 'html.svg'
            },
            {
              name: 'css',
              iconFileName: 'css.svg'
            },
            {
              name: 'javascript',
              iconFileName: 'javascript.svg'
            },
            {
              name: 'nuxt.js',
              iconFileName: 'nuxtjs.svg'
            },
            {
              name: 'mongodb',
              iconFileName: 'mongodb.svg'
            },
            {
              name: 'nodejs',
              iconFileName: 'nodejs.svg'
            },
            {
              name: 'express.js',
              iconFileName: 'expressjs.svg'
            },
          ]
        },
        {
          name: 'Twitter clone',
          description: 'MEVN stack twitter clone',
          sourceCodeLink: 'https://github.com/Abdullah-V/MEVN-stack-twitter-clone',
          liveDemoLink: 'https://twitter-cln.herokuapp.com/',
          imageFileName: 'twitterClone.png',
          techStack: [
            {
              name: 'html',
              iconFileName: 'html.svg'
            },
            {
              name: 'css',
              iconFileName: 'css.svg'
            },
            {
              name: 'javascript',
              iconFileName: 'javascript.svg'
            },
            {
              name: 'vue.js',
              iconFileName: 'vuejs.svg'
            },
            {
              name: 'mongodb',
              iconFileName: 'mongodb.svg'
            },
            {
              name: 'nodejs',
              iconFileName: 'nodejs.svg'
            },
            {
              name: 'express.js',
              iconFileName: 'expressjs.svg'
            },
          ]
        },
        {
          name: 'Password generator',
          description: 'Simple password generator',
          sourceCodeLink: 'https://github.com/Abdullah-V/Password-Generator-V2',
          imageFileName: 'password-gen.png',
          techStack: [
            {
              name: 'html',
              iconFileName: 'html.svg'
            },
            {
              name: 'css',
              iconFileName: 'css.svg'
            },
            {
              name: 'javascript',
              iconFileName: 'javascript.svg'
            },
            {
              name: 'vue.js',
              iconFileName: 'vuejs.svg'
            },
          ]
        },
        {
          name: 'Color palette generator',
          description: 'Simple color palette generator',
          sourceCodeLink: 'https://github.com/Abdullah-V/Color-Palette-Generator',
          imageFileName: 'palette-gen.png',
          techStack: [
            {
              name: 'html',
              iconFileName: 'html.svg'
            },
            {
              name: 'css',
              iconFileName: 'css.svg'
            },
            {
              name: 'javascript',
              iconFileName: 'javascript.svg'
            },
            {
              name: 'vue.js',
              iconFileName: 'vuejs.svg'
            },
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
#index-root {
  width: 100%;
  height: 100%;
}

.section1 {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.section1 .container1 {
  width: 380px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10px;
}

.section1 .container1 i {
  color: var(--primary);
  font-size: 18px;
}

.image-container {
  width: 130px;
  height: 130px;
  padding: 5px;
  border-radius: 999px;
  border: 2px solid gray;
}

.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 999px;
}

h1 {
  font-size: 25px;
}

p {
  font-size: 20px;
}

.resume-button {
  background: var(--primary);
  color: white;
  font-weight: normal;
  font-size: 18px;
  transition: 300ms all;
  padding: 12px 40px;
  border-radius: 3px;
}

.resume-button:hover {
  transform: scale(1.08);
}

.section1 .container2 {
  width: 550px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
}

.social-buttons-container {
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.social-button {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: var(--primary);
  color: white;
  font-size: 22px;
  transition: 300ms all;
}

.social-button:hover {
  transform: scale(1.08);
}

.projects-section {
  margin: 40px 0;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

.section-title {
  text-align: center;
  margin: 80px 0;
  font-size: 35px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

</style>
