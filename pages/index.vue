<template>
  <div id="index-root">
    <div id="section1">
      <div class="container1">
        <div class="image-container">
          <img :src="require('~/assets/images/pp.jpg')" alt="profile photo" />
        </div>
        <h1>Abdullah Veliyev</h1>
        <p>Fullstack web developer</p>
        <span title="Location"
          ><i style="margin-right: 3px" class="fas fa-map-marker-alt"></i> Baku,
          Azerbaijan</span
        >
        <span title="Current education"
          ><i style="margin-right: 3px" class="fas fa-school"></i> High school
          in XDTG</span
        >
        <!-- <span title="Date of birth"><i style="margin-right: 3px" class="far fa-calendar-alt"></i> 26.01.2005</span> -->
        <span title="Company"
          ><i style="margin-right: 3px" class="fas fa-building"></i>
          <a
            :style="{ color: 'var(--text)', letterSpacing: '1.5px' }"
            target="_blank"
            href="https://producter.co"
            >Producter</a
          ></span
        >
        <span title="Works i can get">
          <i class="fas fa-info-circle"></i> I am currently eligible to work as
          a fullstack, frontend or backend developer for remote part-time,
          full-time and freelance jobs.
        </span>
        <a
          target="_blank"
          href="https://github.com/Abdullah-V/media/blob/master/CV.pdf"
          ><button class="primary-button">See resume</button></a
        >
      </div>

      <div class="container2">
        <h1>Little about me</h1>
        <p style="text-align: center">
          Hello there! I'm Abdullah. I am studying high school in Azerbaijan. On
          April 26, 2020, I stepped into the programming by writing my first
          line of code. Since then, I have been dealing with topics such as the
          web, cybersecurity and artificial intelligence. I describe myself more
          as a fullstack web developer. I am currently working as a frontend
          developer at Producter company.
        </p>
        <a href="#links-section"
          ><button class="primary-button">Social links</button></a
        >
      </div>
    </div>

    <div id="projects-section">
      <h1 class="section-title">Projects</h1>

      <div class="projects-container">
        <Project
          v-for="project in projects"
          :key="project.name"
          :project-data="project"
        ></Project>
      </div>
    </div>

    <div id="skills-section">
      <h1 class="section-title">Languages & frameworks & tools</h1>

      <div class="skills-container">
        <Skill v-for="skill in skills" :key="skill.name" :skill-data="skill" />
      </div>
    </div>

    <div v-if="$store.state.pinnedRepos.length" id="repos-section">
      <h1 style="margin-bottom: 50px; margin-top: 115px" class="section-title">
        Pinned Github repositories
      </h1>

      <div class="repos-container">
        <Repo
          v-for="repo in $store.state.pinnedRepos"
          :repo-data="repo"
          :key="repo.id"
        />
      </div>

      <nuxt-link to="/repos" tag="button" class="secondary-button"
        >See all repositories
        <i style="margin-left: 10px" class="far fa-arrow-alt-circle-right"></i>
      </nuxt-link>
    </div>

    <div id="jobs-section">
      <h1 class="section-title">Job experience</h1>

      <div class="jobs-container">
        <Job v-for="job in jobs" :key="job.name" :job="job" />
      </div>
    </div>

    <div v-if="$store.state.bookmarks.length" id="bookmarks-section">
      <h1 class="section-title">Latest bookmarks</h1>

      <div class="bookmarks-container">
        <Bookmark
          :key="bookmark.title"
          v-for="bookmark in $store.state.bookmarks.slice(0, 3)"
          :infos="bookmark"
        />
      </div>

      <nuxt-link
        style="margin-top: 50px"
        to="/bookmarks"
        tag="button"
        class="secondary-button"
        >See all bookmarks
        <i style="margin-left: 10px" class="far fa-arrow-alt-circle-right"></i>
      </nuxt-link>
    </div>

    <div id="links-section">
      <h1 class="section-title">Social links</h1>

      <div class="links-container">
        <Link v-for="link in links" :key="link.name" :linkInfo="link" />
      </div>
    </div>

    <div id="contact-section">
      <h1 class="section-title">Contact with me</h1>

      <div id="contact-container">
        <img :src="require('~/assets/images/mail.svg')" alt="mail.svg" />
        <div id="contact-form">
          <input
            @keyup="validateForm()"
            v-model="contactInfos.name"
            type="text"
            placeholder="Your name"
          />
          <input
            @keyup="validateForm()"
            v-model="contactInfos.email"
            type="email"
            placeholder="Your email"
          />
          <input
            @keyup="validateForm()"
            v-model="contactInfos.subject"
            type="text"
            placeholder="Subject"
          />
          <textarea
            @keydown.enter.ctrl="isValidForm && !isSending ? send() : ''"
            @keyup="validateForm()"
            v-model="contactInfos.message"
            placeholder="Message"
          ></textarea>
          <button
            :disabled="!isValidForm"
            @click="send()"
            :class="{
              disabled: !isValidForm || isSending,
              enabled: isValidForm
            }"
            id="submit"
          >
            <span v-if="isSending" class="lds-dual-ring"></span>
            <i
              v-if="!isSending"
              style="margin-right: 15px"
              class="fas fa-paper-plane"
            ></i
            >Submit
          </button>
        </div>
      </div>
    </div>

    <notifications class="my-notification" width="30%" group="foo" />
  </div>
