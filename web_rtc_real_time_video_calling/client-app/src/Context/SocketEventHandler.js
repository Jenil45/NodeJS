import { createContext, useCallback, useContext, useMemo } from "react";
import {io} from 'socket.io-client';

const SocketEventContext = createContext(null);

export const useSocketEvent = () => {
    const socket = useContext(SocketEventContext);

    return socket;
}

export const SocketEventProvider = (props) => {

    //  make a connection - for only one initialiaztion we use useMemo
    // const socket = io("localhost:5500");
    const socket = useMemo(() => io("localhost:5500") , []);

    return (
        <SocketEventContext.Provider value={socket}>
            {props.children}
        </SocketEventContext.Provider>
    )
}