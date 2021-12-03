import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getevents, deleteevent } from "../../apiCalls2";

export default function EventList() {

  const events = useSelector(state => state.event.events)
  const dispatch = useDispatch()

  const handleDelete = (id) => {

    deleteevent(dispatch, id)
  };

  useEffect(() => {

    getevents(dispatch)

  }, [dispatch])



  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Events",
      width: 200,
      renderCell: (params) => {
        // console.log(params.row.img[0]);
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
            <Link to={"/event/" + params.row._id}>
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
        rows={events}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