</template>

<script>
import Project from '~/components/Project'
import Skill from '~/components/Skill'
import Repo from '~/components/Repo'
import Job from '~/components/Job'
import Link from '~/components/Link'
import Bookmark from '~/components/Bookmark'
import someData from '~/static/someData.json'

export default {
  components: {
    Project,
    Skill,
    Repo,
    Job,
    Link,
    Bookmark
  },
  created() {
    const linkQuery = this.$route.query.link?.toLowerCase()
    if (process.client && linkQuery && this.validLinkNames.includes(linkQuery))
      window.location.href = this.links.find(
        link => link.name.toLowerCase() === linkQuery
      ).url
  },
  data() {
    return {
      skills: someData.skills,
      projects: someData.projects,
      jobs: someData.jobs,
      links: someData.links,
      isValidForm: false,
      isSending: false,
      contactInfos: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      validLinkNames: [
        'github',
        'twitter',
        'linkedin',
        'superpeer',
        'telegram',
        'email',
        'discord',
        'polywork',
        'clubhouse'
      ]
    }
  },
  methods: {
    doNotification() {
      this.$notify({
        title: 'Message sent',
        text: 'Your message sent successfully. I reply you via email in soon',
        speed: 500,
        duration: 4000,
        group: 'foo'
      })
    },
    validateForm() {
      const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim
      this.isValidForm = !!(
        this.contactInfos.name.trim() &&
        emailRegex.test(this.contactInfos.email.trim()) &&
        this.contactInfos.subject.trim() &&
        this.contactInfos.message.trim()
      )
    },
    send() {
      this.isSending = true
      this.isValidForm = false
      var contactInfos = this.contactInfos
      this.$axios
        .$post(`${process.env.BASE}/api/sendMail`, {
          contactInfos
        })
        .then(result => {
          this.isSending = false
          this.doNotification()
          this.contactInfos.name = this.contactInfos.name.trim()
          this.contactInfos.email = this.contactInfos.email.trim()
          this.contactInfos.subject = ''
          this.contactInfos.message = ''
        })
    }
  }
}
</script>

<style scoped>
#index-root {
  width: 100%;
  height: 100%;
}

#section1 {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

#section1 .container1 {
  width: 380px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10px;
}

#section1 .container1 i {
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

#section1 .container2 {
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
  transform: scale(1.13);
}

#projects-section {
  margin: 40px 0;
}

.section-title {
  text-align: center;
  margin: 80px 0;
  font-size: 35px;
}

.section-title:before {
  display: block;
  content: ' ';
  margin-top: -130px;
  height: 130px;
  visibility: hidden;
  pointer-events: none;
}

.skills-container,
.projects-container,
.repos-container,
.links-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

.repos-container {
  width: 90%;
  margin: auto;
}

.links-container {
  width: 75%;
  margin: auto;
  row-gap: 30px;
  column-gap: 10px;
}

#repos-section,
#bookmarks-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 580px;
}

#contact-container img,
#contact-form {
  width: 45%;
  height: 90%;
}

#contact-form {
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.4);
}

#contact-form input,
#contact-form textarea {
  width: 100%;
  height: 10%;
  padding: 15px 20px;
  font-size: 18px;
  background: var(--secondary-background);
  color: var(--text);
  border-radius: 3px;
}

#contact-form textarea {
  height: 25%;
  resize: none;
}

#submit {
  background: var(--primary);
  color: white;
  font-weight: normal;
  font-size: 18px;
  transition: 300ms all;
  border-radius: 3px;
  width: 60%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#submit.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

#submit.enabled {
  cursor: pointer;
}

#submit.enabled:hover {
  background: var(--secondary);
}

.jobs-container,
.bookmarks-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
}

.job-root:first-child {
  margin-top: 5px;
}

.job-root:last-child {
  margin-bottom: 5px;
}

.lds-dual-ring {
  display: inline-block;
  height: 100%;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 30px;
  height: 30px;
  margin: 0;
  border-radius: 50%;
  border: 4px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 850px) {
  #contact-container {
    height: 1080px;
    flex-direction: column;
  }
  #contact-container img,
  #contact-form {
    width: 80%;
    height: 45%;
  }
  .links-container {
    width: 90%;
  }
}

.my-notification {
  cursor: pointer;
}
</style>
