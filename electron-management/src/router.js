import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import MainLayout from './framework/mainLayout/MainLayout';
import loadable from './framework/utils/loadable';

// import IndexPage from './routes/IndexPage';
// import Login from './framework/routes/Login';
// import Register from './framework/routes/Register';
// import ResetPassword from './framework/routes/ResetPassword';
// import Apply from './framework/routes/Apply';
// import ApplyResult from './framework/routes/ApplyResult';


// import SubSys from './routes/apply/SubSys';
// import ModuleHodle from './routes/apply/ModuleHodle';
// import Agent from './routes/apply/Agent';
// import SubSysView from './routes/apply/SubSysView';
// import AgentView from './routes/apply/AgentView';
// import ModuleHodleView from './routes/apply/ModuleHodleView';

// import Staff from './routes/sys/Staff';
// import User from './routes/sys/User';
// import Role from './routes/sys/Role';
// import RoleEdit from './routes/sys/RoleEdit';
// import RoleAdd from './routes/sys/RoleAdd';

// import AgentList from './routes/agent/AgentList';
// import SubSysList from './routes/agent/SubSysList';
// import ModuleHoderList from './routes/agent/ModuleHoderList';
// import TenantList from './routes/agent/TenantList';
// import AgentDeatil from './routes/agent/AgentDeatil';
// import ModuleDetail from './routes/agent/ModuleDetail';
// import SubSysDetail from './routes/agent/SubSysDetail';
// import TenantDetail from './routes/agent/TenantDetail';

// import SubSysManage from './routes/resource/SubSysManage';
// import SubMouleManage from './routes/resource/SubMouleManage';
// import SubSysManageView from './routes/resource/SubSysManageView';
// import SubSysManageAdd from './routes/resource/SubSysManageAdd';
// import SubsysManageEdit from './routes/resource/SubsysManageEdit';
// import SubMoudleManageAdd from './routes/resource/SubMoudleManageAdd';
// import SubMoudleManageEdit from './routes/resource/SubMoudleManageEdit';
// import SubMoudleManageView from './routes/resource/SubMoudleManageView';

// import ContracType from './routes/contract/ContracType';
// import ContracTypeView from './routes/contract/ContracTypeView';
// import ContractProduct from './routes/contract/ContractProduct';
// import ContractProductAdd from './routes/contract/ContractProductAdd';
// import ContractProductEdit from './routes/contract/ContractProductEdit';
// import ContractProductView from './routes/contract/ContractProductView';
// import ContractList from './routes/contract/ContractList';
// import ContractAdd from './routes/contract/ContractAdd';
// import ContractEdit from './routes/contract/ContractEdit';
// import ContractView from './routes/contract/ContractView';

// import ProductType from './routes/product/ProductType';
// import ProductTypeView from './routes/product/ProductTypeView';
// import Product from './routes/product/Product';
// import Tag from './routes/product/Tag';


const IndexPage = loadable(() => import('./routes/IndexPage'));
const Login = loadable(() => import('./framework/routes/Login'));
const Register = loadable(() => import('./framework/routes/Register'));
const ResetPassword = loadable(() => import('./framework/routes/ResetPassword'));
const Apply = loadable(() => import('./framework/routes/Apply'));
const ApplyResult = loadable(() => import('./framework/routes/ApplyResult'));

const SubSys = loadable(() => import('./routes/apply/SubSys'));
const ModuleHodle = loadable(() => import('./routes/apply/ModuleHodle'))
const Agent = loadable(() => import('./routes/apply/Agent'))
const SubSysView = loadable(() => import('./routes/apply/SubSysView'))
const AgentView = loadable(() => import('./routes/apply/AgentView'))
const ModuleHodleView = loadable(() => import('./routes/apply/ModuleHodleView'))


const Staff = loadable(() => import('./routes/sys/Staff'));
const User = loadable(() => import('./routes/sys/User'));
const Role = loadable(() => import('./routes/sys/Role'));
const RoleEdit = loadable(() => import('./routes/sys/RoleEdit'));
const RoleAdd = loadable(() => import('./routes/sys/RoleAdd'));
const Menu = loadable(() => import('./routes/sys/Menu'));


const AgentList = loadable(() => import('./routes/agent/AgentList'));
const SubSysList = loadable(() => import('./routes/agent/SubSysList'));
const ModuleHoderList = loadable(() => import('./routes/agent/ModuleHoderList'));
const TenantList = loadable(() => import('./routes/agent/TenantList'));
const AgentDeatil = loadable(() => import('./routes/agent/AgentDeatil'));
const ModuleDetail = loadable(() => import('./routes/agent/ModuleDetail'));
const SubSysDetail = loadable(() => import('./routes/agent/SubSysDetail'));
const TenantDetail = loadable(() => import('./routes/agent/TenantDetail'));


