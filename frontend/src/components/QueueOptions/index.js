import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { Button, Grid, IconButton, StepContent, TextField, FormControlLabel, Switch, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import api from "../../services/api";
import toastError from "../../errors/toastError";
import useQueues from "../../hooks/useQueues";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    //height: 400,
    [theme.breakpoints.down("sm")]: {
      maxHeight: "20vh",
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  input: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  addButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  maxWidth: {
    width: "100%",
  },
  verticalCenter: {
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

export function QueueOptionStepper({ queueId, options, updateOptions }) {
  const classes = useStyles();
  const [activeOption, setActiveOption] = useState(-1);
  const [forwardQueue, setForwardQueue] = useState(null);
  const [closeTicket, setCloseTicket] = useState(false);
  const [allQueues, setAllQueues] = useState([]);
  const [queues, setQueues] = useState([]);
  const { findAll: findAllQueues } = useQueues();
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const loadQueues = async () => {
        const list = await findAllQueues();
        setAllQueues(list);
        setQueues(list);
      };
      loadQueues();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOption = (index) => async () => {
    setActiveOption(index);
    const option = options[index];

    if (option !== undefined && option.id !== undefined) {
      try {
        const { data } = await api.request({
          url: "/queue-options",
          method: "GET",
          params: { queueId, parentId: option.id },
        });
        const optionList = data.map((option) => {
          return {
            ...option,
            children: [],
            edition: false,
          };
        });
        option.children = optionList;
        updateOptions();
      } catch (e) {
        toastError(e);
      }
    }
  };

  const handleSave = async (option) => {
    try {
      const tempOption = { ...option };
      tempOption.forwardQueueId = tempOption.forwardQueueId || null;
      if (option.id) {
        await api.request({
          url: `/queue-options/${option.id}`,
          method: "PUT",
          data: tempOption,
        });
      } else {
        const { data } = await api.request({
          url: `/queue-options`,
          method: "POST",
          data: tempOption,
        });
        option.id = data.id;
      }
      option.edition = false;
      updateOptions();
    } catch (e) {
      toastError(e);
    }
  };

  const handleEdition = (index) => {
    options[index].edition = !options[index].edition;
    updateOptions();
  };

  const handleDeleteOption = async (index) => {
    const option = options[index];
    if (option !== undefined && option.id !== undefined) {
      try {
        await api.request({
          url: `/queue-options/${option.id}`,
          method: "DELETE",
        });
      } catch (e) {
        toastError(e);
      }
    }
    options.splice(index, 1);
    options.forEach(async (option, order) => {
      option.option = order + 1;
      await handleSave(option);
    });
    updateOptions();
  };

  const handleOptionChangeTitle = (event, index) => {
    options[index].title = event.target.value;
    updateOptions();
  };

  const handleOptionChangeMessage = (event, index) => {
    options[index].message = event.target.value;
    updateOptions();
  };

  const handleToggleCloseTicket = (event, index) => {
    options[index].closeTicket = !options[index].closeTicket;
    if (options[index].closeTicket) {
      options[index].forwardQueueId = "";
    }
    updateOptions();
  }

  const handleChangeForwardQueue = (value, index) => {
    console.debug("Selected queue", value);
    options[index].forwardQueueId = `${value}`;
    if (options[index].forwardQueueId) {
      options[index].closeTicket = false;
    }
    updateOptions();
  }

  const renderTitle = (index) => {
    const option = options[index];
    if (option.edition) {
      return (
        <>
          <TextField
            value={option.title}
            onChange={(event) => handleOptionChangeTitle(event, index)}
            size="small"
            className={classes.input}
            placeholder="Título da opção"
          />
          {option.edition && (
            <>
              <IconButton
                color="primary"
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={() => handleSave(option)}
              >
                <SaveIcon />
              </IconButton>
              <IconButton
                variant="outlined"
                color="secondary"
                size="small"
                className={classes.button}
                onClick={() => handleDeleteOption(index)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </>
          )}
        </>
      );
    }
    return (
      <>
        <Typography>
          {option.title !== "" ? option.title : "Título não definido"}
          <IconButton
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={() => handleEdition(index)}
          >
            <EditIcon />
          </IconButton>
        </Typography>
      </>
    );
  };

  const renderMessage = (index) => {
    const option = options[index];
    if (option.edition) {
      return (
        <>
          <TextField
            style={{ width: "100%" }}
            multiline
            value={option.message}
            onChange={(event) => handleOptionChangeMessage(event, index)}
            size="small"
            className={classes.input}
            placeholder="Digite o texto da opção"
          />
          <Grid spacing={3} container>
          <Grid className={classes.verticalCenter} xs={12} sm={12} md={3} item>
            <FormControlLabel
              control={
                <Switch
                  checked={option.closeTicket}
                  disabled={option.forwardQueueId && !option.closeTicket}
                  color="primary"
                  onChange={(event) => handleToggleCloseTicket(event, index)}
                  name="closeTicket"
                  size="small"
                />
              }
              label="Close Ticket"
            />
          </Grid>

          <Grid xs={12} sm={12} md={3} item>
            <FormControl className={classes.maxWidth}>
              <InputLabel>
                Forward to Queue
              </InputLabel>
              <Select
                value={option.forwardQueueId}
                onChange={(event) => handleChangeForwardQueue(event.target.value, index)}
                label="Select queue"
                size="small"
                disabled={option.closeTicket && !option.forwardQueueId}
              >
                <MenuItem key="noqueue" value="">
                  None
                </MenuItem>
                {queues.map((queue) => (
                  <MenuItem key={queue.id} value={queue.id}>
                    {queue.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        </>
      );
    }
    return (
      <>
        <Typography onClick={() => handleEdition(index)}>
          {option.message}
        </Typography>
      </>
    );
  };

  const handleAddOption = (index) => {
    const optionNumber = options[index].children.length + 1;
    options[index].children.push({
      title: "",
      message: "",
      edition: false,
      option: optionNumber,
      queueId,
      parentId: options[index].id,
      children: [],
    });
    updateOptions();
  };

  const renderStep = (option, index) => {
    return (
      <Step key={index}>
        <StepLabel style={{ cursor: "pointer" }} onClick={handleOption(index)}>
          {renderTitle(index)}
        </StepLabel>
        <StepContent>
          {renderMessage(index)}

          {option.id !== undefined && (
            <>
              <Button
                color="primary"
                size="small"
                onClick={() => handleAddOption(index)}
                startIcon={<AddIcon />}
                variant="outlined"
                className={classes.addButton}
              >
                Adicionar
              </Button>
            </>
          )}
          <QueueOptionStepper
            queueId={queueId}
            options={option.children}
            updateOptions={updateOptions}
          />
        </StepContent>
      </Step>
    );
  };

  const renderStepper = () => {
    return (
      <Stepper
        style={{ marginBottom: 0, paddingBottom: 0 }}
        nonLinear
        activeStep={activeOption}
        orientation="vertical"
      >
        {options.map((option, index) => renderStep(option, index))}
      </Stepper>
    );
  };

  return renderStepper();
}

export function QueueOptions({ queueId }) {
  const classes = useStyles();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (queueId) {
      const fetchOptions = async () => {
        try {
          const { data } = await api.request({
            url: "/queue-options",
            method: "GET",
            params: { queueId, parentId: -1 },
          });
          const optionList = data.map((option) => {
            return {
              ...option,
              children: [],
              edition: false,
            };
          });
          setOptions(optionList);
        } catch (e) {
          toastError(e);
        }
      };
      fetchOptions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderStepper = () => {
    if (options.length > 0) {
      return (
        <QueueOptionStepper
          queueId={queueId}
          updateOptions={updateOptions}
          options={options}
        />
      );
    }
  };

  const updateOptions = () => {
    setOptions([...options]);
  };

  const addOption = () => {
    const newOption = {
      title: "",
      message: "",
      edition: false,
      option: options.length + 1,
      queueId,
      parentId: null,
      children: [],
    };
    setOptions([...options, newOption]);
  };

  return (
    <div className={classes.root}>
      <br />
      <Typography>
        Opções
        <Button
          color="primary"
          size="small"
          onClick={addOption}
          startIcon={<AddIcon />}
          style={{ marginLeft: 10 }}
          variant="outlined"
        >
          Adicionar
        </Button>
      </Typography>
      {renderStepper()}
    </div>
  );
}
