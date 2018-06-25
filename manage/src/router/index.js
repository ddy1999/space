import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from "@/components/login"
import Exchange from '@/components/exchange'
import Ser from '@/components/service'
import Serone from '@/components/serpage/serone'
import Sertwo from '@/components/serpage/sertwo'
import Serthree from '@/components/serpage/serthree'
import Serfour from '@/components/serpage/serfour'
import Person from '@/components/person'
import Perone from '@/components/perpage/perone'
import Pertwo from '@/components/perpage/pertwo'
import Perthree from '@/components/perpage/perthree'
import Perfour from '@/components/perpage/perfour'
import Perfive from '@/components/perpage/perfive'
import Persix from '@/components/perpage/persix'
import Perseven from '@/components/perpage/perseven'
import Pereight from '@/components/perpage/pereight'
import Org from '@/components/orgnaztion'
import Orgone from '@/components/orgpage/orgone'
import Orgtwo from '@/components/orgpage/orgtwo'
import Orgthree from '@/components/orgpage/orgthree'
import Orgfour from '@/components/orgpage/orgfour'
import Orgfive from '@/components/orgpage/orgfive'
import Orgsix from '@/components/orgpage/orgsix'
import Orgseven from '@/components/orgpage/orgseven'
import Orgeight from '@/components/orgpage/orgeight'
import Town from '@/components/town'
import Townone from '@/components/townpage/townone'
import Towntwo from '@/components/townpage/towntwo'
import Frist from '@/components/frist'
import Frione from '@/components/fristpage/frione'
import Fritwo from '@/components/fristpage/fritwo'
import Frithree from '@/components/fristpage/frithree'
import Frifour from '@/components/fristpage/frifour'
import Frifive from '@/components/fristpage/frifive'
import Frisix from '@/components/fristpage/frisix'
import System from '@/components/system'
import Sysone from '@/components/syspage/sysone'
import Systwo from '@/components/syspage/systwo'
import Center from '@/components/center'
import Cenone from '@/components/cenpage/cenone'
import Centwo from '@/components/cenpage/centwo'
import Centhree from '@/components/cenpage/centhree'
import Cenfour from '@/components/cenpage/cenfour'
import Cenfive from '@/components/cenpage/cenfive'
import Data from '@/components/data'
import Dataone from '@/components/datapage/dataone'
import Datatwo from '@/components/datapage/datatwo'
import Datathree from '@/components/datapage/datathree'






Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/',
      name: 'index',
      component: Index

    },
    {//首页的两种样子
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    },
    {
      path: '/service',
      name: 'ser',
      component: Ser,
      redirect:'/service/sertwo',
      children:[
        {
          path: 'serone',
          name: 'serone',
          component: Serone,
        },
        {
          path: 'sertwo',
          name: 'sertwo',
          component: Sertwo,
        },
        {
          path: 'serthree',
          name: 'serthree',
          component: Serthree,
        },
        {
          path: 'serfour',
          name: 'serfour',
          component: Serfour,
        },

      ]
    },
    {
      path: '/person',
      name: 'person',
      component: Person,
      redirect:'/person/persix',
      children:[
        {
          path: 'perone',
          name: 'perone',
          component: Perone,
        },
        {
          path: 'pertwo',
          name: 'pertwo',
          component: Pertwo,
        },
        {
          path: 'perthree',
          name: 'perthree',
          component: Perthree,
        },
        {
          path: 'perfour',
          name: 'erfour',
          component: Perfour,
        },
        {
          path: 'perfive',
          name: 'perfive',
          component: Perfive,
        },
        {
          path: 'persix',
          name: 'persix',
          component: Persix,
        },
        {
          path: 'perseven',
          name: 'perseven',
          component: Perseven,
        },
        {
          path: 'pereight',
          name: 'pereight',
          component: Pereight,
        },

      ]
    },
    {
      path: '/org',
      name: 'org',
      component: Org,
      redirect:'/org/orgfive',
      children:[
        {
          path: 'orgone',
          name: 'orgone',
          component: Orgone,
        },
        {
          path: 'orgtwo',
          name: 'orgtwo',
          component: Orgtwo,
        },
        {
          path: 'orgthree',
          name: 'orgthree',
          component: Orgthree,
        },
        {
          path: 'orgfour',
          name: 'orgfour',
          component:Orgfour,
        },
        {
          path: 'orgfive',
          name: 'orgfive',
          component: Orgfive,
        },
        {
          path: 'orgsix',
          name: 'orgsix',
          component: Orgsix,
        },
        {
          path: 'orgseven',
          name: 'orgseven',
          component: Orgseven,
        },
        {
          path: 'orgeight',
          name: 'orgeight',
          component: Orgeight,
        },

      ]
    },
    {
      path: '/town',
      name: 'town',
      component: Town,
      redirect:'/town/townone',
      children:[
        {
          path: 'townone',
          name: 'townone',
          component: Townone,
        },
        {
          path: 'towntwo',
          name: 'towntwo',
          component: Towntwo,
        },


      ]
    },
    {
      path: '/frist',
      name: 'frist',
      component: Frist,
      redirect:'/frist/frione',
      children:[
        {
          path: 'frione',
          name: 'frione',
          component: Frione,
        },
        {
          path: 'fritwo',
          name: 'fritwo',
          component: Fritwo,
        },
        {
          path: 'frithree',
          name: 'frithree',
          component: Frithree,
        },
        {
          path: 'frifour',
          name: 'frifour',
          component:Frifour,
        },
        {
          path: 'frifive',
          name: 'frifive',
          component: Frifive,
        },
        {
          path: 'frisix',
          name: 'frisix',
          component: Frisix,
        },
      ]
    },
    {
      path: '/system',
      name: 'system',
      component: System,
      redirect:'/system/sysone',
      children:[
        {
          path: 'sysone',
          name: 'sysone',
          component: Sysone,
        },
        {
          path: 'systwo',
          name: 'systwo',
          component: Systwo,
        }
      ]
    },
    {
      path: '/center',
      name: 'center',
      component: Center,
      redirect:'/center/centwo',
      children:[
        {
          path: 'cenone',
          name: 'centone',
          component: Cenone,
        },
        {
          path: 'centwo',
          name: 'centtwo',
          component: Centwo,
        },
        {
          path: 'centhree',
          name: 'centhree',
          component: Centhree,
        },
        {
          path: 'cenfour',
          name: 'cenfour',
          component:Cenfour,
        },
        {
          path: 'cenfive',
          name: 'cenfive',
          component: Cenfive,
        },
      ]
    },
    {
      path: '/data',
      name: 'data',
      component: Data,
      redirect:'/data/dataone',
      children:[
        {
          path: 'dataone',
          name: 'dataone',
          component: Dataone,
        },
        {
          path: 'datatwo',
          name: 'datatwo',
          component: Datatwo,
        },
        {
          path: 'datathree',
          name: 'datathree',
          component: Datathree,
        },
      ]
    },
  ],

})