const SubSysManage = loadable(() => import('./routes/resource/SubSysManage'));
const SubMouleManage = loadable(() => import('./routes/resource/SubMouleManage'));
const SubSysManageView = loadable(() => import('./routes/resource/SubSysManageView'));
const SubSysManageAdd = loadable(() => import('./routes/resource/SubSysManageAdd'));
const SubsysManageEdit = loadable(() => import('./routes/resource/SubsysManageEdit'));
const SubMoudleManageAdd = loadable(() => import('./routes/resource/SubMoudleManageAdd'));
const SubMoudleManageEdit = loadable(() => import('./routes/resource/SubMoudleManageEdit'));
const SubMoudleManageView = loadable(() => import('./routes/resource/SubMoudleManageView'));


const ContracType = loadable(() => import('./routes/contract/ContracType'));
const ContracTypeView = loadable(() => import('./routes/contract/ContracTypeView'));
const ContractProduct = loadable(() => import('./routes/contract/ContractProduct'));
const ContractProductAdd = loadable(() => import('./routes/contract/ContractProductAdd'));
const ContractProductEdit = loadable(() => import('./routes/contract/ContractProductEdit'));
const ContractProductView = loadable(() => import('./routes/contract/ContractProductView'));
const ContractList = loadable(() => import('./routes/contract/ContractList'));
const ContractAdd = loadable(() => import('./routes/contract/ContractAdd'));
const ContractEdit = loadable(() => import('./routes/contract/ContractEdit'));
const ContractView = loadable(() => import('./routes/contract/ContractView'));


const ProductType = loadable(() => import('./routes/product/ProductType'));
const ProductTypeView = loadable(() => import('./routes/product/ProductTypeView'));
const Product = loadable(() => import('./routes/product/Product'));
const Tag = loadable(() => import('./routes/product/Tag'));



function RouterConfig({ history }) {

  return (
    <Router history={history}>
      {
        !window.localStorage.token ?
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/resetPassword' component={ResetPassword}/>
          <Route path='/apply' component={Apply}/>
          <Route path = '/apply-result' component={ApplyResult} />
        </Switch>
        :
        <MainLayout>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path='/subSys-apply' component={SubSys}/>
            <Route path='/moduleHolder-apply' component={ModuleHodle}/>
            <Route path='/agent-apply' component={Agent}/>
            <Route path='/subSysApply-view' component={SubSysView}/>
            <Route path='/agent-view' component={AgentView}/>
            <Route path='/moduleHoder-view' component={ModuleHodleView}/>

            <Route path='/agent' component={AgentList}/>
            <Route path='/subSys' component={SubSysList}/>
            <Route path='/moduleHoder' component={ModuleHoderList}/>
            <Route path='/tenant' component={TenantList}/>
            <Route path='/agent-detail' component={AgentDeatil}/>
            <Route path='/module-detail' component={ModuleDetail}/>
            <Route path='/subsys-detail' component={SubSysDetail}/>
            <Route path='/tenant-detail' component={TenantDetail}/>

            <Route path='/staff' component={Staff}/>
            <Route path='/user' component={User}/>
            <Route path='/role' component={Role}/>
            <Route path='/role-edit' component={RoleEdit}/>
            <Route path='/role-add' component={RoleAdd}/>
            <Route path='/menu' component={Menu}/>

            <Route path='/subsysManage' component={SubSysManage}/>
            <Route path='/submoduleManage' component={SubMouleManage}/>
            <Route path='/subsysManage-view' component={SubSysManageView}/>
            <Route path='/subsysManage-add' component={SubSysManageAdd}/>
            <Route path='/subsysManage-edit' component={SubsysManageEdit}/>
            <Route path='/submoduleManage-add' component={SubMoudleManageAdd}/>
            <Route path='/submoduleManage-edit' component={SubMoudleManageEdit}/>
            <Route path='/submoduleManage-view' component={SubMoudleManageView}/>

            <Route path='/contract-type' component={ContracType}/>
            <Route path='/contract-typeView' component={ContracTypeView}/>
            <Route path='/contract-product' component={ContractProduct}/>
            <Route path='/contract-productAdd' component={ContractProductAdd}/>
            <Route path='/contract-productEdit' component={ContractProductEdit}/>
            <Route path='/contract-productView' component={ContractProductView}/>
            <Route path='/contract-list' component={ContractList}/>
            <Route path='/contract-listAdd' component={ContractAdd}/>
            <Route path='/contract-listEdit' component={ContractEdit}/>
            <Route path='/contract-listView' component={ContractView}/>

            <Route path='/product-type' component={ProductType}/>
            <Route path='/product-typeView' component={ProductTypeView}/>
            <Route path='/product' component={Product}/>
            <Route path='/tag' component={Tag}/>
          </Switch>
        </MainLayout>
      }
    </Router>
  );
}

export default RouterConfig;
