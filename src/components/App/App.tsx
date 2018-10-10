import * as React from "react";
import * as ReactModal from "react-modal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddressList from "../AddressList/AddressList";
import Header from "../Header/Header";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import "./App.css";

class App extends React.Component {
    private appRef: React.RefObject<any>;
    public constructor(props: any) {
        super(props);
        this.appRef = React.createRef();
    }
    public componentDidMount() {
        ReactModal.setAppElement(this.appRef.current);
    }
    public render() {
        return (
            <Router>
                <div id="app" className="app" ref={this.appRef}>
                    <Header />
                    <div className="content-container">
                        <Switch>
                            <Route path="/login" component={Login} />
                            <PrivateRoute
                                exact={true}
                                path="/"
                                component={AddressList}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;