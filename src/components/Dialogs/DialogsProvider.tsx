import { useEffect, useState } from "react";
import { IDialogEvent, getDialog } from "./Dialogs";
import { EventBus } from "../EventBus/event-bus";

const DialogsProvider = () => {
  const [dialogEvent, setDialogEvent] = useState<IDialogEvent | undefined>();

  useEffect(() => {
    EventBus.getInstance().subscribe({
      type: "dialog-event",
      callback: (event) => {
        if (dialogEvent) {
          setDialogEvent(undefined);
        }
        setDialogEvent(event);
      },
    });
  }, []);

  const Dialog = getDialog();

  return (
    <Dialog
      open={Boolean(dialogEvent)}
      onClose={() => setDialogEvent(undefined)}
      {...dialogEvent?.props}
    />
  );
};

export default DialogsProvider;
