<template>
    <div>
        <q-header elevated class="bg-grey-8 text-white" height-hint="108">
      <q-tabs >
        <div class="row" >
          <div class="col-3">
            <q-route-tab to="/page1" label="Privacy | Policy" />
          </div>
          <div class="col-1"></div>
          <div class="col-1">
            <q-route-tab to="/page2" icon="question_answer" />
          </div>
          <div class="col-1"></div>
          <div class="col-3">
            <q-route-tab to="/page3" label="Request Receipe" />
          </div>
          <div class="col-1"></div>
          <div class="col-2">
            <q-route-tab to="/page3" label="Contact" />
          </div>
        </div>
      </q-tabs>
      
    </q-header>
    </div>
</template>