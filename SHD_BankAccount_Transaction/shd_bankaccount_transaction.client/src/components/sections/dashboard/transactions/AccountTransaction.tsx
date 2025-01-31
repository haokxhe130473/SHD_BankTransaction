import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/reducers/rootReducer";
import { rootAction } from "../../../../states/actions/rootAction";
import { IAccountItemResponse } from "../../../../models/response/account/IAccountItemResponse";
import { ITransactionItemResponse } from "../../../../models/response/transaction/ITransactionItemResponse";
import TransactionModal from "./TransactionModal"; // Import mới
import CustomPagination from "../invoice/CustomPagination";
import NoData from "../invoice/NoData";
import { currencyFormat } from "../../../../helper/utils";
import { eReducerBaseStatus } from "../../../../states/reducer-state-models/base/eReducerBaseStatus";

const AccountTransaction: React.FC = () => {
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

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });

  const dispatch = useDispatch();
  const accountState = useSelector((state: RootState) => state.account);
  const accountData: IAccountItemResponse[] = accountState.accountData || [];
  const transactionState = useSelector((state: RootState) => state.transaction);
  const transactionData: ITransactionItemResponse[] =
    transactionState.transactionData || [];
  const [selectedFromAccount, setSelectedFromAccount] =
    useState<IAccountItemResponse | null>(null);

  useEffect(() => {
    dispatch(rootAction.account.getAccountStart());
    if (
      transactionState.insertUpdateStatus === eReducerBaseStatus.is_completed
    ) {
      dispatch(
        rootAction.transaction.getByAccountIdStart(selectedFromAccount?.Id ?? 0)
      );
    }
  }, [dispatch, transactionState.insertUpdateStatus]);

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
  };

  const fetchTransactions = async (accountId: number) => {
    dispatch(rootAction.transaction.getByAccountIdStart(accountId));
  };

  const handleOpenModal = (account: IAccountItemResponse) => {
    setSelectedFromAccount(account);
    fetchTransactions(account.Id);
  };

  const handleCloseModal = () => {
    setSelectedFromAccount(null);
  };
  const handleSaveTransaction = (
    fromAccountId: number,
    toAccountId: number,
    amount: number,
    description: string
  ) => {
    // Gửi dữ liệu vào backend
    dispatch(
      rootAction.transaction.createTransactionStart({
        Amount: amount,
        ToAccountId: toAccountId,
        Id: 0,
        FromAccountId: fromAccountId,
        TransactionDate: new Date().toISOString(),
        Description: description,
        CreatedTime: new Date().toISOString(),
      })
    );
  };

  return (
    <Stack
      sx={{
        overflow: "auto", // Cho phép cuộn
        height: "100%", // Chiếm toàn bộ chiều cao
        justifyContent: "space-between",
      }}
    >
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
              `inset 0px -1px ${theme.palette.neutral.light}`,
          },
        }}
      >
        <DataGrid
          rows={accountData.slice(
            paginationModel.page * paginationModel.pageSize,
            (paginationModel.page + 1) * paginationModel.pageSize
          )}
          rowCount={accountData.length}
          columns={columns}
          getRowId={(row) => row.Id}
          disableRowSelectionOnClick
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={handlePaginationModelChange}
          slots={{
            noRowsOverlay: () => <NoData />,
            pagination: () => null,
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
            width: "100%", // Đặt chiều rộng là 100%
          }}
        />
      </Card>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "center", // Căn giữa phân trang
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

      {/* Modal giao dịch */}
      <TransactionModal
        open={selectedFromAccount !== null}
        onClose={handleCloseModal}
        accountData={accountData}
        selectedFromAccount={selectedFromAccount}
        transactionData={transactionData}
        loadingTransactions={
          transactionState.status != eReducerBaseStatus.is_completed
        }
        onSubmit={handleSaveTransaction}
      />
    </Stack>
  );
};

export default AccountTransaction;
