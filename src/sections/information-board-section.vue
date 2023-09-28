<template>
    <Collapsible title="لوحة المعلومات">

        <v-row no-gutters>

            <ChartCard title="مؤشرات المهام" :icon="{
                name: 'mdi-checkbox-marked-circle-outline',
                style: 'background-color: #969FB0;'
            }">
                <div style="display: flex;padding: 2rem;justify-content: center;gap: 5%;">
                    <div>
                        <Doughnut style="width: 170px; max-height: 170px;margin: 0 auto;" :options="TasksChartCofig.options"
                            :data="TasksChartCofig.data" />
                    </div>
                    <!--custom Legend -->
                    <div style="flex-direction: column;  justify-content: center;flex-grow: 1;gap: 5px;">
                        <div v-for="(indicator, index) in TaskIndicators" :key="`legend-badge-${index}`"
                            style="display: flex;align-items: center;gap: 10px;">
                            <div>
                                <span :style="{ 'background-color': indicator.color }" class="badge"></span>
                            </div>
                            <div>
                                <p style="font-weight: bold;">{{ indicator.value }}</p>
                                <p style="font-size: 12px;">{{ indicator.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </ChartCard>

            <ChartCard title="مؤشرات الاجتماعات" :icon="{
                name: 'mdi-calendar-blank',
                style: 'background-color: #8A55A6'
            }">
                <div class="px-10">

                    <Doughnut style="width: 200px; max-height: 200px;margin: 0 auto;" :options="MeetingsChartConfig.options"
                        :data="MeetingsChartConfig.data" />
                    <!-- custom Legend -->
                    <div class="py-10"
                        style="display:flex; justify-content: center;flex-grow: 1;flex-direction: row;gap: 10%;">
                        <div v-for="(indicator, index) in MeetingIndicators" :key="`legend-badge-${index}`"
                            style="display: flex;align-items: center;gap: 10px;">
                            <div>
                                <span :style="{ 'background-color': indicator.color }" class="badge"></span>
                            </div>
                            <div>
                                <p style="font-weight: bold;">{{ indicator.value }}</p>
                                <p style="font-size: 12px;">{{ indicator.label }}</p>
                            </div>
                        </div>

                    </div>
                </div>


            </ChartCard>



        </v-row>
    </Collapsible>
</template>

<script setup lang="ts">
import Collapsible from '../components/collapsible.vue';
import ChartCard from '@/components/ChartCard.vue';
import { Chart as ChartJS, ArcElement, Tooltip, Title, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { computed } from 'vue';
import { reactive } from 'vue';
import { Doughnut, Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement)


const TaskIndicators = reactive([
    {
        value: 28,
        label: 'اكتملت في الموعد',
        color: '#0FB96A'
    },
    {
        value: 4,
        label: 'تجاوزت الموعد',
        color: '#8A55A6'
    },
    {
        value: 12,
        label: 'مجدولة',
        color: '#D0D4DD'
    },
])

const MeetingIndicators = reactive([
    {
        value: 28,
        label: 'اكتملت',
        color: '#0FB96A'
    },
    {
        value: 4,
        label: 'مجدولة',
        color: '#D0D4DD'
    },
    {
        value: 12,
        label: 'لم تكتمل',
        color: '#8A55A6'
    },
])


const TasksChartCofig = computed(() => ({
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 60, // Display half of the pie
        elements: {
            arc: {
                borderWidth: 0,        // Set border width to 0
                borderColor: 'transparent', // Set border color to transparent
            },
        },
    },
    data: {
        labels: TaskIndicators.map(indicator => indicator.label),
        datasets: [
            {
                backgroundColor: TaskIndicators.map(indicator => indicator.color),
                data: TaskIndicators.map(indicator => indicator.value),
            }
        ]
    }
}))
const MeetingsChartConfig = computed(() => ({
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 80, // Display half of the pie
        rotation: -90, // Rotate by 180 degrees (half-pie)
        circumference: 180,
        elements: {
            arc: {
                borderWidth: 0, // Set border width to 0
                borderColor: 'transparent', // Set border color to transparent
            },
        },
    },
    data: {
        labels: MeetingIndicators.map(indicator => indicator.label),
        datasets: [
            {
                backgroundColor: MeetingIndicators.map(indicator => indicator.color),
                data: MeetingIndicators.map(indicator => indicator.value)
            }
        ]
    }
}))
</script>

<style scoped>
.badge {
    border-radius: 50%;
    padding: 0;
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 3px;
}
</style>