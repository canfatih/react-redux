import { createStore } from "redux";
import reducers from "./index";

export default function configurestore(){
    return createStore(reducers)
}