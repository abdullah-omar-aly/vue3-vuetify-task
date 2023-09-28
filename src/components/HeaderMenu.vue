<template>
    <header style="padding: 2rem 1rem;">
        <nav style="display: flex;justify-content: space-between;align-items: center;">
            <ul style="display: flex;list-style: none">
                <li v-for="( item, ind) in NavItems" :key="ind" style="cursor: pointer; text-align: center;margin:0 1rem">
                    <div  style="border-radius: 0.6rem;padding: 0.5rem 1rem;" :style="{backgroundColor:item.backgroundColor}">
                        <v-icon size="22" :icon="item.icon" style="margin: auto;" :color="item.color"></v-icon>
                    </div>
                    <p style="font-size: 12px;font-weight: bold;margin-top: 0.6rem;">{{ item.label }}</p>
                </li>
            </ul>
            <div style="cursor: pointer;min-width: 3rem;text-align: center;">
                <div  style="border-radius: 0.6rem;padding: 0.5rem 1rem;background-color: white;">
                        <v-icon size="22" icon="mdi-chevron-down" style="margin: auto;" color="#485465"></v-icon>
                    </div>
                    <p style="font-size: 12px;font-weight: bold;margin-top: 0.6rem;">المزيد</p>
                
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    const NavItems = [
        {
            label: "الرئيسية" ,
            backgroundColor: "white",
            color:"#485465",
            icon: "mdi-home-outline"
        } ,
        {
            label: "الاعلانات" ,
            backgroundColor: "#3F5164",
            color:"#FFFFFF",
            icon: "mdi-bullhorn-outline"
        } ,
        {
            label: "اللجان" ,
            backgroundColor: "#3F5164",
            color:"#FFFFFF",
            icon: "mdi-account-group-outline"
        } ,
        {
            label: "التقويم" ,
            backgroundColor: "#3F5164",
            color:"#FFFFFF",
            icon: "mdi-calendar-text"
        } ,
        {
            label: "الأعضاء" ,
            backgroundColor: "#99A2B3",
            color:"#FFFFFF",
            icon: "mdi-account-multiple-outline"
        } ,
        {
            label: "المساهمين" ,
            backgroundColor: "#554063",
            color:"#FFFFFF",
            icon: "mdi-chart-pie"
        } ,
        {
            label: "الاجتماعات" ,
            backgroundColor: "#8B57AA",
            color:"#FFFFFF",
            icon: "mdi-calendar-blank"
        } ,
        {
            label: "انابة" ,
            backgroundColor: "#8B57AA",
            color:"#FFFFFF",
            icon: "mdi-account-switch"
        } ,
        {
            label: "الحوكمة" ,
            backgroundColor: "#EBDFF5",
            color:"#485465",
            icon: "mdi-percent"
        } ,
        {
            label: "المؤشرات" ,
            backgroundColor: "#E82E6D",
            color:"#FFFFFF",
            icon: "mdi-chart-line"
        } ,
        {
            label: "تطبيق" ,
            backgroundColor: "#006FC0",
            color:"#FFFFFF",
            icon: "mdi-plus"
        } ,
        {
            label: "المهام" ,
            backgroundColor: "#99A2B3",
            color:"#FFFFFF",
            icon: "mdi-checkbox-marked-circle-outline"
        } ,
        {
            label: "الدورات" ,
            backgroundColor: "#FFFFFF",
            color:"#485465",
            icon: "mdi-refresh"
        } 
    ]
</script>

<style scoped>

</style>