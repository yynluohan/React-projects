import dva from 'dva';
import './index.css';
import setLayoutExtends from 'zero-element';
import BaseFormLayout from './common/layout/BaseFormLayout';

import ZEleA from 'zero-element-antd';

import { set as setEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { saveToken } from 'zero-element/lib/utils/request/token';

import { set as LASet } from 'zero-element-global/lib/listAction';
import { set as AITSet } from 'zero-element-global/lib/actionItemType';
import { set as LayoutSet } from 'zero-element-global/lib/layout';

import onPath from './listAction/onPath';
import path from './actionItemType/path';

setEndpoint(window.MC.HOST)

// saveToken({
//   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwiYWNjb3VudCI6ImFkbWluIiwiaWF0IjoxNTYxMTcyMzMyLCJqdGkiOiIxIiwic3ViIjoiYWRtaW4iLCJleHAiOjE1NjE0MzE1MzJ9.EwlEBQBhdzbJUTWNCjorE9ECK2WTbCejO4Q86W_ezUHoZu7cmjprRbZnYJhZTHH2_9GFphRNq1sdjBUmcqyaAQ',
// });

LASet({
  'onPath': onPath,
});

AITSet({
  path,
});

LayoutSet({
  'BaseFormLayout': BaseFormLayout,
})


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./framework/models/login').default);
app.model(require('./models/indexPage').default);
app.model(require('./models/apply').default);
app.model(require('./models/sys').default);
app.model(require('./models/owner').default);
app.model(require('./models/resource').default);
app.model(require('./models/contract').default);
app.model(require('./models/product').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
