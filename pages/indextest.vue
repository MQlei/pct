<template>
  <div class="specifications">
    <div class="specifications__map">
      <div class="map-tab">
        <div class="tab-img img1" :class="{ active: activeTab === 1 }" @click="activeTab = 1">
          Terminal Specification & Layout
        </div>
        <div class="tab-img img2" :class="{ active: activeTab === 2 }" @click="activeTab = 2">
          Future Specification & Layout
        </div>
      </div>
      <div class="map-img"><img :src="specificationsMap" alt="Specification map"></div>
    </div>
    <div class="specifications__table">
      <div class="table-title"><img :src="specificationsTitle" alt="Table title"></div>
      <div class="table-box">
        <div class="img-one-third">
          <img :src="specificationsTable" alt="Table title">
          <!-- 替换为对应数据的表格 -->
          <!-- <el-table 
            :data="tableData1" 
            border 
            :header-cell-style="headerCellStyle"
            :row-class-name="getRowClassName"
            size="small"
            stripe>
            <el-table-column 
              prop="item" 
              label="Pier II"
              align="center">
            </el-table-column>
            <el-table-column 
              prop="eastSide" 
              label="East Side"
              align="center">
            </el-table-column>
            <el-table-column 
              prop="westSide" 
              label="West Side"
              align="center">
            </el-table-column>
          </el-table> -->
        </div>
        <div class="img-two-thirds">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Pier II</th>
                  <th>East Side</th>
                  <th>West Side</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>operational Quayside</td>
                  <td>600 meters</td>
                  <td>762 meters</td>
                </tr>
                <tr>
                  <td>Depth alongside</td>
                  <td>18.5 meters</td>
                  <td>19.5 meters</td>
                </tr>
                <tr>
                  <td>QC Cranes</td>
                  <td>5 SSPP QCs new generation 26 rows</td>
                  <td>8 SSPP QCs new generation 26 rows</td>
                </tr>
                <tr>
                  <td>RMGs</td>
                  <td>6 semi - automated RMGs</td>
                  <td></td>
                </tr>
                <tr>
                  <td>E - RTGs</td>
                  <td>24 E - RTGs replaced</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Reefer Points</td>
                  <td>360 reefer plugs for 1090</td>
                  <td>1035 reefer plugs</td>
                </tr>
                <tr>
                  <td>Throughput</td>
                  <td>3 million TEUs</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          
        
          
   
         
          <!-- <img :src="specificationsTable" alt="Table title"> -->
          <!-- 第二个3×7表格（带红色斑马纹） -->
          <!-- <el-table 
            :data="tableData2" 
            border 
            :header-cell-style="headerCellStyle"
            :row-class-name="getRowClassName"
            size="small"
            class="second-table"
            stripe>
            <el-table-column 
              v-for="(col, index) in 3" 
              :key="index" 
              :prop="'col' + index" 
              :label="'Column ' + (index + 1)"
              :width="secondTableColumnWidth">
            </el-table-column>
          </el-table> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref, computed } from 'vue';
import specificationsTab1 from '~/assets/images/specifications-tab1.png';
import specificationsTab2 from '~/assets/images/specifications-tab2.png';
import specificationsMap from '~/assets/images/specifications-map.png';
import specificationsTitle from '~/assets/images/specifications-title.png';
import specificationsTable from '~/assets/images/specifications-table.png';

// Tab切换状态
const activeTab = ref(1);

// 第二个表格列宽设置
const secondTableColumnWidth = 230;

// 表格表头样式 - 确保表头文字居中
const headerCellStyle = computed(() => {
  return {
    'background-color': '#3CC2EF',
    'color': '#FFFFFF',
    'font-weight': 'bold',
    'text-align': 'center',
    'vertical-align': 'middle'
  };
});

// 斑马纹效果：通过行索引返回不同类名
const getRowClassName = ({ rowIndex }) => {
  return rowIndex % 2 === 0 ? 'zebra-row-even' : 'zebra-row-odd';
};

