export interface BaseDialogProps {
  onClose(): void;
  open: boolean;
}

export type BaseDialog = React.FC<BaseDialogProps>;
