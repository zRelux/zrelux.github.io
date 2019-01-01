import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import CustomTabs from "../../ui/CustomTabs/CustomTabs";

const styles = theme => ({
  title: {
    marginBottom: 15
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

class ModalProject extends React.Component {
  render() {
    const { classes } = this.props;

    const { title, languages, product, problems } = this.props.project;

    let technologies = languages.split(", ").map((item, i) => {
      return <Chip key={i} label={item} className={classes.chip} />;
    });
    return (
      <>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <CustomTabs
          headerColor="primary"
          tabs={[
            {
              tabName: "Product",
              tabContent: (
                <Typography variant="subtitle2" className={classes.textCenter}>
                  {product}
                </Typography>
              )
            },
            {
              tabName: "Problems faced",
              tabContent: (
                <Typography variant="subtitle2" className={classes.textCenter}>
                  {problems}
                </Typography>
              )
            },
            {
              tabName: "Technologies",
              tabContent: <>{technologies}</>
            }
          ]}
        />
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ModalProject);
