<template>
    <usetable :tableData="tableData" :tableColum="tableColum">
        <template #btn="{ data }">
            <el-button @click="edit(data.$index, data.row)">edit</el-button>
            <el-button @click="del(data.$index, data.row)">del</el-button>
        </template>
    </usetable>
</template>
<script setup>
import { ref, reactive, onMounted, defineComponent } from 'vue'
import usetable from "@/components/usetable.vue"
defineComponent({
    usetable
})
const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
])
const tableColum = ref([
    {
        prop: "date",
        label: "date"
    }, {
        prop: "name",
        label: "name"
    }, {
        prop: "address",
        label: "address",
        width: 160
    },
    {
        prop: "bu",
        label: "bu",
        showSlot: true,
        slotName: "btn",
        width: 160
    }
])
const edit = (index, row) => {
    console.log(index, row)
}
const del = (index, row) => {
    console.log(index, row)
}
</script>
<style lang='scss' scoped>
</style>