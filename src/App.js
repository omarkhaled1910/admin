import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import EventList from "./pages/eventList/EventList";
import Event from "./pages/event/Event";
import NewEvent from "./pages/newEvent/NewEvent";
import WorkshopList from "./pages/workshopList/WorkshopList";
import Workshop from "./pages/workshop/Workshop";
import NewWorkshop from "./pages/newWorkshop/NewWorkshop";


function App() {
  const { currentuser } = useSelector(state => state.user)
  if (!currentuser?.isAdmin) {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </>
    )
  } else {
    return (

      <>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />}>

            </Route>
            <Route path="/users" element={<UserList />}>

            </Route>
            <Route path="/user/:userId" element={<User />}>

            </Route>
            <Route path="/newUser" element={<NewUser />}>

            </Route>
            <Route path="/products" element={<ProductList />}>

            </Route>
            <Route path="/product/:productId" element={<Product />}>

            </Route>
            <Route path="/newproduct" element={<NewProduct />}>

            </Route>
            <Route path="/events" element={<EventList />}>

            </Route>
            <Route path="/event/:eventId" element={<Event />}>

            </Route>
            <Route path="/newevent" element={<NewEvent />}>

            </Route>
            <Route path="/workshops" element={<WorkshopList />}>

            </Route>
            <Route path="/workshop/:wrokshopId" element={<Workshop />}>

            </Route>
            <Route path="/newworkshop" element={<NewWorkshop />}>

            </Route>



          </Routes>
        </div>
      </>
    );
  }

}

export default App;
