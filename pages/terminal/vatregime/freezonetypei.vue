<template>
  <div class="deferment-and-reverse-vat">
    <!-- 第一部分：No VAT, No duties -->
    <div>
      <h4 class="txt-b">No VAT, No duties</h4>
      <div class="mb-[56px]">
        <p>
          Free Zones are special areas, usually near ports or airports, for the storage of imported goods under beneficial customs conditions. When goods are held in a Free Zone, import duty, VAT and excise duties are suspended on goods imported from outside the European Community until the goods are released into free circulation, used or consumed within the Free Zone.
        </p>
      </div>
    </div>

    <!-- 第二部分：Efficient Processes -->
    <div>
      <h4 class="txt-b">Efficient Processes</h4>
      <div class="mb-[56px]">
        <p>
          Free Zone can help you to manage the process of importing goods more effectively and/or improve cash flow. Once you are authorized to operate in a Free Zone (or you have chosen an operator who is already authorized to operate on your behalf) you can enter your goods and then remove them when it suits your business. You may also, carry out certain handling or processing operations on the goods while they remain in the Free Zone.
        </p>
      </div>
    </div>

    <!-- 第三部分：Tax Flexibilities -->
    <div>
      <h4 class="txt-b">Tax Flexibilities</h4>
      <div class="mb-[56px]">
        <p>
          Special tax provisions, provide the “simple” processing/repacking/labelling of products, based to non-community components, without company’s obligation of having a Permanent establishment in Greece (income taxation) and under specific conditions, their supply within EU with no customs duties and VAT, as free circulated goods within European Union.
        </p>
      </div>
    </div>

    <!-- 保持不变的列表项区域（step-list的li保持原始结构） -->
    <div>
      <h4>Free Zone Type I Benefits</h4>
      <ul class="step-list">
        <li 
          @click="switchTab(0)" 
          :class="{ 'active': activeIndex === 0 }"
        >
          Improved cash flow management by removing the obligation to pay VAT or import duty at the same time as goods are physically transported into Greece you can meet your import tax obligations closer to the time you sell the goods.
        </li>
        <li 
          @click="switchTab(1)" 
          :class="{ 'active': activeIndex === 1 }"
        >
          VAT-free importation of goods designated for another EU Member State.
        </li>
        <li 
          @click="switchTab(2)" 
          :class="{ 'active': activeIndex === 2 }"
        >
          Goods brought from outside the EU and held in a Free Zone are treated as being outside the customs territory of the EU even though they are physically within it.
        </li> 
        <li 
          @click="switchTab(3)" 
          :class="{ 'active': activeIndex === 3 }"
        >
          In the Free Zone you can store goods without paying import VAT, excise duty or import duty until you remove the goods or released for free circulation.
        </li>
        <li 
          @click="switchTab(4)" 
          :class="{ 'active': activeIndex === 4 }"
        >
          Free Zones can help you to carry out certain handling or processing operations on the goods while they remain in the Free Zone.
        </li>
        <li 
          @click="switchTab(5)" 
          :class="{ 'active': activeIndex === 5 }"
        >
          Improved cash flow management by removing the obligation to pay VAT or import duty at the same time as goods are physically transported into Greece you can meet your import tax obligations closer to the time you sell the goods. goods may be put in free zones in order to benefit from Community legislation governing export refunds or the repayment of import duties and VAT refund even if actual export procedure will take place on later stage. (i.e. no VAT is charged by the supplier in respect of those goods at triagonal transactions).
        </li>
      </ul>
    </div>

    <!-- 内容展示区域 -->
    <div class="typei-benfit">
      <h6>PIRAEUS FREE ZONE Type I — Benefits</h6>
      
      <div class="typei-benfit__box">
        <div 
          class="img-wrap" 
          v-for="(box, boxIndex) in benefitsList[activeIndex].boxes" 
          :key="boxIndex"
        >
          <div class="img-cont">
            <img :src="box.image" :alt="box.altText">
          </div>
          <p>{{ box.text }}</p>
        </div>
      </div>

      <!-- 可点击的指示器 -->
      <ul class="dots-gradient">
        <li 
          class="dots-item" 
          v-for="(item, index) in benefitsList" 
          :key="`dot-${index}`"
          :class="{ 'dashed': activeIndex !== index }"
          @click="switchTab(index)"
          role="button"
          tabindex="0"
          aria-label="Go to section {{ index + 1 }}"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import bgVat1 from '~/assets/images/bg-vat1.png';
import bgVat3 from '~/assets/images/bg-vat3.png';

