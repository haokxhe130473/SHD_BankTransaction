import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { IAccountItemResponse } from "../../../../models/response/account/IAccountItemResponse";
import { ITransactionItemResponse } from "../../../../models/response/transaction/ITransactionItemResponse";
import { useState } from "react";
import { format } from "date-fns"; // Thư viện date-fns
import { IconButton } from "@mui/material"; // Import IconButton

interface TransactionModalProps {
  open: boolean;
  onClose: () => void;
  accountData: IAccountItemResponse[];
  selectedFromAccount: IAccountItemResponse | null;
  transactionData: ITransactionItemResponse[];
  loadingTransactions: boolean;
  onSubmit: (
    fromAccountId: number,
    toAccountId: number,
    amount: number,
    description: string
  ) => void;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Thay đổi từ 1000px sang 90%
  height: "90%",
  maxWidth: 1000, // Giới hạn chiều rộng tối đa
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  overflow: "auto", // Cho phép cuộn nếu nội dung quá dài
};

const TransactionModal: React.FC<TransactionModalProps> = ({
  open,
  onClose,
  accountData,
  selectedFromAccount,
  transactionData,
  loadingTransactions,
  onSubmit,
}) => {
  const [showAddTransactionForm, setShowAddTransactionForm] = useState(false);
  const [toAccountId, setToAccountId] = useState<number | "">("");
  const [amount, setAmount] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "info"
  >("info");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSaveTransaction = () => {
    // Kiểm tra số tiền có lớn hơn số dư hay không
    if (Number(amount) > (selectedFromAccount?.Balance || 0)) {
      setSnackbarMessage("Insufficient balance!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    } else if (amount === "" || Number(amount) === 0) {
      setSnackbarMessage("Invalid amount!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    if (Number(toAccountId) > 0) {
      onSubmit(
        Number(selectedFromAccount?.Id),
        Number(toAccountId),
        Number(amount),
        description
      );

      // Hiển thị thông báo thành công
      setSnackbarMessage("Transaction saved successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      // Đóng form giao dịch
      //setShowAddTransactionForm(false);
    } else {
      // Hiển thị thông báo thành công
      setSnackbarMessage("Please choose receive account!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        {/* Nút X để đóng modal */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          x
        </IconButton>
        <Typography variant="h3" gutterBottom>
          Transactions for {selectedFromAccount?.AccountName}
        </Typography>

        {/* Table hiển thị danh sách giao dịch */}
        <DataGrid
          rows={transactionData}
          columns={[
            {
              field: "TransactionDate",
              headerName: "Transaction Date",
              flex: 1, // Sử dụng flex để cột tự động co giãn
              minWidth: 200, // Chiều rộng tối thiểu
              valueFormatter: (value) => {
                if (!value) return "";
                try {
                  return format(new Date(value), "dd/MM/yyyy HH:mm:ss");
                } catch (error) {
                  console.error("Invalid date format:", value);
                  return "";
                }
              },
            },
            { field: "Amount", headerName: "Amount", flex: 1, minWidth: 100 },
            {
              field: "FromAccountName",
              headerName: "From Account",
              flex: 1,
              minWidth: 150,
            },
            {
              field: "ToAccountName",
              headerName: "To Account",
              flex: 1,
              minWidth: 150,
            },
            {
              field: "Description",
              headerName: "Description",
              flex: 2,
              minWidth: 300,
            },
          ]}
          loading={loadingTransactions}
          getRowId={(row) => row.Id}
          sx={{ height: 300, mb: 2, width: "100%" }} // Đặt chiều rộng là 100%
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
            <Typography variant="h3" sx={{ mt: 2, mb:2 }}>
              Add Transaction
            </Typography>
            <Stack spacing={2}>
              <TextField
                fullWidth
                select
                label="To Account"
                value={toAccountId}
                onChange={(e) => setToAccountId(Number(e.target.value))}
              >
                {accountData
                  .filter((acc) => acc.Id !== selectedFromAccount?.Id)
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
              />
              <TextField
                fullWidth
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            </Stack>
          </>
        )}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          sx={{
            position: "fixed", // Thay đổi từ absolute sang fixed
            left: "50%", // Căn giữa theo chiều ngang
            transform: "translateX(-50%)", // Dịch chuyển ngược lại 50%
            bottom: 20, // Đặt ở phía dưới
            zIndex: 1300,
          }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
};

export default TransactionModal;
