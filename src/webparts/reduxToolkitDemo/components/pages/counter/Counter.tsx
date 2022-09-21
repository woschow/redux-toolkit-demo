import * as React from "react";
import * as strings from "ReduxToolkitDemoWebPartStrings";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../store/slice/counterSlice'
import {useAppSelector} from "../../../hooks/redux";

const Counter = () => {

    const {value} = useAppSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    return(
        <div className="container mt-3">
            <h3>{strings.ReduxBasics}</h3>
            <div className="w-100">
                <button className="btn btn-success mx-3"
                    onClick={() => dispatch(increment())}
                >
                    {strings.BtnIncrementTitle}
                </button>
                <span>{value}</span>
                <button className="btn btn-danger mx-3"
                    onClick={() => dispatch(decrement())}
                >
                    {strings.BtnDecrementTitle}
                </button>
            </div>
        </div>
    );
}

export default Counter
