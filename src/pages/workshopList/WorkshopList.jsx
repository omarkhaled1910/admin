import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getworkshops, deleteworkshop } from "../../apiCalls2";

export default function WorkshopList() {

  const workshops = useSelector(state => state.workshop.workshops)

  const dispatch = useDispatch()

  const handleDelete = (id) => {

    deleteworkshop(dispatch, id)
  };

  useEffect(() => {

    getworkshops(dispatch)

  }, [dispatch])



  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "WorkShops",
      headerName: "WorkShops",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img[0]} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "instock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/workshop/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={workshops}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
