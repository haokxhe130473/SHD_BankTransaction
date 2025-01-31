import {
  Box,
  Button,
  Card,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import CustomPagination from "../../../../components/sections/dashboard/invoice/CustomPagination";
import NoData from "../../../../components/sections/dashboard/invoice/NoData";
import { currencyFormat } from "../../../../helper/utils";
import { useBreakpoints } from "../../../../providers/useBreakpoints";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/reducers/rootReducer";
import { rootAction } from "../../../../states/actions/rootAction";
import { eReducerBaseStatus } from "../../../../states/reducer-state-models/base/eReducerBaseStatus";
import { IAccountItemResponse } from "../../../../models/response/account/IAccountItemResponse";
import { ITransactionItemResponse } from "../../../../models/response/transaction/ITransactionItemResponse";
// Style cho modal
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};
const InvoiceOverviewTable: React.FC = () => {
  const columns: GridColDef[] = [
    {
      field: "AccountName",
      headerName: "Account Name",
      width: 230,
      hideable: false,
    },
    {
      field: "Balance",
      headerName: "Balance",
      minWidth: 130,
      flex: 1,
      hideable: false,
      renderCell: (params) => (
        <Typography>{currencyFormat(params.value)}</Typography>
      ),
    },
    {
      field: "TotalSent",
      headerName: "Total Sent",
      minWidth: 130,
      flex: 1,
      hideable: false,
      renderCell: (params) => (
        <Typography color="error.main">
          - {currencyFormat(params.value)}
        </Typography>
      ),
    },
    {
      field: "TotalReceived",
      headerName: "Total Received",
      minWidth: 130,
      flex: 1,
      hideable: false,
      renderCell: (params) => (
        <Typography color="success.main">
          + {currencyFormat(params.value)}
        </Typography>
      ),
    },
    {
      field: "showTransaction",
      headerName: "Transaction history",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal(params.row)}
        >
          View Transactions
        </Button>
      ),
    },
  ];
  const transactionColumns: GridColDef[] = [
    { field: "TransactionDate", headerName: "Transaction Date", width: 340 },
    { field: "Amount", headerName: "Amount", width: 140 },
    { field: "FromAccountName", headerName: "From Account", width: 140 },
    { field: "ToAccountName", headerName: "To Account", width: 140 },
    { field: "Description", headerName: "Description", width: 400 },
  ];
  let rowHeight = 60;
  const { down } = useBreakpoints();
  const dispatch = useDispatch();
  const accountState = useSelector((state: RootState) => state.account);
  const accountData: IAccountItemResponse[] = accountState.accountData || [];
  useEffect(() => {
    dispatch(rootAction.account.getAccountStart());
  }, [dispatch]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });
  const isXs = down("sm");
  if (isXs) {
    rowHeight = 55;
  } else {
    rowHeight = 64;
  }

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
  };
  /*-------------------------------------------------------------------------*/
  const [openModal, setOpenModal] = useState(false);
  const [selectedFromAccount, setSelectedFromAccount] =
    useState<IAccountItemResponse | null>(null);
  // const [transactions, setTransactions] = useState<any[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [showAddTransactionForm, setShowAddTransactionForm] = useState(false);
  const [toAccountId, setToAccountId] = useState<number | "">("");
  const [amount, setAmount] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");
  /*-------------------------------------------------------------------------*/
  const transactionState = useSelector((state: RootState) => state.transaction);
  const transactionData: ITransactionItemResponse[] = transactionState.transactionData || [];

  const fetchTransactions = async (accountId: number) => {
    setLoadingTransactions(true);
    dispatch(rootAction.transaction.getByAccountIdStart(accountId));
    // try {
    //   const response = await fetch(`https://localhost:44398/api/Transactions/${accountId}`);
    //   const data = await response.json();
    //   setTransactions(data);
    // } catch (error) {
    //   console.error("Error fetching transactions", error);
    // }
    setLoadingTransactions(false);
  };
  const handleOpenModal = (account: IAccountItemResponse) => {
    setSelectedFromAccount(account);
    fetchTransactions(account.Id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setShowAddTransactionForm(false);
  };
  const handleSaveTransaction = async () => {

  };
  return (
    <Stack sx={{ overflow: "auto", justifyContent: "space-between" }}>
      <Card
        sx={{
          flexGrow: { md: 1 },
          display: { md: "flex" },
          flexDirection: { md: "column" },
          overflow: "hidden",
          borderRadius: 6.5,
          "&.MuiPaper-root": {
            p: 1,
            border: 1,
            borderColor: "neutral.light",
            bgcolor: { xs: "transparent", sm: "white" },
            boxShadow: (theme) =>
              `inset 0px -1px ${theme.palette.neutral.light}`, // color for row border
          },
        }}
      >
        <DataGrid
          rowHeight={rowHeight}
          rows={accountData.slice(
            paginationModel.page * paginationModel.pageSize,
            (paginationModel.page + 1) * paginationModel.pageSize
          )}
          rowCount={accountData.length}
          columns={columns}
          getRowId={(row) => row.Id} // Chỉ định `Id` làm `id`
          disableRowSelectionOnClick
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={handlePaginationModelChange}
          slots={{
            noRowsOverlay: () => <NoData />,
            pagination: () => null, // Hide the default pagination component
          }}
          sx={{
            px: { xs: 0, md: 3 },
            "& .MuiDataGrid-main": {
              minHeight: 300,
            },
            "& .MuiDataGrid-virtualScroller": {
              minHeight: 300,
              p: 0,
            },
            "& .MuiDataGrid-columnHeader": {
              fontSize: { xs: 13, lg: 16 },
            },
            "& .MuiDataGrid-cell": {
              fontSize: { xs: 13, lg: 16 },
            },
            "& .MuiTypography-root": {
              fontSize: { xs: 13, lg: 16 },
            },
          }}
        />
      </Card>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <CustomPagination
          page={paginationModel.page + 1}
          pageCount={Math.ceil(accountData.length / paginationModel.pageSize)}
          onPageChange={(event, value) =>
            setPaginationModel((prev) => ({ ...prev, page: value - 1 }))
          }
        />
      </Box>
      {/* Modal Xem & Thêm Giao Dịch */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>
            Transactions for {selectedFromAccount?.AccountName}
          </Typography>

          {/* Table hiển thị danh sách giao dịch */}
          <DataGrid
            rows={transactionData}
            columns={transactionColumns}
            loading={loadingTransactions}
            getRowId={(row) => row.Id} // Đảm bảo mỗi dòng có id
            sx={{ height: 300, mb: 2 }}
          />

          {/* Nút mở form thêm giao dịch */}
          {!showAddTransactionForm && (
            <Button
              variant="contained"
              color="inherit"
              onClick={() => setShowAddTransactionForm(true)}
            >
              Add New Transaction
            </Button>
          )}

          {/* Form thêm giao dịch */}
          {showAddTransactionForm && (
            <>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Add Transaction
              </Typography>
              <TextField
                fullWidth
                select
                label="To Account"
                value={toAccountId}
                onChange={(e) => setToAccountId(Number(e.target.value))}
                sx={{ mb: 2 }}
              >
                {accountData
                  .filter((acc) => acc.Id !== selectedFromAccount?.Id) // Không chọn chính mình
                  .map((acc) => (
                    <MenuItem key={acc.Id} value={acc.Id}>
                      {acc.AccountName}
                    </MenuItem>
                  ))}
              </TextField>
              <TextField
                fullWidth
                type="number"
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Stack direction="row" justifyContent="flex-end" spacing={2}>
                <Button
                  variant="outlined"
                  onClick={() => setShowAddTransactionForm(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSaveTransaction}
                >
                  Save
                </Button>
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </Stack>
  );
};

export default InvoiceOverviewTable;
