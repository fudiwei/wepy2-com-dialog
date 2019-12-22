export interface ComponentDialog {
    /**
     * 显示提示对话框。
     * @param {String | Object} options
     */
    alert(
        options:
            | string
            | {
                  title?: string;
                  content: string;
                  confirmText?: string;
                  confirmTextColor?: string;
                  textAlign?: string;
                  success?: (e: { index: number }) => any;
              }
    ): void;
    
    /**
     * 显示确认对话框。
     * @param {String | Object} options
     */
    confirm(
        options:
            | string
            | {
                  title?: string;
                  content: string;
                  confirmText?: string;
                  confirmTextColor?: string;
                  cancelText?: string;
                  textAlign?: string;
                  success?: (e: { index: number }) => any;
              }
    ): void;
}