// 内容区数据存储
const benefitsList = [
  {
    boxes: [
      {
        image: bgVat1,
        altText: "No special Customs license",
        text: "No special Customs license required for repacking or any other simple handling or processing operations on goods"
      },
      {
        image: bgVat1,
        altText: "Tax deferment",
        text: "Import duty & VAT deferment until goods are released into free circulation"
      },
      {
        image: bgVat3,
        altText: "No transportation cost",
        text: "No transportation cost will be applied, since the operation area is situated inside piraeus port"
      }
    ]
  },
  {
    boxes: [
      {
        image: bgVat1,
        altText: "VAT-free import",
        text: "VAT-free importation of goods designated for another EU Member State"
      },
      {
        image: bgVat3,
        altText: "Intra-EU duty exemption",
        text: "Customs duty exemption for goods transferred between EU Member States"
      },
      {
        image: bgVat1,
        altText: "Simplified declaration",
        text: "Simplified customs declaration process for intra-EU goods movement"
      }
    ]
  },
  {
    boxes: [
      {
        image: bgVat3,
        altText: "Outside customs territory",
        text: "Goods from outside EU held in Free Zone are treated as outside EU customs territory"
      },
      {
        image: bgVat1,
        altText: "No immediate tax",
        text: "No immediate payment of import duty, VAT or excise duty for stored goods"
      },
      {
        image: bgVat1,
        altText: "Flexible storage",
        text: "Flexible storage period without tax liability during storage"
      }
    ]
  },
  {
    boxes: [
      {
        image: bgVat1,
        altText: "Tax-free storage",
        text: "Store goods without paying import VAT, excise duty or import duty"
      },
      {
        image: bgVat3,
        altText: "Tax payment delay",
        text: "Tax obligations only apply when goods are removed or released for free circulation"
      },
      {
        image: bgVat1,
        altText: "Cash flow relief",
        text: "Relieve cash flow pressure by delaying tax payments until goods are sold"
      }
    ]
  },
  {
    boxes: [
      {
        image: bgVat1,
        altText: "In-zone handling",
        text: "Carry out handling or processing operations while goods remain in the Free Zone"
      },
      {
        image: bgVat3,
        altText: "Simple processing",
        text: "Authorized simple processing (e.g., repacking, labelling) without extra permits"
      },
      {
        image: bgVat1,
        altText: "Operational efficiency",
        text: "Improve operational efficiency by processing goods before release to market"
      }
    ]
  },
  {
    boxes: [
      {
        image: bgVat1,
        altText: "Cash flow management",
        text: "Improve cash flow by paying import tax closer to the time of goods sale"
      },
      {
        image: bgVat3,
        altText: "Export refunds",
        text: "Benefit from EU export refunds or import duty/VAT repayment in advance"
      },
      {
        image: bgVat1,
        altText: "Triangular transactions",
        text: "No VAT charged by suppliers for goods in triangular transactions"
      }
    ]
  }
];

// 响应式变量管理当前激活的索引
const activeIndex = ref(0);

// 切换标签函数
const switchTab = (index) => {
  activeIndex.value = index;
};
</script>

<style lang="scss" scoped>
.deferment-and-reverse-vat {
  color: #262729;
  font-size: 20px;

  // 标题样式
  h4 {
    font-weight: 800;
    font-size: 30px;
    color: #333333;
    margin-top: 20px;

    &.txt-b {
      color: #1758B6;
    }
  }

  // 段落样式
  p {
    margin-bottom: 20px;
  }

  // 列表项样式（保持原始结构不变）
  .step-list {
    li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 20px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 5px solid rgba(26, 6, 82, 1);
        border-radius: 50%;
        transition: background-color 0.3s ease, border-color 0.3s ease;
      }

      // 激活状态样式
      &.active {
        color: #1758B6;
        &:before {
          background-color: #1758B6;
        }
      }

      // 悬停效果
      &:hover:not(.active) {
        color: #094699;
        &:before {
          border-color: #094699;
        }
      }
    }
  }

  // 内容区样式
  .typei-benfit {
    margin-top: 50px;
    padding: 52px 50px 42px;
    background: #EDF1F5;

    h6 {
      font-size: 24px;
      color: #094699;
      text-align: center;
      margin-bottom: 50px;
      font-weight: 600;
    }

    &__box {
      @apply flex flex-wrap;
      column-gap: 30px;
      row-gap: 60px;
    }

    .img-wrap {
      width: calc((100% - 30px * 2) / 3);
      box-sizing: border-box;
      background: #FFFFFF;
      border-radius: 30px;
      padding: 24px 50px 24px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
      }

      .img-cont {
        margin-bottom: 44px;
        img {
          display: block;
          object-fit: cover;
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
      }
    }
  }

  // 可点击的指示器样式
  .dots-gradient {
    @apply flex justify-center gap-[14px];
    margin-top: 20px;

    .dots-item {
      @apply w-[12px] h-[12px] rounded-full bg-[#094699] cursor-pointer;
      transition: all 0.3s ease;
      outline: none;

      &.dashed {
        @apply bg-transparent border border-[#094699];
      }

      &:hover:not(.dashed) {
        transform: scale(1.1);
        box-shadow: 0 0 0 3px rgba(9, 70, 153, 0.2);
      }

      &:focus-visible {
        box-shadow: 0 0 0 3px rgba(9, 70, 153, 0.4);
      }
    }
  }

  // 响应式适配
  @media (max-width: 992px) {
    .typei-benfit .img-wrap {
      width: calc((100% - 30px * 1) / 2);
    }
  }

  @media (max-width: 576px) {
    .typei-benfit .img-wrap {
      width: 100%;
    }

    h4 {
      font-size: 24px;
    }

    .typei-benfit {
      padding: 30px 20px 20px;
    }
  }
}
</style>
