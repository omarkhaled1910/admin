import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { updateevent } from '../../apiCalls2'

export default function Workshop() {

    const { workshoptId } = useParams()
    const navigate = useNavigate()
    const workshop = useSelector(state => state.workshop.workshops.find(p => p._id === workshoptId))
    const [newworkshop, setNewworkshop] = React.useState({})
    const dispatch = useDispatch()

    const handleupdate = () => {

        console.log(newworkshop);
        updateevent(dispatch, workshoptId, newworkshop)
        navigate('/workshops', { replace: true })

    }
    if (workshop) {
        return (
            <div className="product">
                <div className="productTitleContainer">
                    <h1 className="productTitle">{workshop.name}</h1>
                    <Link to="/newworkshop">
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
                            <span className="productName">{workshop.name}</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">id:</span>
                                <span className="productInfoValue">{workshop._id}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">time :</span>
                                <span className="productInfoValue">{workshop.time}</span>
                            </div>

                            <div className="productInfoItem">
                                <span className="productInfoKey">particpants :</span>
                                <span className="productInfoValue">{workshop.maxpart}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">
                    <form className="productForm">
                        <div className="productFormLeft">
                            <label>Event Name</label>
                            <input type="text"
                                onChange={(e) => setNewworkshop({ ...newworkshop, name: e.target.value })}
                                placeholder="ex:ILLUSTRATION" />
                            <label>Event description</label>
                            <input type="text"
                                onChange={(e) => setNewworkshop({ ...newworkshop, desc: e.target.value })}
                                placeholder="ex:COOL EVENT" />
                            <label>Event price</label>
                            <input type="text"
                                onChange={(e) => setNewworkshop({ ...newworkshop, price: e.target.value })}
                                placeholder=" ex:230" />
                            <label>Event max particpants</label>
                            <input type="number"
                                onChange={(e) => setNewworkshop({ ...newworkshop, maxpart: e.target.value })}
                                placeholder="ex:22" />
                            <label>Event time</label>
                            <input type="text"
                                onChange={(e) => setNewworkshop({ ...newworkshop, time: e.target.value })}
                                placeholder="ex:17/22/2020" />
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src={workshop.img} alt="" />
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
