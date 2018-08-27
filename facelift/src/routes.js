import Dashboards from './pages/dashbords'
import discover from './pages/discover'
import workspace from './pages/workspace'
import AppView from './pages/AppView'
import PageNotFound from './pages/pagenotfound'
import SemanticTab from './pages/semantictab'


const routes = [
  {
    path: '/',
    name: 'discover',
    component: discover,
    exact: true
  },
  {
    path: '/workspace',
    name: 'my workspace',
    component: workspace,
    exact: false
  },
  {
    path: '/Dashboards',
    name: 'business Dashboards',
    component: Dashboards,
    exact: false
  },
  {
    path: '/AppView',
    name: 'AppView',
    component: AppView,
    exact: false
  },
  {
    path: '/SemanticTab',
    name: 'SemanticTab',
    component: SemanticTab,
    exact: false
  }
]

export default routes