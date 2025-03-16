export default logger;
declare namespace logger {
    function _output(level: any, scope: any, msg: any): void;
    let _console: any;
    let _log: any[];
    let _levels: string[];
    let level: string;
}
