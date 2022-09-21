import * as React from 'react';

export interface IMessageBarProps{
    status: string;
    text: string;
}

const MessageBar: React.FC<IMessageBarProps> = ({status, text}: IMessageBarProps) => {
    return(
    status && text &&  <div className={ (status === "error") ?  "alert alert-danger alert-dismissible fade show" : (status === "warning") ? "alert alert-warning alert-dismissible fade show" : "alert alert-info alert-dismissible fade show"} role="alert">
        {text}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
        </div>
    );
}

export default MessageBar;