// 第一个表格数据（替换成你给的码头数据）
const tableData1 = ref([
  { item: 'operational Quayside', eastSide: '780 meters', westSide: '700 meters' },
  { item: 'Depth alongside', eastSide: '14.5 meters', westSide: '16.5 meters' },
  { item: 'QC Cranes', eastSide: '9 QCs', westSide: '8 QCs' },
  { item: 'RMGs', eastSide: '16 semi - automated RMGs', westSide: '' },
  { item: 'E - RTGs', eastSide: '22 E-RTGs replaced', westSide: '' },
  { item: 'Reefer Points', eastSide: '828 reefer plugs for 1090', westSide: '' },
  { item: 'Throughput', eastSide: '3.2 million TEUs', westSide: '' }
]);

// 生成第二个表格数据（保持原来7行3列的模拟数据逻辑 ）
const generateTableData = (rows, cols) => {
  return Array.from({ length: rows }, (_, rowIndex) => {
    const row = {};
    Array.from({ length: cols }, (_, colIndex) => {
      row[`col${colIndex}`] = `Data ${rowIndex+1}-${colIndex+1}`;
    });
    return row;
  });
};
const tableData2 = ref(generateTableData(7, 3));
</script>

<style lang="scss" scoped>
.specifications{
  width: 100%;
  box-sizing: border-box;

  &__map{
    padding: 0px 120px 70px;
    box-sizing: border-box;
    
    .map-tab{
      @apply flex justify-between;
      margin-bottom: 40px;
    }
    
    .tab-img{
      height: 100%;
      padding: 15px 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 4px;
      font-weight: 500;
      color: #333;
      text-align: center;
      
      &:hover {
        transform: translateY(-3px);
        color: #1758B6;
      }
      
      &.active {
        color: #1758B6;
      }
      
      &.img1{
        width: 354px;
      }
      
      &.img2{
        width: 332px;
      }
      
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    
    .map-img{
      height: 700px;
      overflow: hidden;
      
      img{
        height: 100%;
        width: auto;
        min-width: 100%;
        display: block;
      }
    }
  }
  
  &__table{
    padding: 0 80px 24px;
    box-sizing: border-box;

    .table-title{
      padding: 0px 114px 22px;
      @apply flex justify-center;
    }
    
    .table-box{
      @apply flex justify-between;
      gap: 40px;

      .img-one-third {
        flex: 1;
      }
      
      .img-two-thirds {
        flex: 2;
        overflow: hidden;
      }
      
      /* // Element表格样式调整 - 强制文字居中 */
      .el-table {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        
        &::before {
          background-color: #e6e6e6;
        }
        
        .el-table__row {
          height: 60px;
          transition: background-color 0.2s;
        }
        
        /* // 关键：强制单元格内容水平居中 */
        .el-table__cell {
          padding: 0 10px;
          border-right: 1px solid #EF3C3C;
          text-align: center !important;  /* 增加!important确保覆盖默认样式 */
          vertical-align: middle;
          
          /* // 针对单元格内的内容容器设置居中 */
          .cell {
            text-align: center !important;
            display: inline-block;
            width: 100%;
          }
        }
        
        /* // 红色系斑马纹样式 */
        .zebra-row-even {
          background-color: #FFF5F5 !important;
        }
        
        .zebra-row-odd {
          background-color: #FFFFFF !important;
        }
        
        .el-table__row:hover > .el-table__cell {
          background-color: #FFEEEE !important;
        }
      }
      
      .second-table {
        .el-table__cell {
          padding: 0 20px;
        }
      }
    }
  }

  .custom-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          
          .custom-table th,
          .custom-table td {
            border: 1px solid #ccc;
            padding: 8px;
          }
          
          .custom-table thead {
            background-color: #00a2e8; /* 类似图片中的蓝色表头背景色，可根据实际调整 */
            color: white;
          }
}
</style>