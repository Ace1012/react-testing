import { BaseEvent } from "../EventBus/event-bus.types";
import { BaseDialog, BaseDialogProps } from "./Dialog.types";

interface IDialog extends BaseDialogProps {
  dude?: string;
}

export interface IDialogEvent extends BaseEvent {
  props?: Record<string, any>;
}

export class DialogEvent implements IDialogEvent {
  props: Record<string, any> | undefined;
  type: any;
  id: any;

  constructor(event: IDialogEvent) {
    this.props = event.props;
    this.id = event.id;
    this.type = event.type;
  }
}

const Dialog = (props: IDialog) => {
  const { open, onClose, dude } = props;

  console.log(dude);

  return (
    <div
      style={{
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transition: "opacity ease-in-out 150ms",
        backgroundColor: "rgb(0,0,0,0.5)",
        position: "absolute",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          padding: "5rem 10rem",
        }}
      >
        <button
          style={{
            color: "white",
          }}
          onClick={onClose}
        >
          Click me!
        </button>
      </div>
    </div>
  );
};

export function getDialog(): BaseDialog {
  return Dialog;
}
