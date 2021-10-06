import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/";
import Detail from "./Views/Detail/";
import User from "./Views/User/";
import Cinema from "./Views/Cinema";
import CinemaMobile from "./Components/CinemaMobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./Store/actions/auth";
import PageNotFound from "./Views/PageNotFound";
import Layout from "./HOC/Layout";
import { AuthRoute } from "./HOC/Route";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme";
import Booking from "./Views/Booking";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser);
    }, [dispatch]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path="/cinema/:id" component={Cinema} />
                        <Route path="/cinema-mobile" component={CinemaMobile} />
                        <AuthRoute
                            path="/user/:id"
                            Component={User}
                            redirectPath="/"
                        />
                        <AuthRoute
                            path="/ticketroom/:id"
                            Component={Booking}
                            redirectPath="/"
                        />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
