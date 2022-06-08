<template>
    <el-button type="danger">删除</el-button>
    <el-table :data="prop.tableData" :border="prop.border" highlight-current-row :height="prop.height"
        style="width: 100%">
        <el-table-column v-if="prop.isMultipleSelect" type="selection" width="55"></el-table-column>
        <template v-for="(item, i) in prop.tableColum" :key="i">
            <el-table-column v-if="item.showSlot == true" :fixed="item.fixed" :prop="item.prop" :label="item.label"
                :width="item.width ? item.width : 120">
                <template #default="scope">
                    <slot :name="item.slotName" :data="scope">

                    </slot>
                </template>
            </el-table-column>
            <el-table-column v-else :fixed="item.fixed" :prop="item.prop" :label="item.label"
                :width="item.width ? item.width : 80"></el-table-column>
        </template>
    </el-table>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
const prop = defineProps({
    tableData: {
        type: Array,
        default: () => { return [] }
    },
    tableColum: {
        type: Array,
        default: () => { return [] }
    },
    isMultipleSelect: {
        type: Boolean,
        default: false
    },
    total: {
        type: Number,
        default: 0
    },
    Page: {
        type: Object,
        default: () => { return { size: 10, pageNum: 0 } }
    },
    height: {
        type: Number,
        default: 500,
    },
    border: {
        type: Boolean,
        default: true
    },
})
const tableData = ref(prop.tableData)
const tableColum = ref(prop.tableColum)
console.log(prop.tableData, prop.tableColum)
</script>
<style lang='scss' scoped>
</style>