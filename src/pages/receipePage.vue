<template>
    <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-grey-8 text-white" height-hint="108">
      <q-tabs >
        <div class="row" >
          <div class="col-3">
            <q-route-tab to="/" label="Dashboard" />
          </div>
          <div class="col-1"></div>
          <div class="col-1">
            <q-route-tab to="/page2" icon="question_answer" />
          </div>
          <div class="col-1"></div>
          <div class="col-3">
            <q-route-tab to="/privacypolicy" label="Privacy | Policy" />
          </div>
          <div class="col-1"></div>
          <div class="col-2">
            <q-route-tab to="/page3" label="Contact" />
          </div>
        </div>
      </q-tabs>
      
    </q-header>

    <q-page-container>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="row" style="height: 50px"></div>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
              <h3 class="text-weight-light font1" >Pasta Pesto</h3 >
              <p class="text-weight-light font2">By : john stwert  |  2012.01.01</p>
            </div>
            <div class="col-12 col-md-6 col-lg-6"></div>
          </div>
          <div class="row">
            <div class="col-12 col-md-7 col-lg-7 ">
              <div class="row">
                <p class="text-weight-light font2">This regional specialty has a unique sauce which is typically slightly chunkier and thicker than most hot dog sauces. You'll often find this served on top-split buns, but regular hot dog buns will work. There are many versions of this sauce, but this is the way we like ours.</p>
              </div>
              <div class="row" style="display: block">
                <receipe-carousel/>
              </div>
            </div>
            <div class="col-12 col-md-2 col-lg-2">
              <div class="row" style="margin:10px;  width:805" >
                 <q-card class="my-card" style="padding:20px; width:100%">
                    <q-card-section>
                        <p class="text-weight-light"><b>Prep :</b> 15 mins </p>
                        <p class="text-weight-light"><b>Cook :</b> 20 mins </p>
                        <p class="text-weight-light"><b>Total :</b> 30 mins </p>
                        <p class="text-weight-light"><b>Servings :</b> 10 </p>
                    </q-card-section>
                  </q-card>
              </div>
              <div class="row" style="margin:10px" ></div>
              <div class="row" style="margin:10px" >
                <q-btn color="grey-6" text-color="white" style="width:100%" unelevated rounded  label="Download Receipe" />
              </div>
              <div class="row" style="margin:10px">
                <q-btn color="grey-6" text-color="white" style="width:100%" unelevated rounded  label="Nutrition Info" />
              </div>
              <div class="row" style="margin:10px">
                <q-btn color="grey-6" text-color="white" style="width:100%" unelevated rounded label="Download Receipe" />
              </div>
            </div>
            <div class="col-12 col-md-3 col-lg-3"></div>
          </div>


          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                  <!-- <h5 class="text-weight-light">Chicken Burger</h5> -->
                  <ingrediant-expansion/>
                </div>
                <!-- <div class="col-1"></div> -->
                <div class="col-12 col-md-6 col-lg-6">
                  <receipe-expansion/>
                </div>
                <!-- <div class="col-1"> 
                
                </div> -->
              </div>
            </div>
            
            <!-- <div class="col-2"></div> -->
          </div>


          
          <div class="row" style="height:10px"></div>
          <div class="row">
            <!-- <separator/> -->
            <q-separator color="black" />
          </div>
          <div class="row" style="height:10px"></div>
          <div class="row" >
            <div class="col-4"></div>
            <div class="col-4">
              <h5 style="text-align: center; " class="text-weight-light">Testimonials</h5>
            </div>
            <div class="col-4"></div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 col-lg-4" >
              <testimonial/>
            </div>
            <div class="col-12 col-md-4 col-lg-4" >
              <testimonial/>
            </div>
            <div class="col-12 col-md-4 col-lg-4" >
              <testimonial/>
            </div>
          </div>
          <div class="row" style="height:10px"></div>
          <div class="row">
            <!-- <separator/> -->
            <q-separator color="black" />
          </div>
          <div class="row" style="height:10px"></div>
          <div class="row" >
            <div class="col-4"></div>
            <div class="col-4">
              <h5 style="text-align: center;" class="text-weight-light">Other Popular Pasta Pesto's</h5>
            </div>
            <div class="col-4"></div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <small-card/>
            </div>
            <div class="col-lg-3 col-sm-6">
              <small-card/>
            </div>
            <div class="col-lg-3 col-sm-6">
              <small-card/>
            </div>
            <div class="col-lg-3 col-sm-6">
              <small-card/>
            </div>
          </div>
          <div class="row" ></div>
          <div class="row">
            <div class="col-lg-3 col-sm-6" >
              <small-card/>
            </div>
            <div class="col-lg-3 col-sm-6">
              <small-card/>
            </div>
            <div class="col-lg-3 col-sm-6">
              <small-card/>
            </div>
            <div class="col-lg-3 col-sm-6">
              <small-card/>
            </div>
          </div>
          <div class="row" style="height:20px"></div>
          <div class="row">
                <div class="col-lg-3 col-sm-6" >
                  <q-btn flat style="color: #FF0080; padding:10px"  label="All Pasta Pesto Receipes" />
                </div>
                <div class="col-lg-3 col-sm-6">
                  <q-btn flat style="color: #FF0080;padding:10px " label="Other Pasta Receipes" />
                </div>
                <div class="col-lg-3 col-sm-6">
                  <q-btn flat style="color: #FF0080; padding:10px" label="More Similar Receipes" />
                </div>
                <div class="col-lg-3 col-sm-6">
                  <q-btn flat style="color: #FF0080; padding:10px" label="All Other Receipes" />
                </div>
              </div>
          <div class="row" style="height:20px"></div>
        </div>
        <div class="col-1">
          <floating-action-button/>
        </div>
      </div>
    </q-page-container>

    <footer class="bg-dark" style="padding-top: 40px; padding-bottom: 40px; margin-top: 20px">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <h6 class="text-weight-light font4" style="display:block">Copyright © 2021 HubSpot, Inc.</h6>
          <h6 class="text-weight-light font4" style="display:block"> All Rights Reserved.deCOOKsite is Powered by Lorem.</h6>
        </div>
        <div class="col-4"></div>
      </div>
      
    </footer>

  </q-layout>
</template>

<script>
import receipeCarousel from '../components/receipeCarousel.vue'
import IngrediantExpansion from '../components/IngrediantExpansion.vue'
import ReceipeExpansion from '../components/receipeExpansion.vue'
import Separator from '../components/separator.vue'
import Testimonial from '../components/testimonial.vue'
import SmallCard from '../components/smallCard.vue'
import FloatingActionButton from '../components/floatingActionButton.vue'

export default {
  components: { receipeCarousel, IngrediantExpansion, ReceipeExpansion, Testimonial, SmallCard, FloatingActionButton },
  setup () {
    return {
      
    }
  }
}
</script>

<style>
  .font1{
    /* display: flex; */
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    /* font-size: 48px;
    line-height: 56px; */
    color: #000000;
    margin: 10px;
  }
  .font2{
    margin: 12px;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    /* font-size: 20px;
    line-height: 23px; */
    color: #000000;
  }
  .font3{
    margin: 10px;
    /* display: flex; */
    /* width: 680px;
    height: 54px;
    left: 80px; */
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    /* font-size: 36px;
    line-height: 42px; */
    text-transform: uppercase;
    font-feature-settings: 'cpsp' on;
    color: #848080;
  }
  .font4{
    position: relative;
    text-align: center;
    margin: 0px;
    /* display: flex;
    height: 26px; */
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    /* font-size: 15px;
    line-height: 28px; */
    color: #848080;
  }
  
</style>