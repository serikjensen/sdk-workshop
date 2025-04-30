import React from "react";
import {
  Typography,
  Box,
  Paper,
  Alert,
  Card,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const mockPayStatements = [
  {
    id: "PS001",
    period: "Jan 1 - Jan 15, 2023",
    gross: "$2,450.00",
    net: "$1,875.32",
    date: "01/16/2023",
  },
  {
    id: "PS002",
    period: "Jan 16 - Jan 31, 2023",
    gross: "$2,450.00",
    net: "$1,875.32",
    date: "02/01/2023",
  },
  {
    id: "PS003",
    period: "Feb 1 - Feb 15, 2023",
    gross: "$2,450.00",
    net: "$1,875.32",
    date: "02/16/2023",
  },
  {
    id: "PS004",
    period: "Feb 16 - Feb 28, 2023",
    gross: "$2,450.00",
    net: "$1,875.32",
    date: "03/01/2023",
  },
];

const PayStatementsDemo: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Pay Statements Component
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Display employee pay statements with detailed information and
        downloadable PDFs.
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        This component will be added soon. For now, this is a placeholder
        showing the planned functionality.
      </Alert>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Available Pay Statements
        </Typography>

        <Card variant="outlined">
          <List sx={{ width: "100%" }}>
            {mockPayStatements.map((statement, index) => (
              <React.Fragment key={statement.id}>
                {index > 0 && <Divider />}
                <ListItem>
                  <ListItemText
                    primary={`Pay Period: ${statement.period}`}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Gross: {statement.gross} • Net: {statement.net}
                        </Typography>
                        {` — Paid on ${statement.date}`}
                      </>
                    }
                  />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Card>
      </Paper>
    </Box>
  );
};

export default PayStatementsDemo;
