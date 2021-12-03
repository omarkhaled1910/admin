import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { updateevent } from '../../apiCalls2'

export default function Event() {

    const { eventId } = useParams()
    const navigate = useNavigate()
    const event = useSelector(state => state.event.events.find(p => p._id === eventId))
    const [newevent, setNewevent] = React.useState({})
    const dispatch = useDispatch()

    const handleupdate = () => {

        console.log(newevent);
        updateevent(dispatch, eventId, newevent)
        navigate('/events', { replace: true })

    }
    if (event) {
        return (
            <div className="product">
                <div className="productTitleContainer">
                    <h1 className="productTitle">{event.name}</h1>
                    <Link to="/newevent">
                        <button className="productAddButton">Create</button>
                    </Link>
                </div>
                <div className="productTop">
                    <div className="productTopLeft">
                        <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                    </div>
                    <div className="productTopRight">
                        <div className="productInfoTop">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                            <span className="productName">{event.name}</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">id:</span>
                                <span className="productInfoValue">{event._id}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">time :</span>
                                <span className="productInfoValue">{event.time}</span>
                            </div>

                            <div className="productInfoItem">
                                <span className="productInfoKey">particpants :</span>
                                <span className="productInfoValue">{event.maxpart}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">
                    <form className="productForm">
                        <div className="productFormLeft">
                            <label>Event Name</label>
                            <input type="text"
                                onChange={(e) => setNewevent({ ...newevent, name: e.target.value })}
                                placeholder="ex:ILLUSTRATION" />
                            <label>Event description</label>
                            <input type="text"
                                onChange={(e) => setNewevent({ ...newevent, desc: e.target.value })}
                                placeholder="ex:COOL EVENT" />
                            <label>Event price</label>
                            <input type="text"
                                onChange={(e) => setNewevent({ ...newevent, price: e.target.value })}
                                placeholder=" ex:230" />
                            <label>Event max particpants</label>
                            <input type="number"
                                onChange={(e) => setNewevent({ ...newevent, maxpart: e.target.value })}
                                placeholder="ex:22" />
                            <label>Event time</label>
                            <input type="text"
                                onChange={(e) => setNewevent({ ...newevent, time: e.target.value })}
                                placeholder="ex:17/22/2020" />
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src={event.img} alt="" />
                                <label for="file">
                                    <Publish />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button type="submit" onClick={handleupdate} className="productButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    } else {
        return (


            <h1>there is no such project</h1>

        )
    }

}
