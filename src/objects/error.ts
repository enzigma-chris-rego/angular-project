export class Error {
    public message: string;
    public success: boolean;
    public record: any = {};
    public stacktrace: string;
    
    constructor( ) {
        this.success = true;
     }
}