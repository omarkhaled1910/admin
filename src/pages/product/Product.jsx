import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { updateproduct } from '../../apiCalls'

export default function Product() {
    const { productId } = useParams()
    const product = useSelector(state => state.product.products.find(p => p._id === productId))
    console.log(product);
    const navigate = useNavigate()
    const [newproduct, setNewproduct] = React.useState({})
    const dispatch = useDispatch()

    const handleupdate = () => {

        console.log(newproduct);
        updateproduct(dispatch, productId, newproduct)
        navigate('/products', { replace: true })

    }
    if (product) {
        return (
            <div className="product">
                <div className="productTitleContainer">
                    <h1 className="productTitle">{product.name}</h1>
                    <Link to="/newproduct">
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
                            <span className="productName">Apple Airpods</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">id:</span>
                                <span className="productInfoValue">{product._id}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">sales:</span>
                                <span className="productInfoValue">5123</span>
                            </div>

                            <div className="productInfoItem">
                                <span className="productInfoKey">in stock:</span>
                                <span className="productInfoValue">{product.instock ? "yes" : "no"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">
                    <form className="productForm">
                        <div className="productFormLeft">
                            <label>Product Name</label>
                            <input type="text"
                                onChange={(e) => setNewproduct({ ...newproduct, name: e.target.value })}
                                placeholder="ex:Apple AirPod" />
                            <label>Product description</label>
                            <input type="text"
                                onChange={(e) => setNewproduct({ ...newproduct, desc: e.target.value })}
                                placeholder="ex:cool t-shirt" />
                            <label>Product price</label>
                            <input type="text"
                                onChange={(e) => setNewproduct({ ...newproduct, price: e.target.value })}
                                placeholder="ex:230 egp" />
                            <label>In Stock</label>
                            <select name="inStock" id="idStock"
                                onChange={(e) => setNewproduct({ ...newproduct, instock: e.target.value })}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>

                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src={product.img} alt="" />
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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <h1>there is no such project</h1>
            </div>
        )
    }

}
