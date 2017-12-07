import * as React from "react";
import { inject, observer } from "mobx-react";

// MUI
import { withStyles, WithStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

// Local
import { layoutHelpers } from "../../../../config/muiTheme";
import Records from "./Records";

// Stores
import { CommonStoreInterface } from "../../../../stores/CommonStore";
import { RecordStoreInterface } from "../../stores/RecordStore";

interface Props {
  commonStore: CommonStoreInterface;
  recordStore: RecordStoreInterface;
}

class Dashboard extends React.Component<
  Props & WithStyles<"infoSummary" | "card">
> {
  openRecord = (record: any) => {
    console.log("Opening ", record);
  };

  render() {
    const { classes, recordStore } = this.props;
    const account = this.props.commonStore.account;

    return (
      <div>
        <div className={classes.infoSummary}>
          <Typography color="inherit" type="display1">
            {account.display_name}
          </Typography>
        </div>
        <Grid container spacing={0} className={classes.card}>
          <Grid item xs={12} md>
            <Records
              records={recordStore.sortedRecords}
              onSelectRecord={this.openRecord}
              loading={recordStore.recordsLoading}
            />
          </Grid>
          <Grid item style={{ width: 16 }}>
            &nbsp;
          </Grid>
          <Grid item xs={12} md>
            The Dashboard!
          </Grid>
        </Grid>
      </div>
    );
  }
}

const dashboardCover = require("../../../../images/dashboard_cover.jpg");
const styles = {
  infoSummary: {
    background: `#666 url('${dashboardCover}')`,
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    backgroundPosition: 0,
    height: "200px",
    color: "#FFF",
    padding: 20,
    marginBottom: 20,
    ...layoutHelpers.card
  },
  card: layoutHelpers.card
};
const ObservedDashboard = observer(Dashboard);
const StyledDashboard = withStyles(styles)(ObservedDashboard);
const InjectedDashboard = inject("recordStore", "commonStore")(StyledDashboard);

export default InjectedDashboard;
