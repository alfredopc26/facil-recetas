<template>
  <ion-list>
    <ion-item>
      <div class="image-container">
        <img :src="imagePreview" alt="Imagen" class="image" />
        <div class="overlay"></div>
        <ion-button class="upload-button" @click="openFileInput">
          Subir Imagen
        </ion-button>
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          class="file-input"
          @change="handleFileUpload"
        />
      </div>
    </ion-item>

    <ion-item>
      <ion-input label="Text input" placeholder="Enter text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Number input" type="number" placeholder="000"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Password input" type="password" value="password"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Email input" type="email" placeholder="email@domain.com"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Telephone input" type="tel" placeholder="888-888-8888"></ion-input>
    </ion-item>
    
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList },
    data() {
      return {
        selectedFile: null,
        imagePreview: '../resources/img/fondo_template.jpg',
      };
    },
    methods: {
      openFileInput() {
        this.$refs.fileInput.click();
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        // Realizar el manejo de la subida de la imagen
        console.log("Imagen seleccionada:", file);
      }
    }
  });
</script>
<style scoped>
.image-container {
  position: relative;
  display: inline-block;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.upload-button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
</style>