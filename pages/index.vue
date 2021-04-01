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
  background: yellow;
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
  transition: 300ms all;
}

.resume-button:hover {
  background: var(--secondary);
}

</style>
