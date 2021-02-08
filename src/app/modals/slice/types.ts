export enum ModalType {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export interface ModalState {
  isShowing: boolean;
  type: ModalType;
}
