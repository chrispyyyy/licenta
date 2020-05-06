import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export const TaskExpansionPanel = ({ showMore, task, epic, userStory }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log("us", epic);
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
          { epic && (
            <div>
              <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
              >
              <Typography className={classes.heading}>{epic.name}</Typography>
                <Typography className={classes.secondaryHeading}>
                  Project: {epic.project.name}
                </Typography>
              </ExpansionPanelSummary>
            </div>
          )}

        <ExpansionPanelDetails>
          { epic && (
          <Typography>
              {epic.description}
          </Typography>
          )
          }
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
      >
        { userStory && (
            <div>
              <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
              >
                <Typography className={classes.heading}>{userStory.name}</Typography>
                <Typography className={classes.secondaryHeading}>
                  Project: {userStory.project.name}
                </Typography>
              </ExpansionPanelSummary>
            </div>
        )}

        <ExpansionPanelDetails>
          { userStory && (
              <Typography>
                {userStory.description}
              </Typography>
          )
          }
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
      >
        { task && (
            <div>
              <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
              >
                <Typography className={classes.heading}>{task.name}</Typography>
                <Typography className={classes.secondaryHeading}>
                  Project: {task.project.name}
                </Typography>
              </ExpansionPanelSummary>
            </div>
        )}

        <ExpansionPanelDetails>
          { task &&(
              <Typography>
                {task.description}
              </Typography>
          )
          }
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
