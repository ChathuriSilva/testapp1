

<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-grey-8 text-white"  height-hint="108" >
      <q-tabs >
        <div class="row" >
          <div class="col-1">
             <q-btn style="margin-top:8px" dense flat round icon="menu" @click="toggleLeftDrawer" />
          </div>
          <div class="col-2" >
            <q-route-tab to="/" label="Dashboard" />
          </div>
          <div class="col-1"></div>
          <div class="col-1">
            <q-route-tab to="/page2"  icon="question_answer" />
          </div>
          <div class="col-1"></div>
          <div class="col-2">
            <q-route-tab to="/privacypolicy" label="Privacy | Policy" />
          </div>
          <div class="col-1"></div>
          <div class="col-2" >
            <q-route-tab to="/page3" label="Contact" />
          </div>
          <div class="col-1" ></div>
        </div>
      </q-tabs>
      
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      
      <div class="row">
        <div class="col-1">1</div>
        <div class=" col-10">
          <div class="row" style="margin-top:100px"></div>
          <div class="row">
            <div class="col-12 col-md-5 ">
              <h5 class="text-weight-light font1 heading">COOK YOURSELF</h5>
              <h6 class="font2 heading">Give Us Feedback And Request For More Recipes</h6>
              <h3 class="font3 heading">RECEIPE'S FOR YOU</h3>
            </div>
            <!-- <div class="col-12 col-md-1 "></div> -->
            <div class="col-12 col-md-7 ">
               <div class="row" style="height:10vh; padding-bottom: 50px">
                 <div class="col-3"></div>
                 <div class="col-8 self-center">
                   <img class="logo " src="../assets/cooksitelogo.jpg" style="display: block; width:75%">
                 </div>
                 <div class="col-1"></div>
               </div>
               
            </div>
          </div>
          <div class="row" style="height:6vh"></div>
                <div class="row buttongrp" >
                  <div class="col-12 col-md-5 ">
                    <q-input class="GPL__toolbar-input" dense standout="bg-brown-2" v-model="search" placeholder="Search">
                        <template v-slot:prepend>
                          <q-icon v-if="search === ''" name="search" />
                          <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
                        </template>
                      </q-input>
                  </div>
                  <div class="col-12 col-md-1" style="height:20px">
                      
                    </div>
                    <div class="col-4 col-md-2">
                      <q-btn  unelevated  color="brown-2" label="Most Viewed" style="margin-right:20px; width:90% " />
                    </div>
                    <div class="col-4 col-md-2">
                      <q-btn unelevated  color="brown-2" label="Most Loved" style="margin-right:20px;width:90%" />
                    </div>
                    <div class="col-4 col-md-2">
                      <q-btn unelevated  color="brown-2" label="From Latest" style="width:100%" />
                    </div>
                    
                </div>
          <div class="row" style="margin-top:5vh">
            <div class="col-md-3">
              <div class="row" >
                <prim-card/>
              </div>
              <div class="row" ></div>
            </div>
            <div class="col-md-9">
              <div class="row">
                  <!-- <div class="col-1"></div> -->
              <div class="col-12  col-lg-3 col-sm-6" style="margin: 0%">
                <small-card/>
                <small-card/>
                <small-card/>
                <small-card/>
              </div>
              <div class="col-12  col-lg-3 col-sm-6">
                <small-card/>
                <small-card/>
                <small-card/>
                <small-card/>
              </div>
              <div class="col-12  col-lg-3 col-sm-6">
                <small-card/>
                <small-card/>
                <small-card/>
                <small-card/>
              </div>
              <div class="col-12  col-lg-3 col-sm-6">
                <small-card/>
                <small-card/>
                <small-card/>
                <small-card/>
              </div>
              </div>
            </div>
            
            <div class="col-6 col-md-1">1</div>
          </div>
          <div class="row"></div>
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
import PrimCard from '../components/primCard.vue'
import smallCard from '../components/smallCard.vue'
import FloatingActionButton from '../components/floatingActionButton.vue'
import { ref } from 'vue'

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  components: { smallCard, PrimCard, FloatingActionButton },
  //  components: {
  //   "primCard": primCard,
  //   "smallCard": smallCard
  // },
  created(){
    // this.drawerLeft = !drawerLeft
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const hamburger = ref(false)
    return {
      leftDrawerOpen,
      hamburger,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      toggleHamburger () {
        hamburger.value = !hamburger.value
      },
      menuList
    }
  }
}
</script>

<style>
  .font1{
    /* display: flex;
    width: 658px;
    height: 46px; */
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    /* font-size: 24px; */
    /* line-height: 28px; */
    color: #433B3B;
    margin: 5px;
  }
  .font2{
    margin: 5px;
    /* display: flex;
    width: 658px;
    height: 46px;
    left: 80px; */
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    /* font-size: 24px;
    line-height: 28px; */
    color: #c48e8e;
  }
  .font3{
    margin: 5px;
    /* display: flex;
    width: 680px;
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
    display: flex;
    height: 26px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    color: #848080;
  }
  /* .logo{
    background-image: url("F:\vue projects\testapp1\src\assets\cooksitelogo.jpg");
  } */

  @media only screen and (min-width: 600px) {
	  .head{
      display: block;
    }
  }
  
  @media only screen and (max-width: 1025px) {
	 .heading{
     text-align: center;
   }
  } 
  
</style>



