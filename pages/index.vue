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


  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#index-root {
  width: 100%;
  height: 100%;
  padding: 30px 0;
}

.section1 {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.section1 .container1 {
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
}

.section1 .container1 i {
  color: var(--primary);
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
}

.social-buttons-container {
  width: 80%;
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

</style>
