"use strict";
var router_1 = require('@angular/router');
var qstart_component_1 = require('./components/qStart/qstart.component');
var notify_component_1 = require('./components/notify/notify.component');
exports.router = [
    { path: '', redirectTo: 'notify', pathMatch: 'full' },
    { path: 'notify', component: notify_component_1.notifyComponent },
    { path: 'qstart', component: qstart_component_1.qstartComponent },
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map