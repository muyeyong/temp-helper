declare const getTemplateUrl: (template: string) => {
    success: boolean;
    message: string;
    result?: undefined;
} | {
    success: boolean;
    result: any;
    message: string;
};
declare const setTemplateUrl: (template: string, url: string) => {
    success: boolean;
    message: string;
};
export { getTemplateUrl, setTemplateUrl };
