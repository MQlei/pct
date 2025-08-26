<template>
  <div class="csr-profile">

    <div class="mb-[26px]">
      <h5>Corporate Social Responsibility at PCT </h5>
      <h5>Standing by Society with Responsibility and Care</h5>


    </div>
    <div>
      <h4>Our Commitment</h4>
      <div class="mb-[56px]">
        <p>At Piraeus Container Terminal (PCT), Corporate Social Responsibility (CSR) is a fundamental pillar of our
          corporate strategy and operations. Since 2009, we have demonstrated unwavering commitment to the well-being of
          the communities surrounding us. Our CSR approach is guided by responsibility, engagement, and the belief that
          sustainable development begins with meaningful, long-term actions. Our efforts focus on different strategic
          areas:</p>
        <p> Our efforts focus on different strategic areas: Social Welfare, Education & Youth Empowerment, Local
          Contribution and Development, and Community Engagement.</p>
        <!-- <p>Greece instituted a system that provides for the deferment of VAT at the time of import. Instead of paying VAT when the goods are imported into free circulation within the EU, the payment can be deferred to a periodic VAT return.</p> -->
        <!-- <p>As a result, there is no actual VAT payment during the goods importation. </p> -->


      </div>
    </div>

    <div>
      <h4>Social Welfare: Supporting Vulnerable Groups</h4>
      <div class="mb-[56px]">
        <p>
          PCT actively supports individuals and families in need through targeted, tangible initiatives:• Distribution
          of essential food supplies to vulnerable families during Easter and Christmas.• Support for elderly care
          institutions such as the Piraeus Nursing Home• Collaboration with NGOs and organizations, including Love Care
          For Life and the Piraeus Care Center for Kids with Disabilities


        </p>
        <p>
          We remain dedicated to ensuring dignity, care, and inclusion for every member of our community.
        </p>
        <!--   <p>
          What is exactly the domestic reverse charge mechanism?
        </p> 
        <p>
          When the liability to pay VAT is shifted from the supplier to the recipient of the supply it is called reverse charge.
        </p>
        <p>
          According to the reverse charge mechanism the customer to whom the good are supplied to is the person who must pay and account for the VAT, not the supplier.
        </p> -->
      </div>
    </div>

    <div class="mb-[56px]"> 
      <h4>Education & Youth Empowerment</h4>
      <p>PCT is deeply invested in the educational development of local youth:• Scholarship programs for first-year
        top-performing students in the greater Piraeus area• Donation of IT equipment to local schools• Funding of
        educational initiatives, including programs at the Xatzikiriakio Foundation</p>

      <p> Our aim is to bridge inequality gaps and equip students with the resources they need to thrive in a
        knowledge-driven world.</p>
      <!-- <ul class="step-list">
        <li>Fast licensing process</li> 
        <li>Results in considerable cash-flow and interest benefit</li> 
        <li> No actual payment of VAT at import-The liability to account for VAT shifts to the customer – recipient of the goods and the VAT is finally paid by the final buyer of the goods at the country where the goods are consumed ( B2C)</li> 
        <li>After customs entry in Greece, the goods are free (VAT) to circulate within EU </li> 
        <li>No tax penalties and no retrospective effect if the conditions of the required threshold of the statistical value of imports or of the rate of the imported goods aren’t met.</li> 
      </ul> -->
    </div>
    <div>
      <h4>Local Development: A Lasting Impact</h4>
      <p>PCT is committed to long-term partnerships that strengthen the local ecosystem.Our social responsibility
        extends to economic empowerment.PCT is among the largest private employers in Greece and the Balkans, creating
        over 2,500 direct jobs. Furthermore, the company sources from over 600 suppliers, the majority of whom are local
        businesses.

      </p>

      <p> Additionally, PCT has contributed more than €500 million in concession fees, taxes, and insurance
        contributions to the Greek state, reinforcing our role as a stable, reliable economic partner.</p>

    </div>
    <div>
      <h4>Community Engagement</h4>
      <p>PCT contributes to a vibrant society by enhancing cultural and athletic initiatives:• Support for
        infrastructure upgrades at local public schools in the wider area of Piraeus and coordination of sports events•
        Support through corporate participation in sports events, like the Authentic Athens Marathon, Half Marathon, and
        others with social impact, such as Race for the Cure.• Coordination of the annual coastal cleanup and tree
        planting, in collaboration with environmental organizations.</p>

      <p> </p>

    </div>
    <!-- <div class="csr-profile__wrap">
      <div class="">
        <img :src="crsTitle" alt="">
      </div>
    </div> -->
  </div>
</template>

<script setup>
  import crsTitle from '~/assets/images/crs-title.png';
</script>

<style lang="scss" scoped>
  .csr-profile {
    /* background: rgba(252, 253, 255, 1);
  padding: 113px 0 107px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #262729;
  font-size: 20px; */

  h5 {
      font-weight: 800;
      font-size: 25px;
      color: #333333;
      /* margin-top: 20px; */
    }

    h4 {
      font-weight: 600;
      font-size: 25px;
      color: #333333;
      margin-top: 20px;
    }

    p {
      margin-bottom: 20px;
    }
/* 
    .step-list {
      li {
        position: relative;
        padding-left: 22px;
        margin-bottom: 20px;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid rgba(26, 6, 82, 1);
          border-radius: 50%;
        }
      }
    } */
  }

  /* &__wrap{
    width: 800px;
    height: 400px;
    background: url('~/assets/images/bg-csr.png') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  
} */
</style>