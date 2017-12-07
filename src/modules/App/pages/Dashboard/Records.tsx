import * as React from "react";
import { observer } from "mobx-react";

// MUI
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "material-ui/Table";
import { withStyles, WithStyles, Theme } from "material-ui/styles";

import Record from "../../../../interfaces/Record";
import InlineLoader from "../../../../common/InlineLoader";

interface Props {
  records: Record[];
  loading: boolean;
  onSelectRecord: (record: Record) => void;
}

class Records extends React.PureComponent<
  Props & WithStyles<"card" | "cardContent" | "header" | "title" | "row">
> {
  openRecord = (record: Record) => {
    this.props.onSelectRecord(record);
  };

  openRecordKeyPress = (record: Record) => {
    return (e: any) => {
      if (e.keyCode === 13) {
        this.openRecord(record);
      }
    };
  };

  render() {
    const { classes, records, loading } = this.props;

    return (
      <Card className={classes.card}>
        <div className={classes.header}>
          <Typography type="headline" className={classes.title}>
            My records
          </Typography>
        </div>
        <CardContent className={classes.cardContent}>
          {loading && <InlineLoader message="Loading your records..." />}

          {!loading && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project title</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.slice(0, 5).map((item: Record) => {
                  return (
                    <TableRow
                      key={item.id}
                      className={classes.row}
                      hover={true}
                      tabIndex={0}
                      onClick={this.openRecord.bind(this, item)}
                      onKeyDown={this.openRecordKeyPress.bind(this, item)}
                    >
                      <TableCell title={item.name}>{item.name}</TableCell>
                      <TableCell>{item.record_status_type.name}</TableCell>
                    </TableRow>
                  );
                })}
                {records.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4}>
                      You have no current records
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    );
  }
}

const styles = (theme: Theme) => ({
  card: {
    width: "100%"
  },
  cardContent: {
    padding: 0
  },
  header: {
    padding: "20px",
    backgroundColor: theme.palette.primary["500"]
  },
  title: {
    color: "#FFF"
  },
  row: {
    cursor: "pointer"
  }
});

const StyledRecords = withStyles(styles)(Records);
const ObservedRecords = observer(StyledRecords);

export default ObservedRecords;
