<template>
    <el-table ref="myTable" @select="selectedData" @select-all="selectAll" :data="prop.tableData" :border="prop.border"
        highlight-current-row :height="prop.height" style="width: 100%">
        <template v-if="prop.showCheckbox == true">
            <el-table-column type="selection" width="55"></el-table-column>
        </template>
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
    <el-pagination background @current-change="pageNumChange" @next-click="nextClick" @prev-click="prevClick"  :current-page="Page.pageNum" :page-size="Page.size"  :layout="prev, pager, next" :total="total" />
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
const myTable = ref(null)
const prop = defineProps({
    //显示选择框
    showCheckbox: {
        type: Boolean,
        default: true
    },
    //列表数据
    tableData: {
        type: Array,
        default: () => { return [] }
    },
    //列名
    tableColum: {
        type: Array,
        default: () => { return [] }
    },
    //是否多选
    isMultipleSelect: {
        type: Boolean,
        default: false
    },
    //总数
    total: {
        type: Number,
        default: 0
    },
    //页数相关
    Page: {
        type: Object,
        default: () => { return { size: 10, pageNum: 0 } }
    },
    //高度
    height: {
        type: Number,
        default: 500,
    },
    //边框
    border: {
        type: Boolean,
        default: true
    },
})
const prevClick=(num)=>{}
const nextClick=(num)=>{}
const pageNumChange=(num)=>{
     emit("PageNumChange",num)
}
//选择数据
const selectedData = (selection, row) => {
    if (prop.isMultipleSelect == true) {

        emit("getSelectData", selection)
    } else {
        selection.length == 1 ? null : myTable.value.toggleRowSelection(selection.shift(), false)
        emit("getSelectData", row)
    }
}
//选择全部
const selectAll = (selection) => {
    emit("getSelectData", selection)
}
const emit = defineEmits(["getSelectData","PageNumChange"]);
onMounted(() => {

})
</script>
<style lang='scss' scoped>
</style>