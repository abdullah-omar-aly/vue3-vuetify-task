<template>
    <Collapsible title="لوحة المعلومات">

        <v-row no-gutters>

            <ChartCard title="مؤشرات المهام" :icon="{
                name: 'mdi-checkbox-marked-circle-outline',
                style: 'background-color: #969FB0;'
            }">
                <div style="display: flex;padding: 2rem;justify-content: center;align-items: center;gap: 5%;">
                    <div>
                        <Doughnut style="width: 170px; max-height: 170px;margin: 0 auto;" :options="TasksChartCofig.options"
                            :data="TasksChartCofig.data" />
                    </div>
                    <!--custom Legend -->
                    <div style="flex-direction: column;  justify-content: center;gap: 5px;">
                        <div v-for="(indicator, index) in chartsData.TaskIndicators" :key="`legend-badge-${index}`"
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

                    <Doughnut style="width: 180px; max-height: 180px;margin: 0 auto;" :options="MeetingsChartConfig.options"
                        :data="MeetingsChartConfig.data" />
                    <!-- custom Legend -->
                    <div class="py-10"
                        style="display:flex; justify-content: center;flex-grow: 1;flex-direction: row;gap: 10%;">
                        <div v-for="(indicator, index) in chartsData.MeetingIndicators" :key="`legend-badge-${index}`"
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

            <ChartCard title="مؤشرات البنود" :icon="{
                name: 'mdi-comment-alert-outline',
                style: 'background-color: #8A55A6'
            }">
                <!-- custom Legend -->

                <div style="display: flex;justify-content: start;align-items: center;padding: 2rem;">
                    <div style="flex-direction: column;align-items: center;flex-grow: 1;gap: 5px">
                        <div v-for="(indicator, index) in chartsData.ItemsIndicators" :key="`legend-badge-${index}`"
                            style="text-align: end;padding: 0.1rem;">
                            <!-- <div> -->
                            <p style="font-weight: bolder;font-size: 18px;">{{ indicator.value }}</p>
                            <p style="font-size: 15px;">{{ indicator.label }}</p>
                            <!-- </div> -->
                        </div>
                    </div>
                    <Bar style=" margin: 20px;max-width: 50%;max-height: 150px;" 
                    
                    :options="ItemsChartConfig.options"
                    :data="ItemsChartConfig.data"
                    />
                </div>
            </ChartCard>


        </v-row>
    </Collapsible>
</template>

<script setup lang="ts">
import Collapsible from '../components/CollapsibleCard.vue';
import ChartCard from '@/components/ChartCard.vue';
import { Chart as ChartJS, ArcElement, Tooltip, Title, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { reactive } from 'vue';
import { Doughnut, Bar } from 'vue-chartjs'
import * as chartsData from '../data/chartsData'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement)




const ItemsChartConfig = reactive({
    options: {
        indexAxis: "y"  as any ,
        scales: {
            x: {
                display: false, // Hide the x-axis
                reverse: true, // Start from the right
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true
            },
        },

    },
    data: {
        labels: chartsData.ItemsIndicators.map(item => item.label),
        datasets: [{
            label: 'مؤشرات البنود',
            data: [18, 4, 2],
            backgroundColor: chartsData.ItemsIndicators.map(item => item.color),
            borderRadius: 50,
            borderSkipped: false,
            barThickness: 15, // Adjust the bar width (spacing)
        }]
    }
})

const TasksChartCofig = reactive({
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
        labels: chartsData.TaskIndicators.map(indicator => indicator.label),
        datasets: [
            {
                backgroundColor: chartsData.TaskIndicators.map(indicator => indicator.color),
                data: chartsData.TaskIndicators.map(indicator => indicator.value),
            }
        ]
    }
})
const MeetingsChartConfig = reactive({
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 60, // Display half of the pie
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
        labels: chartsData.MeetingIndicators.map(indicator => indicator.label),
        datasets: [
            {
                backgroundColor: chartsData.MeetingIndicators.map(indicator => indicator.color),
                data: chartsData.MeetingIndicators.map(indicator => indicator.value)
            }
        ]
    }
})
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
</style>../data/chartsData