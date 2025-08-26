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

    <div class="tabletitles"><img :src="specificationsTitle" alt="Table title"></div>
    <div class="specifications__table">
      <div class="table-box">
        <div class="img-one-third">
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
              <tr style="background-color: #F4FCFF ;">
                <td>Depth alongside</td>
                <td>18.5 meters</td>
                <td>19.5 meters</td>
              </tr>
              <tr>
                <td>QC Cranes</td>
                <td>5 SSPP QCs new </td>
                <td>19.5 meters</td>
              </tr>
              <tr style="background-color: #F4FCFF ;">
                <td>RMGs</td>
                <td colspan="2">6 semi - automated RMGs</td>
              </tr>
              <tr>
                <td>E - RTGs</td>
                <td colspan="2">24 E - RTGs replaced</td>
              </tr>
              <tr style="background-color: #F4FCFF ;">
                <td>Reefer Points</td>
                <!-- <td>5 SSPP QCs new </td>
                <td>8 SSPP QCs new </td> -->
            
                <td colspan="2">3 million TEUs</td>
              </tr>
              <tr>
                <td>Throughput</td>
                <td colspan="2">3 million TEUs</td>
              </tr>
            </tbody>
          </table>
          <!-- <img :src="specificationsTable" alt="Table title"> -->
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
              <tr style="background-color: #F4FCFF ;">
                <td>Depth alongside</td>
                <td>18.5 meters</td>
                <td>19.5 meters</td>
              </tr>
              <tr>
                <td>QC Cranes</td>
                <td>5 SSPP QCs new generation 26 rows</td>
                <td>8 SSPP QCs new generation 26 rows</td>
              </tr>
              <tr style="background-color: #F4FCFF ;">
                <td>RMGs</td>
                <td colspan="2">6 semi - automated RMGs</td>
              </tr>
              <tr>
                <td>E - RTGs</td>
                <td colspan="2">24 E - RTGs replaced</td>
              </tr>
              <tr style="background-color: #F4FCFF ;">
                <td>Reefer Points</td>
                <td>360 reefer plugs for 1090</td>
                <td>1035 reefer plugs</td>
              </tr>
              <tr>
                <td>Throughput</td>
                <td colspan="2">3 million TEUs</td>
              </tr>
            </tbody>
          </table>
          <!-- 
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Pier II</th>
                  <th>East Side</th>
                  <th>West Side</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(item, index) in tableData" 
                  :key="index"
                  :class="{ 'even-row': index % 2 === 0, 'odd-row': index % 2 !== 0 }"
                >
                  <td>{{ item.label }}</td>
                  处理RMGs行的单元格合并
                  <td 
                    v-if="item.label === 'RMGs' && 'operational Quayside'" 
                    colspan="2"
                  >
                    {{ item.eastSide }}
                  </td>
                  <td v-else>{{ item.eastSide }}</td>
                  <td v-else>{{ item.westSide }}</td>
                  <td >{{ item.westSide }}</td>

                </tr>
              </tbody>
            </table>
           -->




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

<script setup>
  import {
    ref,
    computed
  } from 'vue';
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
  const getRowClassName = ({
    rowIndex
  }) => {
    return rowIndex % 2 === 0 ? 'zebra-row-even' : 'zebra-row-odd';
  };

  // 第一个表格数据（替换成你给的码头数据）
  const tableData = ref([{
      label: 'operational Quayside',
      eastSide: '600 meters',
      westSide: '762 meters',
    },
    {
      label: 'Depth alongside',
      eastSide: '18.5 meters',
      westSide: '19.5 meters'
    },
    {
      label: 'QC Cranes',
      eastSide: '5 SSPP QCs new generation 26 rows',
      westSide: '8 SSPP QCs new generation 26 rows'
    },
    {
      label: 'RMGs',
      eastSide: '6 semi - automated RMGs',
      westSide: ''
    },
    {
      label: 'E - RTGs',
      eastSide: '24 E - RTGs replaced',
      westSide: ''
    },
    {
      label: 'Reefer Points',
      eastSide: '360 reefer plugs for 1090',
      westSide: '1035 reefer plugs'
    },
    {
      label: 'Throughput',
      eastSide: '3 million TEUs',
      westSide: ''
    }
  ]);

  // 生成第二个表格数据（保持原来7行3列的模拟数据逻辑 ）
  const generateTableData = (rows, cols) => {
    return Array.from({
      length: rows
    }, (_, rowIndex) => {
      const row = {};
      Array.from({
        length: cols
      }, (_, colIndex) => {
        row[`col${colIndex}`] = `Data ${rowIndex+1}-${colIndex+1}`;
      });
      return row;
    });
  };
  const tableData2 = ref(generateTableData(7, 3));
</script>

<style lang="scss" scoped>
  .specifications {
    width: 100%;
    box-sizing: border-box;

    &__map {
      padding: 0px 120px 70px;
      box-sizing: border-box;

      .map-tab {
        @apply flex justify-between;
        margin-bottom: 40px;
      }

      .tab-img {
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

        &.img1 {
          width: 354px;
        }

        &.img2 {
          width: 332px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      .map-img {
        height: 700px;
        overflow: hidden;

        img {
          height: 100%;
          width: auto;
          min-width: 100%;
          display: block;
        }
      }
    }
    .tabletitles {
        padding: 0px 114px 22px;
        margin-bottom: 20px;
      }
    &__table {
      /* padding: 0 80px 24px; */
      /* box-sizing: border-box; */

      .table-title {
        padding: 0px 114px 22px;

        margin-bottom: 20px;
      }
     
      .table-box {
        @apply flex justify-between;
        gap: 40px;
        /* specifications__table */

        .img-one-third {
          /* flex: 1; */

          .custom-table th,
          .custom-table td {
            border: 1px solid #ddd;
            padding: 10.5px 13px;
          }

          .custom-table thead {
            background-color: #3CC2EF;
            color: white;
          }



          /* 更明显的悬停效果 */
          .custom-table tbody tr {
            transition: all 0.3s ease;
          }

          .custom-table tbody tr:hover {
            /* background-color: #e3f2fd; */
            transform: translateX(2px);
          }

          /* 表头文字加粗 */
          .custom-table th {
            font-weight: 600;
          }
        }

        .img-two-thirds {
          /* flex: 2; */
          overflow: hidden;


          .custom-table th,
          .custom-table td {
            border: 1px solid #ddd;
            padding: 12px 15px;
          }

          .custom-table thead {
            background-color: #3CC2EF;
            color: white;
          }



          /* 更明显的悬停效果 */
          .custom-table tbody tr {
            transition: all 0.3s ease;
          }

          .custom-table tbody tr:hover {
            /* background-color: #e3f2fd; */
            transform: translateX(2px);
          }

          /* 表头文字加粗 */
          .custom-table th {
            font-weight: 600;
          }
        }

        .specifications .custom-table th {
          font-weight: 600;
          width: 115px;
        }

        .specifications .custom-table td {
          /* text-align: center; */
          border: 1px solid #FFFFFF;
          font-weight: normal;
          font-size: 12px;
          color: #333333;
        }
      }


    }
  }
</style>