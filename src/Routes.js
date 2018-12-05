import React from "react" ;
import { Route, Switch } from "react-router-dom" ;
import Login from "./Components/Login" ;

export default () =>
    <Switch>
        <Route path ="/" exact component={Login} />
        <Route path="/logout" component={Login} />
        <Route path ="/manageServices" component={ManageService} />
        <Route path ="/vehicles/addNew" component={AddVehicleWizard} />

        <Route path="/mechanics" component={Mechanics} />
    </Switch>;