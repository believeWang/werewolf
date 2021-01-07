import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SettingForm from "../component/SettingForm";
import GameRoom from "../component/GameRoom";
import Home from "./Home";
import React from "react";

export default function ModalSwitch() {

  return (
      <div>
        <Switch >
          <Route exact path="/" children={<Home />} />
          <Route path="/about" children={<SettingForm />} />
          <Route path="/about2" children={<GameRoom />} />
        </Switch>

      </div>
  );
}
