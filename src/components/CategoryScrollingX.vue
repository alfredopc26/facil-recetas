<template>
    <div class="scrolling-x-category">
        <ChipBase class="items-category" v-for="category of dataCategory" :key="category + '-id'"
        :avatar="category.image"
        :label="category.title"
        ></ChipBase>
    </div>
</template>
<style scoped>
.scrolling-x-category{
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow-x:scroll;
}
.items-category{
  min-width: 120px;
  margin-right: 10px;
  flex-grow: 1;
}
</style>
<script setup lang="ts">
    import ChipBase from '@/components/ChipBase.vue';
    import { ICategory } from '@/utils/types';

    interface Props {
            dataCategory?: ICategory[];
        }

    const props = withDefaults(defineProps<Props>(), {
    });

</script>