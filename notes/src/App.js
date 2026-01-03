import logo from './logo.svg';
import './App.css';
import Web from './Component/Web';
import Mounting from './Component/Mounting';
import Updatemount from './Component/Updatemount';
import Parentcomp from './Component/Parentcomp';
import RefDemo from './Component/RefDemo';
import ButtonDemo from './Component/ButtonDemo';
import FRbutton from './Component/FRbutton';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ParentCounter from './ParentCounter';
import { ContextProvider } from './ContextDemo';
import ComponetA from './ComponetA';
import PostData from './PostData';
import Hook1 from './Hook1';
import Hook2 from './Hook2';
import Hook3 from './Hook3';
import HookClass from './HookClass';
import HookClass2 from './HookClass2';
import HookMouse from './HookMouse';
import Hook6 from './Hook6';
import React from 'react';
import Contextcopm1 from './Contextcopm1';
import Counter1 from './Counter1';
import DataFetch from './DataFetch';
import ParentuseCallback from './ParentuseCallback';
import Usermemo from './Usermemo';
import UserefDemo from './UserefDemo';
import HookTimer from './HookTimer';
import CreateHook from './Component/CreateHook';
import CustomHook from './Component/CustomHook';

export const UserContext = React.createContext();
export const PSKContext = React.createContext();
function App() {
  return (
    <div className="App">



      {/* <Web /> */}
      {/* <Mounting /> */}
      {/* <Updatemount /> */}
      {/* <Parentcomp /> */}
      {/* <RefDemo /> */}
      {/* <ButtonDemo /> */}
      {/* <FRbutton /> */}
      {/* < ParentCounter render={(count, clickhere)=><ClickCounter count={count} clickhere={clickhere}/>}  />
      < ParentCounter render={(count, clickhere)=><HoverCounter count={count} clickhere={clickhere}/>}  /> */}

      {/* <ContextProvider value={"Diapk"}>
        <ComponetA/>
        </ContextProvider> */}
      {/* <PostData/> */}


      {/* <Hook1/> */}
      {/* <Hook2/> */}
      {/* <Hook3/> */}
      {/* <HookClass/> */}
      {/* <HookClass2/> */}
      {/* <HookMouse/> */}
      {/* < Hook6 /> */}



      {/* <UserContext.Provider value={'DIPAK'}>
        <PSKContext.Provider value={"psk"}>
          <Contextcopm1 />
        </PSKContext.Provider>
      </UserContext.Provider> */}
      

      {/* <Counter1/> */}
      {/* <DataFetch/> */}
      {/* <ParentuseCallback /> */}
      {/* <Usermemo /> */}
      {/* <UserefDemo/> */}
      {/* <HookTimer/> */}
      <CustomHook />


    </div>
  );
}

export default App;
