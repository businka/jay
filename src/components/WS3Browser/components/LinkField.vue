<template>
  <div>
    <q-input :label="filter.title" v-model="text" class="col-8" dense>
      <template v-slot:append>
        <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"></q-icon>
        <q-btn round dense flat icon="search" @click="openSelectBrowser"></q-btn>
      </template>
    </q-input>
  </div>
</template>
