import Home from "./home/Home";
import Question from "./question/Question";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/"
                        component={Home}
                        isAuth={true}
                        redirectionPage="/"
                    />
                    <ProtectedRoute
                        exact
                        path="/question"
                        component={Question}
                        isAuth={true}
                        redirectionPage="/"
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;
