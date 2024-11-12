<script setup lang="ts">
import { computed, ref } from 'vue';
import McInput from './mcInput.vue';
import mcList from './mcList.vue';
import mcplayer from './mcplayer.vue';
import { NTabs,NTabPane} from "naive-ui"

import udioInput from './udioInput.vue';
import udioList from './udioList.vue';
import { gptServerStore, useUserStore } from '@/store';

const st= ref({menu:'suno'});

const handleUpdateValue=(v:string)=>{
   //mlog("handleUpdateValue",v)
   gptServerStore.setMyData({TAB_MUSIC:v})
}


const userStore = useUserStore();

const userInfo = computed(() => userStore.userInfo);

const backgroundImage = computed(()=>userInfo.value.backgroundImage ?? "");

</script>




<template>
<div v-if="backgroundImage" 
    class=" fixed z-[200] pointer-events-none top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
    :style="{
      'background-image': 'url(' + backgroundImage + ')',
      opacity: 0.19,
    }"
  ></div>
<div class="flex w-full h-full   ">
    <div class="w-[300px] h-full  overflow-y-auto ">
        <n-tabs type="line" animated     :default-value="gptServerStore.myData.TAB_MUSIC??'suno'"  @update:value="handleUpdateValue"   >
         <n-tab-pane name="start" tab=""> 
            <McInput /> 
         </n-tab-pane>

         <n-tab-pane name="suno" tab="完整AI"> 
            <McInput /> 
         </n-tab-pane>
          <n-tab-pane name="udio" tab="片段AI"> 
            <udioInput/>
         </n-tab-pane>
           
        </n-tabs>
    </div>
    <div class=" flex-1  h-full bg-[#fafbfc] pt-2 dark:bg-[#18181c] overflow-y-auto " >
        <udioList  v-if="gptServerStore.myData.TAB_MUSIC=='udio'"/>
        <mcList  v-else />
       
    </div>
    <div class="w-[300px]  h-full overflow-y-auto ">
        <mcplayer/>
    </div>
</div>
</template>