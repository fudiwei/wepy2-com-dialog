import { WepyComponent } from "@wepy/core/types/wepy";

export interface WepyComponentDialog extends WepyComponent {
    /**
     * 显示提示对话框。
     * @param {String | Object} options
     */
    alert(options: string | WepyComponentDialog.AlertDialogOptions): void;
    
    /**
     * 显示确认对话框。
     * @param {String | Object} options
     */
    confirm(options: string | WepyComponentDialog.ConfirmDialogOptions): void;
}

export namespace WepyComponentDialog {
    export type TextAligns = 'center' | 'left' | 'right';

    export interface AlertDialogOptions {
        title?: string;
        content: string;
        confirmText?: string;
        confirmTextColor?: string;
        textAlign?: TextAligns;
        success?: (e: { index: number }) => void;
    }

    export interface ConfirmDialogOptions extends AlertDialogOptions {
        cancelText?: string;
    }
}
